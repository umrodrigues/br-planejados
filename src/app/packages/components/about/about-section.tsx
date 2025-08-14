'use client';

import styles from './AboutSection.module.scss';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="quem-somos">
      <div className={styles.content}>
        <h2>QUEM SOMOS</h2>
        <p>
          Há três anos no mercado, somos especialistas na fabricação de móveis sob medida, transformando ambientes com design, funcionalidade e requinte. Contamos com mão de obra altamente qualificada e dispomos de todos os equipamentos necessários para produzir peças de altíssimo padrão.
        </p>
        <p>
          Nossa prioridade é unir estética e durabilidade, utilizando apenas materiais de qualidade superior — um compromisso do qual não abrimos mão. Prezamos pelo cumprimento rigoroso dos prazos e pela entrega de um acabamento impecável, garantindo que cada projeto reflita a personalidade e o bom gosto de nossos clientes.
        </p>
      </div>
    </section>
  );
}
