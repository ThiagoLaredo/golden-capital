'use client';
import { useRef, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedTitleWhite from '../../ui/AnimatedTitle/AnimatedTitleWhite';
import styles from './Transactions.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Função auxiliar para parse de números
const parseAnimatedValue = (value: string) => {
  const match = value.match(/(\d+)/);
  if (match) {
    return {
      prefix: value.split(match[0])[0],
      number: parseInt(match[0]),
      suffix: value.split(match[0])[1] || ''
    };
  }
  
  return {
    prefix: value,
    number: 0,
    suffix: ''
  };
};

export default function Transactions() {
  const { language } = useLanguage();
  const translations = language === 'pt' ? pt : en;
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animação de entrada da seção
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

  // Animação dos números
  useEffect(() => {
    const finalValues = translations.Home.transactions.items.map(item => {
      const processedValue = item.value.replace('Mais de', '+').replace('More than', '+');
      const parsed = parseAnimatedValue(processedValue);
      return { processedValue, parsed };
    });
    
    numberRefs.current.forEach((element, index) => {
      if (!element) return;

      const { processedValue, parsed } = finalValues[index];
      
      if (parsed.number > 0) {
        gsap.fromTo(element,
          { innerText: 0 },
          {
            innerText: parsed.number,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
            onUpdate: function() {
              const currentValue = Math.floor(this.targets()[0].innerText);
              element.innerText = parsed.prefix + currentValue.toLocaleString() + parsed.suffix;
            },
            onComplete: function() {
              element.innerText = processedValue;
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [language, translations]);

  // Função para adicionar refs aos elementos de número
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    numberRefs.current[index] = el;
  };

  // Processar os valores para substituir "Mais de" por "+"
  const processedItems = translations.Home.transactions.items.map(item => ({
    ...item,
    value: item.value.replace('Mais de', '+').replace('More than', '+')
  }));

  return (
    <section ref={sectionRef} className={styles.transactions}>
      <div className={styles.container}>
        <AnimatedTitleWhite text={translations.Home.transactions.title} />
        <div className={styles.cards}>
          {processedItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div 
                ref={el => addToRefs(el, index)}
                className={styles.value}
              >
                {item.value}
              </div>
              <div className={styles.label}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}