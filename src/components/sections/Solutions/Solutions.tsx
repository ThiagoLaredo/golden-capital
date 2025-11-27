// Solutions.tsx - Versão simplificada
'use client';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from '../../ui/AnimatedText/AnimatedText';
import styles from './Solutions.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Solutions() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const solutions = translations.Home.solutions.items;

      // Fixar o vídeo durante o scroll da section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: `.${styles.videoColumn}`,
        pinSpacing: false
      });

      // Atualizar o item ativo
      solutions.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: `.${styles.solutionItem}[data-index="${index}"]`,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveItem(index),
          onEnterBack: () => setActiveItem(index),
        });
      });

    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [translations]);

  // Calcular delay base baseado no comprimento do título
  const calculateTitleDelay = (title: string) => {
    const groupSize = 3;
    const letterDuration = 0.35;
    const totalGroups = Math.ceil(title.length / groupSize);
    return totalGroups * (letterDuration * 2); // Delay entre grupos * número de grupos
  };

  return (
    <section ref={sectionRef} className={styles.solutions}>
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <div className={styles.content}>
            <div className={styles.solutionsList}>
              {translations.Home.solutions.items.map((solution, index) => {
                const titleDelay = calculateTitleDelay(solution.title);
                
                return (
                  <div key={index} className={styles.solutionItem} data-index={index}>
                    <div className={styles.solutionHeader}>
                      <AnimatedText 
                        text={solution.title}
                        className={styles.cardTitle}
                        as="h3"
                        baseColor="#dddddd"
                        accentColor="var(--secondary-color)"
                        finalColor="var(--paragraph-color)"
                        letterDuration={0.35}
                        scrollSensitivity={0.6}
                        groupSize={3}
                      />
                    </div>
                    
                    <AnimatedText 
                      text={solution.description}
                      className={styles.cardDescription}
                      as="p"
                      baseColor="#dddddd"
                      accentColor="var(--secondary-color)" 
                      finalColor="var(--paragraph-color)"
                      letterDuration={0.3}
                      scrollSensitivity={0.6}
                      groupSize={3}
                      startDelay={titleDelay} // Delay calculado baseado no título
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.videoColumn}>
          <div className={styles.videoContainer}>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className={styles.video}
            >
              <source src="/video-background-goldencapitalpartners.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}