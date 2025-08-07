'use client';

import styles from './Footer.module.scss';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.inner}>
        <h2 className={styles.logo}>BR Planejados</h2>
        <p className={styles.tagline}>Transformando ideias em soluções digitais inovadoras.</p>
        <div className={styles.socials}>
          <Link href="https://www.instagram.com/lunaris.tech/" target="_blank">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5551997791996" target="_blank">
            <FaWhatsapp size={24} />
          </Link>
        </div>
        <p className={styles.dev}>
          Desenvolvido por{' '}
          <Link href="https://www.lunaristech.com.br" target="_blank">
            Lunaris Tech
          </Link>
        </p>
      </div>
    </footer>
  );
}
