// src/components/notifications/FloatingNotice.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaBullhorn, FaTimes } from 'react-icons/fa';
import styles from './FloatingNotice.module.css';

export default function FloatingNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  
  // Não mostrar na página da notícia em si
  const isOnNoticePage = pathname === '/noticias/aviso-utilizacao-indevida-nome-cnpj';
  
  useEffect(() => {
    // Verifica se o usuário já fechou o popup
    const hasClosed = localStorage.getItem('floatingNoticeClosed');
    
    // Só mostra se não estiver na página da notícia e não tiver fechado antes
    if (!isOnNoticePage && !hasClosed) {
      // Pequeno delay para melhor UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isOnNoticePage]);

  const handleClose = () => {
    setIsVisible(false);
    // Salva no localStorage para não mostrar novamente
    localStorage.setItem('floatingNoticeClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className={styles.floatingNotice}>
      <button 
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Fechar aviso"
      >
        <FaTimes />
      </button>
      
      <Link 
        href="/noticias/aviso-utilizacao-indevida-nome-cnpj" 
        className={styles.noticeLink}
      >
        <div className={styles.noticeContent}>
          <div className={styles.iconContainer}>
            <FaBullhorn className={styles.icon} />
          </div>
          
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Comunicado Importante</h3>
            <p className={styles.description}>
              Aviso sobre utilização indevida do nome e CNPJ da Golden Capital
            </p>
            <span className={styles.linkText}>Leia mais →</span>
          </div>
        </div>
      </Link>
    </div>
  );
}