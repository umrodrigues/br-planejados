'use client'

import Image from 'next/image'
import styles from './Servicos.module.scss'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useState } from 'react'

type MidiaItem = { type: 'image'; src: string; alt?: string }
interface ServicoCarouselProps { midia: readonly MidiaItem[] }

export default function Servicos() {
  const [servicos, setServicos] = useState<{ midia: MidiaItem[] }[]>([])

  useEffect(() => {
    let mounted = true
    const exists = async (url: string) => {
      try {
        const head = await fetch(url, { method: 'HEAD', cache: 'no-store' })
        if (head.ok) return true
        if (head.status === 405) {
          const getResp = await fetch(url, { method: 'GET', cache: 'no-store' })
          return getResp.ok
        }
        return false
      } catch { return false }
    }
    const build = async () => {
      const totalProjetos = 20
      const imagensPorProjeto = 3
      const lista: { midia: MidiaItem[] }[] = []
      for (let p = 1; p <= totalProjetos; p++) {
        const checks = await Promise.all(
          Array.from({ length: imagensPorProjeto }, (_, i) =>
            exists(`/projetos/projeto${p}.${i + 1}.jpg`)
          )
        )
        const midia: MidiaItem[] = checks
          .map((ok, i) =>
            ok
              ? {
                  type: 'image',
                  src: `/projetos/projeto${p}.${i + 1}.jpg`,
                  alt: `Projeto ${p} imagem ${i + 1}`,
                }
              : null
          )
          .filter(Boolean) as MidiaItem[]
        if (midia.length) lista.push({ midia })
      }
      if (mounted) setServicos(lista)
    }
    build()
    return () => { mounted = false }
  }, [])

  return (
    <section className={styles.servicos} id="servicos">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        NOSSOS SERVIÇOS
      </motion.h2>
      <div className={styles.grid}>
        {servicos.map((servico, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServicoCarousel midia={servico.midia} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ServicoCarousel({ midia }: ServicoCarouselProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: 'snap',
  })

  return (
    <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
      {midia.map((item, idx) => (
        <div key={idx} className={`keen-slider__slide ${styles.slide}`}>
          <Image
            src={item.src}
            alt={item.alt || ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 30vw"
            className={styles.image}
            priority={idx === 0}
          />
        </div>
      ))}
    </div>
  )
}
