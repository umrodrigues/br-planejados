'use client'

import Image from 'next/image'
import styles from './Servicos.module.scss'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { FaPlay } from 'react-icons/fa'
import { servicos } from './__mocks__/servicos.mock'
import { useState, useRef } from 'react'

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

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})
  const [playing, setPlaying] = useState<Record<number, boolean>>({})

  const togglePlay = (idx: number) => {
    const video = videoRefs.current[idx]
    if (!video) return

    if (playing[idx]) {
      video.pause()
      setPlaying((prev) => ({ ...prev, [idx]: false }))
    } else {
      video.play()
      setPlaying((prev) => ({ ...prev, [idx]: true }))
    }
  }

  const handleClick = (idx: number) => {
    togglePlay(idx)
  }

  return (
    <div ref={sliderRef} className={`keen-slider ${styles.carousel}`}>
      {midia.map((item, idx) => {
        if (item.type === 'image') {
          return (
            <div
              key={idx}
              className={`keen-slider__slide ${styles.slide}`}
              style={{ cursor: 'default' }}
            >
              <Image
                src={item.src}
                alt={item.alt || ''}
                width={600}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          )
        }
        if (item.type === 'video') {
          return (
            <div
              key={idx}
              className={`keen-slider__slide ${styles.slide}`}
              onClick={() => handleClick(idx)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.videoWrapper}>
                <video
                  ref={(el): void => {
                    videoRefs.current[idx] = el
                  }}
                  src={item.src}
                  className={styles.video}
                  preload="metadata"
                />
                {!playing[idx] && (
                  <button
                    className={styles.playIcon}
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePlay(idx)
                    }}
                    aria-label="Play video"
                  >
                    <FaPlay />
                  </button>
                )}
              </div>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
