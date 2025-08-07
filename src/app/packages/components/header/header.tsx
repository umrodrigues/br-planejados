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
          <Image src="/BR.png" alt="BR Planejados" width={180} height={100} />
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
          aria-label="Abrir menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
            <Link href="#quem-somos" onClick={() => setMenuOpen(false)}>Quem somos</Link>
            <Link href="#contato" onClick={() => setMenuOpen(false)}>Contato</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
