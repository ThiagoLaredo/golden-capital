'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { language } = useLanguage();
  
  const translations = language === 'pt' ? pt : en;
  const slides = translations.Home.hero.slides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, language]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoContainer}>
        {/* Video em tela cheia */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          <source src="/video-background-goldencapitalpartners.mp4" type="video/mp4" />
          {/* Fallback para navegadores que não suportam video */}
          Seu navegador não suporta vídeos HTML5.
        </video>

        {/* Overlay escuro para melhor contraste do texto */}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.slidesContainer}>
        {/* Text Slides */}
        <div className={styles.slidesWrapper}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ''
              }`}
            >
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.paragraph}>{slide.paragraph}</p>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}