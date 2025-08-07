'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/BR.png" alt="BR Planejados" width={160} height={90} priority className={styles.logoImage} />
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="#servicos">Serviços</Link>
          <span>|</span>
          <Link href="#quem-somos">Quem somos</Link>
          <span>|</span>
          <Link href="#contato">Contato</Link>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <Link href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
            <Link href="#quem-somos" onClick={() => setMenuOpen(false)}>Quem somos</Link>
            <Link href="#contato" onClick={() => setMenuOpen(false)}>Contato</Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
