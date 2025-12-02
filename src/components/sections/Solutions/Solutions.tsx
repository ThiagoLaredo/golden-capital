'use client';
import { useRef, useEffect } from 'react';
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
  
  // CONTROLE DE DISTÂNCIA - Ajuste estes valores conforme necessário
  const DESKTOP_SCROLL_DISTANCE = 1000; 
  const MOBILE_SCROLL_DISTANCE = 800; // Novo: scroll para mobile

  useEffect(() => {
    if (!sectionRef.current) return;

    // Usar GSAP Context
    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth > 768;
      const scrollDistance = isDesktop ? DESKTOP_SCROLL_DISTANCE : MOBILE_SCROLL_DISTANCE;

      // Fixar o vídeo durante o scroll (funciona em desktop E mobile)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: `.${styles.videoColumn}`,
        pinSpacing: false,
        markers: false, // Mude para false depois de ajustar
        id: 'video-pin',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => console.log(`🎬 Vídeo começou a fixar (${isDesktop ? 'Desktop' : 'Mobile'})`),
        onLeave: () => console.log('🎬 Vídeo parou de fixar'),
        onUpdate: (self) => {
          if (self.progress > 0.95 && self.progress < 1) {
            console.log(`📊 Últimos 5% do scroll (${(self.progress * 100).toFixed(1)}%)`);
          }
        }
      });
      
      console.log(`📏 Vídeo fixo por ${scrollDistance}px de scroll (${isDesktop ? 'Desktop' : 'Mobile'})`);
      
      // Observar redimensionamento para atualizar distâncias
      const handleResize = () => {
        ScrollTrigger.refresh();
        console.log('🔄 Window resized - ScrollTriggers refreshed');
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup do event listener
      return () => window.removeEventListener('resize', handleResize);
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [translations]);

  return (
    <section ref={sectionRef} className={styles.solutions}>
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <div className={styles.content}>
            <div className={styles.solutionsList}>
              {translations.Home.solutions.items.map((solution, index) => (
                <div key={index} className={styles.solutionItem}>
                  <div className={styles.solutionHeader}>
                    <AnimatedText 
                      text={solution.title}
                      className={styles.cardTitle}
                      as="h3"
                      baseColor="#dddddd"
                      accentColor="#d0ab76"
                      finalColor="#05213a"
                      scrollSensitivity={2}
                      letterDelay={0.02}
                    />
                  </div>
                  
                  <AnimatedText 
                    text={solution.description}
                    className={styles.cardDescription}
                    as="p"
                    baseColor="#dddddd"
                    accentColor="#d0ab76"
                    finalColor="#333333"
                    scrollSensitivity={2}
                    letterDelay={0.01}
                  />
                </div>
              ))}
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