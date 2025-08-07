'use client';

import styles from './AboutSection.module.scss';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="empresa">
      <motion.div
        className={styles.iconWrapper}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FaUsers size={40} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Quem Somos
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Somos a 
      </motion.p>
    </section>
  );
}
