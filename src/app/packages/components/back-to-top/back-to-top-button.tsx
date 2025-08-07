'use client';import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import clsx from 'clsx';
import styles from './BackToTopButton.module.scss';

export const BackToTopButton = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 350) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className={clsx(styles.button, showTopButton ? styles.fadeIn : styles.fadeOut)}
      aria-label="Back to top"
    >
      <AiOutlineArrowUp />
    </button>
  );
};
