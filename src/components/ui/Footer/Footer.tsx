'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

// Registrar o ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const footerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação mais confiável - usando o container como trigger
      gsap.fromTo(containerRef.current, 
        { 
          opacity: 0,
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%", // Dispara quando o container está quase saindo da viewport
            end: "bottom top",
            toggleActions: "play none none none",
          }
        }
      );

      // Animações em sequência para os elementos internos
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        }
      });

      tl.fromTo(`.${styles.logoSection}`, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(`.${styles.address}`, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4" // Overlap com animação anterior
      )
      .fromTo(`.${styles.contact}`, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(`.${styles.links} a`, 
        { opacity: 0, x: -15 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>  <img src="/logo-golden-capital-partners-dark.svg" alt="Golden Capital" /></div>
            <p className={styles.copyright}>
              {translations.Footer.rights}
            </p>
          </div>

          <div className={styles.contactSection}>
            <div className={styles.address}>
              <h4>{translations.Footer.address}</h4>
              <p>
                Av. Brigadeiro Faria Lima, 4300<br />
                Edifício Offices | 3º andar – 316<br />
                São Paulo/SP – CEP 04538-132
              </p>
            </div>

            <div className={styles.contact}>
              <h4>{translations.Footer.contact}</h4>
              <p>+55 (11) 3842-8522</p>
              <div className={styles.social}>
                <a 
                  href="https://linkedin.com/company/golden-capital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
              </div>
              <p className={styles.creci}>{translations.Footer.creci}</p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <div className={styles.links}>
            <Link href="/">{translations.Navigation.home}</Link>
            <Link href="/solucoes">{translations.Navigation.solutions}</Link>
            <Link href="/equipe">{translations.Navigation.team}</Link>
            <Link href="/diferenciais">{translations.Navigation.differentials}</Link>
            <Link href="/cases">{translations.Navigation.cases}</Link>
            <Link href="/contato">{translations.Navigation.contact}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;