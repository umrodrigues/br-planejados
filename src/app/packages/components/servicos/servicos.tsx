'use client'

import Image from 'next/image'
import styles from './Servicos.module.scss'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { FaPlay } from 'react-icons/fa'
import { servicos } from './__mocks__/servicos.mock'
import { useState } from 'react'

type MidiaItem = {
  type: 'image' | 'video'
  src: string
  alt?: string
}

interface ServicoCarouselProps {
  midia: readonly MidiaItem[]
}

export default function Servicos() {
  return (
    <section className={styles.servicos}>
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
            initial={{ opacity: 0, scale: 0.9 }}
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
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
  })

  const [playing, setPlaying] = useState<Record<number, boolean>>({})

  const togglePlay = (idx: number, videoRef: HTMLVideoElement | null) => {
    if (!videoRef) return
    if (playing[idx]) {
      videoRef.pause()
    } else {
      videoRef.play()
    }
    setPlaying((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
      {midia.map((item, idx) => {
        if (item.type === 'image') {
          return (
            <div key={idx} className={`keen-slider__slide ${styles.slide}`}>
              <Image
                src={item.src}
                alt={item.alt || ''}
                width={500}
                height={500}
                className={styles.image}
              />
            </div>
          )
        }
        if (item.type === 'video') {
          let videoRef: HTMLVideoElement | null = null
          return (
            <div key={idx} className={`keen-slider__slide ${styles.slide}`}>
              <div className={styles.videoWrapper}>
                <video
                  ref={(ref) => {
                    videoRef = ref
                  }}
                  src={item.src}
                  className={styles.video}
                  preload="metadata"
                />
                <button
                  className={styles.playIcon}
                  onClick={() => togglePlay(idx, videoRef)}
                >
                  <FaPlay />
                </button>
              </div>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
