'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.scss';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const iconVariants = {
  hover: { scale: 1.2, color: "#c9a94f", y: -4 },
  initial: { scale: 1, color: "#7a6e3c", y: 0 },
};

const mensagem = encodeURIComponent('Olá, vim do site e gostaria de solicitar um orçamento.');

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <motion.div 
        className={styles.inner} 
        initial={{ opacity: 0, y: 12 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className={styles.logo} 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          BR Planejados
        </motion.h2>
        <motion.p 
          className={styles.tagline} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Transformando ideias em soluções para o seu lar.
        </motion.p>
        <div className={styles.socials}>
          <motion.div whileHover="hover" initial="initial" variants={iconVariants}>
            <Link href="https://www.instagram.com/br.planejados" target="_blank" aria-label="Instagram">
              <FaInstagram size={22} />
            </Link>
          </motion.div>
          <motion.div whileHover="hover" initial="initial" variants={iconVariants}>
            <Link href={`https://wa.me/555198503622?text=${mensagem}`} target="_blank" aria-label="WhatsApp">
              <FaWhatsapp size={22} />
            </Link>
          </motion.div>
        </div>
        <motion.p 
          className={styles.dev} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Desenvolvido por{' '}
          <Link href="https://www.lunaristech.com.br" target="_blank" rel="noopener noreferrer">
            Lunaris Tech
          </Link>
        </motion.p>
      </motion.div>
    </footer>
  );
}
