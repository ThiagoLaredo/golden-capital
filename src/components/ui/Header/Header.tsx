'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
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

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
        document.body.style.overflow = 'unset';
      }, 300);
    }
  };

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      closeMenu();
    }
  };

  // Função para verificar se o path atual corresponde ao link
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const navItems = [
    { href: '/', label: translations.Navigation.home },
    { href: '/solucoes', label: translations.Navigation.solutions },
    { href: '/equipe', label: translations.Navigation.team },
    { href: '/diferenciais', label: translations.Navigation.differentials },
    { href: '/cases', label: translations.Navigation.cases },
    { href: '/noticias', label: translations.Navigation.news },
    { href: '/contato', label: translations.Navigation.contact },
  ];

  const handleLanguageChange = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    // Feedback visual ao mudar idioma
    const buttons = document.querySelectorAll(`.${styles.mobileLangBtn}`);
    buttons.forEach(btn => {
      btn.classList.remove(styles.active);
      if (btn.textContent === lang.toUpperCase()) {
        btn.classList.add(styles.active);
      }
    });
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Link da logo */}
          <Link href="/" className={styles.logo}>
            <img 
              src="/logo-golden-capital-partners-dark.svg" 
              alt="Golden Capital" 
            />
          </Link>
          
          {/* Menu Desktop */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
            
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

          {/* Botão Hamburguer (apenas mobile) */}
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Overlay do Menu Mobile */}
      <div 
        className={`${styles.mobileOverlay} ${isMenuOpen ? styles.active : ''} ${isAnimating ? styles.animating : ''}`}
        onClick={closeMenu}
      />

      {/* Menu Mobile */}
      <div 
        ref={menuRef}
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''} ${isAnimating ? styles.closing : ''}`}
      >
        <div className={styles.mobileMenuHeader}>
          <Link 
            href="/" 
            className={styles.mobileLogo}
            onClick={closeMenu}
          >
            <img 
              src="/logo-golden-capital-partners-dark.svg" 
              alt="Golden Capital" 
            />
          </Link>
          
          <button 
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ''}`}
              onClick={closeMenu}
            >
              <span className={styles.navText}>{item.label}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </nav>

        <div className={styles.mobileFooter}>
          <div className={styles.mobileLanguageSelector}>
            <button 
              className={`${styles.mobileLangBtn} ${language === 'pt' ? styles.active : ''}`}
              onClick={() => handleLanguageChange('pt')}
              aria-label="Português"
            >
              PT
            </button>
            <button 
              className={`${styles.mobileLangBtn} ${language === 'en' ? styles.active : ''}`}
              onClick={() => handleLanguageChange('en')}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;