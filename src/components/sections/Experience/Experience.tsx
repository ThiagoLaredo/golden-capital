'use client';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Experience.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedTextsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  // Palavras para animar em cada idioma
  const animatedPhrases = {
    pt: [
      "Estruturação de Capitais,",
      "Reestruturação Financeira,", 
      "Fusões & Aquisições e",
      "Real Estate."
    ],
    en: [
      "Capital Structuring,",
      "Financial Restructuring,",
      "Mergers & Acquisitions and", 
      "Real Estate."
    ]
  };

  // Texto adicional abaixo do h3
  const additionalText = {
    pt: "Oferecemos experiência, dedicação e pragmatismo, com abordagens adequadas às mais diversas situações, empresas e setores, para que você se dedique ao crescimento do seu negócio.",
    en: "We offer experience, dedication and pragmatism, with approaches suitable for the most diverse situations, companies and sectors, so you can focus on growing your business."
  };

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [language]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const animatedElements = animatedTextsRef.current.filter(Boolean);
      
      if (animatedElements.length > 0) {
        // CRIAR UMA TIMELINE ÚNICA PARA TODAS AS FRASES
        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            toggleActions: "play none none none",
          }
        });

        // PROCESSAR CADA FRASE EM SEQUÊNCIA
        animatedElements.forEach((element, elementIndex) => {
          if (!element) return;
          
          const originalText = element.textContent || '';
          element.innerHTML = '';
          
          const letters = [];
          
          for (let i = 0; i < originalText.length; i++) {
            const char = originalText[i];
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            span.style.color = '#dddddd'; // Cor inicial
            
            if (char === ' ') {
              span.style.width = '0.3em';
              span.innerHTML = '&nbsp;';
            }
            
            letters.push(span);
            element.appendChild(span);
          }

          // Configurar estado inicial garantido
          gsap.set(letters, { color: '#dddddd' });
          
          // ADICIONAR ANIMAÇÃO DA FRASE ATUAL À TIMELINE PRINCIPAL
          // Criar animação letra por letra com transição de 3 cores
          letters.forEach((letter, letterIndex) => {
            const letterTimeline = gsap.timeline();
            
            // Animação individual da letra
            letterTimeline
              .to(letter, {
                color: '#d0ab76', // Dourado
                duration: 0.15,
                ease: "power1.inOut"
              })
              .to(letter, {
                color: '#1a335f', // Azul
                duration: 0.35,
                ease: "power1.out"
              });

            // Adicionar à timeline principal com stagger
            masterTimeline.add(letterTimeline, 
              elementIndex * 0.4 + // Delay entre frases
              letterIndex * 0.03   // Stagger entre letras
            );
          });
        });
      }

    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [animationKey]);

  const addAnimatedTextRef = (el: HTMLSpanElement | null, index: number) => {
    animatedTextsRef.current[index] = el;
  };

  // Função para processar o texto e destacar frases específicas
  const renderTextWithHighlights = (text: string, paragraphIndex: number) => {
    const currentLanguage = language as 'pt' | 'en';
    const phrasesToHighlight = animatedPhrases[currentLanguage];
    
    let result = [];
    let lastIndex = 0;
    let highlightCount = 0;

    phrasesToHighlight.forEach((phrase, phraseIndex) => {
      const index = text.indexOf(phrase, lastIndex);
      
      if (index !== -1) {
        // Texto antes da frase destacada
        if (index > lastIndex) {
          result.push(text.slice(lastIndex, index));
        }
        
        // Frase destacada (será animada letra por letra)
        result.push(
          <span
            key={`p${paragraphIndex}-w${phraseIndex}`}
            ref={el => addAnimatedTextRef(el, highlightCount++)}
            className={styles.animatedText}
          >
            {phrase}
          </span>
        );
        
        lastIndex = index + phrase.length;
      }
    });

    // Texto restante
    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex));
    }

    return result;
  };

  return (
    <section ref={sectionRef} className={styles.experience} key={animationKey}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Título principal como H2 - alinhado à esquerda */}
          <h2 className={styles.title}>{translations.Home.experience.title}</h2>
          
          <div className={styles.text}>
            {/* Primeiro parágrafo transformado em H3 para SEO */}
            <h3 className={styles.mainStatement}>
              {renderTextWithHighlights(translations.Home.experience.paragraphs[0], 0)}
            </h3>
            
            {/* Texto adicional abaixo do h3 */}
            <p className={styles.additionalText}>
              {additionalText[language as keyof typeof additionalText]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}