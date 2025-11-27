'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedText.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  finalColor?: string;
  baseColor?: string;
  accentColor?: string;
  letterDuration?: number;
  scrollSensitivity?: number;
  startDelay?: number;
  groupSize?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  onAnimationComplete?: () => void; // Nova prop para callback
}

export default function AnimatedText({ 
  text, 
  className = '',
  finalColor = '#05213a',
  baseColor = '#dddddd',
  accentColor = '#d0ab76',
  letterDuration = 0.3,
  scrollSensitivity = 0.5,
  startDelay = 0,
  groupSize = 4,
  as = 'span',
  onAnimationComplete
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady || !containerRef.current) return;

    const letters = lettersRef.current.filter(Boolean);
    if (letters.length === 0) return;

    // Configurar estado inicial
    gsap.set(letters, { color: baseColor });

    // Criar timeline mestre com scrub
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'top 30%',
        scrub: scrollSensitivity,
        toggleActions: "play none reverse none",
      },
      onComplete: onAnimationComplete // Chamar callback quando terminar
    });

    // Adicionar delay inicial se especificado
    if (startDelay > 0) {
      masterTl.add(gsap.delayedCall(startDelay, () => {}));
    }

    // Calcular número total de grupos
    const totalGroups = Math.ceil(letters.length / groupSize);

    // Animação em grupos de letras
    for (let groupIndex = 0; groupIndex < totalGroups; groupIndex++) {
      const start = groupIndex * groupSize;
      const end = Math.min(start + groupSize, letters.length);
      const group = letters.slice(start, end);
      
      const groupTl = gsap.timeline();

      // Para cada letra no grupo, criar animação individual
      group.forEach((letter, indexInGroup) => {
        const letterTl = gsap.timeline();
        
        letterTl
          .to(letter, {
            color: accentColor,
            duration: letterDuration * 0.2,
            ease: "power1.inOut"
          })
          .to(letter, {
            color: finalColor,
            duration: letterDuration * 0.8,
            ease: "power1.out"
          });

        // Delay dentro do grupo (bem rápido)
        groupTl.add(letterTl, indexInGroup * (letterDuration * 0.3));
      });

      // Delay entre grupos - mais espaçado
      const groupDelay = groupIndex * (letterDuration * 2);
      masterTl.add(groupTl, startDelay + groupDelay);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [text, isReady, finalColor, baseColor, accentColor, letterDuration, scrollSensitivity, startDelay, groupSize, onAnimationComplete]);

  const addLetterRef = (el: HTMLSpanElement | null, index: number) => {
    lettersRef.current[index] = el;
  };

  const TextElement = as;

  return (
    <div 
      ref={containerRef} 
      className={`${styles.textContainer} ${className}`}
    >
      <TextElement className={styles.text}>
        {text.split('').map((letter, index) => (
          <span
            key={index}
            ref={el => addLetterRef(el, index)}
            className={styles.letter}
            style={{ color: baseColor }}
          > 
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </TextElement>
    </div>
  );
}