'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  
  const translations = language === 'pt' ? pt : en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para verificar se o path atual corresponde ao link
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Link da logo */}
        <Link href="/" className={styles.logo}>
          <img 
            src="/logo-golden-capital-partners-dark.svg" 
            alt="Golden Capital" 
          />
        </Link>
        
        <nav className={styles.nav}>
          <Link 
            href="/solucoes" 
            className={`${styles.navLink} ${isActive('/solucoes') ? styles.active : ''}`}
          >
            {translations.Navigation.solutions}
          </Link>
          <Link 
            href="/equipe" 
            className={`${styles.navLink} ${isActive('/equipe') ? styles.active : ''}`}
          >
            {translations.Navigation.team}
          </Link>
          <Link 
            href="/diferenciais" 
            className={`${styles.navLink} ${isActive('/diferenciais') ? styles.active : ''}`}
          >
            {translations.Navigation.differentials}
          </Link>
          <Link 
            href="/cases" 
            className={`${styles.navLink} ${isActive('/cases') ? styles.active : ''}`}
          >
            {translations.Navigation.cases}
          </Link>
          <Link 
            href="/contato" 
            className={`${styles.navLink} ${isActive('/contato') ? styles.active : ''}`}
          >
            {translations.Navigation.contact}
          </Link>
          
          <div className={styles.languageSelector}>
            <button 
              className={`${styles.langBtn} ${language === 'pt' ? styles.active : ''}`}
              onClick={() => setLanguage('pt')}
            >
              PT
            </button>
            <span style={{ opacity: 0.5 }}>|</span>
            <button 
              className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;