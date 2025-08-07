'use client';

import styles from './AboutSection.module.scss';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="empresa">
      <h2>QUEM SOMOS</h2>
      <p>
        Somos uma fábrica especializada na criação de móveis planejados sob medida. Unindo
        bom gosto com as últimas tendências de design, entregamos soluções exclusivas e
        funcionais para transformar seu ambiente.
      </p>
    </section>
  );
}
