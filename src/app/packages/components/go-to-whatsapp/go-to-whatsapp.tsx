'use client';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import styles from './GoToWhatsapp.module.scss';

export const GoToWhatsapp = () => {
  const mensagem = encodeURIComponent('Olá, vim do site e gostaria de solicitar um orçamento.');
  const handleClick = () => {
    window.open(`https://wa.me/555198503622?text=${mensagem}`, '_blank');
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={styles.button}
        aria-label="Ir para a conversa do WhatsApp"
      >
        <AiOutlineWhatsApp />
      </button>
      <div className={styles.message} onClick={handleClick}>
        Clique aqui para conversar conosco via WhatsApp!
      </div>
    </div>
  );
};
