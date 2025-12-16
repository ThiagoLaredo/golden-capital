'use client';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import { useFadeInStagger } from '../../../hooks/useFadeInStagger';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  
  // Animação para todos os elementos em sequência
  const containerRef = useFadeInStagger({ 
    delay: 0.1, 
    stagger: 0.1, 
    y: 20,
    childSelector: `.${styles.footerItem}` 
  });

  return (
    <footer className={styles.footer}>
      <div ref={containerRef} className={styles.container}>
        {/* Logo */}
        <div className={`${styles.footerItem} ${styles.logoContainer}`}>
          <img 
            src="/logo-golden-capital-partners-dark.svg" 
            alt="Golden Capital Partners" 
            className={styles.logo}
          />
        </div>

        {/* Nome da empresa e copyright */}
        <div className={`${styles.footerItem} ${styles.companyInfo}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {translations.Footer.rights}
          </p>
        </div>

        {/* Endereço */}
        <div className={`${styles.footerItem} ${styles.address}`}>
          <p className={styles.addressText}>
            Av. Brigadeiro Faria Lima, 4300<br />
            Edifício Offices | 3º andar – 316<br />
            São Paulo/SP – CEP 04538-132
          </p>
        </div>

        {/* Telefone */}
        <div className={`${styles.footerItem} ${styles.contact}`}>
          <p className={styles.phone}>
            +55 (11) 3842-8522
          </p>
        </div>

        {/* LinkedIn e CRECI */}
        <div className={`${styles.footerItem} ${styles.bottomInfo}`}>
          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/company/golden-capital" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkedin}
          >
            <FaLinkedin className={styles.linkedinIcon} />
            LinkedIn
          </a>

          {/* CRECI */}
          <p className={styles.creci}>
            CRECI 038126-J
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;