'use client'

import Image from 'next/image'
import styles from './Servicos.module.scss'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import { servicos } from './__mocks__/servicos.mock'

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
        {servicos.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              className={styles.image}
            />
            {item.video && (
              <div className={styles.playIcon}>
                <FaPlay />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
