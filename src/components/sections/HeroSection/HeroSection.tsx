'use client';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();
  
  const translations = language === 'pt' ? pt : en;
  const slides = translations.Home.hero.slides;

  // Define o vídeo APENAS no cliente (após hydration)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setVideoSrc(isMobile 
      ? '/video-background-mobile.mp4'
      : '/video-background-desktop.mp4'
    );
  }, []);

  // Fallback para o original
  const fallbackSrc = '/video-background-goldencapitalpartners.mp4';

  useEffect(() => {
    if (isVideoLoaded) {
      setTimeout(() => setShowContent(true), 300);
    }
  }, [isVideoLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, language]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.classList.add(styles.loaded);
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoError = () => {
    if (videoRef.current && videoSrc !== fallbackSrc) {
      const source = videoRef.current.querySelector('source');
      if (source) {
        source.src = fallbackSrc;
        videoRef.current.load();
      }
    }
  };

  // Carrega o vídeo quando a fonte estiver definida
  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.videoContainer}>
        {/* Renderiza o vídeo apenas quando temos a fonte */}
        {videoSrc && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            onCanPlay={() => setIsVideoLoaded(true)}
            onError={handleVideoError}
            className={styles.video}
            preload="auto"
          >
            <source 
              src={videoSrc} 
              type="video/mp4" 
            />
            Seu navegador não suporta vídeos HTML5.
          </video>
        )}

        {/* Placeholder */}
        {(!videoSrc || !isVideoLoaded) && (
          <div className={styles.videoPlaceholder}>
            <div className={styles.loadingSpinner}></div>
          </div>
        )}

        <div className={styles.overlay}></div>
      </div>

      <div className={`${styles.contentContainer} ${showContent ? styles.show : ''}`}>
        <div className={styles.slidesContainer}>
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
      </div>

      <div className={`${styles.scrollIndicator} ${showContent ? styles.show : ''}`}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}