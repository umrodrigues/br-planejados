'use client'

import Image from 'next/image'
import styles from './Banner.module.scss'
import { motion } from 'framer-motion'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src="/banner.jpg"
        alt="Móveis sob medida"
        fill
        className={styles.image}
        priority
      />

      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          MÓVEIS SOB MEDIDA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          BR PLANEJADOS
        </motion.h2>

        <motion.a
          href="https://api.whatsapp.com/send?phone=555198503622"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={styles.button}
        >
          FALE CONOSCO
        </motion.a>
      </motion.div>
    </div>
  )
}
