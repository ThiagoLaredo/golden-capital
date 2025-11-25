'use client';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPuzzlePiece, 
  faChartPie, 
  faChess, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitle from '../../ui/AnimatedTitle/AnimatedTitle';
import styles from './Solutions.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const icons = [faPuzzlePiece, faChartPie, faChess, faChartLine];

export default function Solutions() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de entrada dos cards
      gsap.fromTo(`.${styles.card}`, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: `.${styles.cards}`,
            start: "top 70%",
            toggleActions: "play none none none",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.solutions}>
      <div className={styles.container}>
        <AnimatedTitle text={translations.Home.solutions.title} />
        <div className={styles.cards}>
          {translations.Home.solutions.items.map((solution, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={icons[index]} />
              </div>
              <h3 className={styles.cardTitle}>{solution.title}</h3>
              <p className={styles.cardDescription}>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}