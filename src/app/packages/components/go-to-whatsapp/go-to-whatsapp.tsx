'use client';
import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import styles from './GoToWhatsapp.module.scss';

export const GoToWhatsapp = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5551997791996', '_blank');
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