'use client';
import { useRef, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { pt, en } from '../../../lib/translations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef<boolean[]>([]); // Para controlar quais já animaram

  // Reset do controle de animação quando a linguagem mudar
  useEffect(() => {
    hasAnimatedRef.current = [];
  }, [language]);

  // Animação de entrada da seção e título
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );

      // Animação dos cards
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

  // Animação automática dos números - sempre que entrar no viewport no scroll down
  useEffect(() => {
    const finalValues = translations.Home.transactions.items.map(item => {
      const processedValue = item.value.replace('Mais de', '+').replace('More than', '+');
      const parsed = parseAnimatedValue(processedValue);
      return { processedValue, parsed };
    });
    
    // Inicializa o array de controle se necessário
    if (hasAnimatedRef.current.length === 0) {
      hasAnimatedRef.current = new Array(finalValues.length).fill(false);
    }
    
    numberRefs.current.forEach((element, index) => {
      if (!element) return;

      const { processedValue, parsed } = finalValues[index];
      
      if (parsed.number > 0) {
        // Configura o valor inicial
        element.innerText = parsed.prefix + '0' + parsed.suffix;

        ScrollTrigger.create({
          trigger: element,
          start: "top 90%",
          end: "bottom 60%",
          onEnter: () => {
            // Só anima se ainda não animou neste ciclo
            if (!hasAnimatedRef.current[index]) {
              gsap.fromTo(element,
                { innerText: 0 },
                {
                  innerText: parsed.number,
                  duration: 2,
                  ease: "power2.out",
                  onUpdate: function() {
                    const currentValue = Math.floor(this.targets()[0].innerText);
                    element.innerText = parsed.prefix + currentValue.toLocaleString() + parsed.suffix;
                  },
                  onComplete: function() {
                    element.innerText = processedValue;
                    hasAnimatedRef.current[index] = true;
                  }
                }
              );
            }
          },
          onEnterBack: () => {
            // Não faz nada no scroll up - mantém o valor atual
          },
          onLeave: () => {
            // Quando sai da viewport, reseta o controle para poder animar novamente
            // Isso permite que anime de novo se o usuário scrollar para baixo novamente
            hasAnimatedRef.current[index] = false;
            
            // Opcional: reseta para o valor inicial quando sai da viewport
            // element.innerText = parsed.prefix + '0' + parsed.suffix;
          },
          onLeaveBack: () => {
            // Quando sai pelo topo no scroll up, também reseta
            hasAnimatedRef.current[index] = false;
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [language, translations]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    numberRefs.current[index] = el;
  };

  const processedItems = translations.Home.transactions.items.map(item => ({
    ...item,
    value: item.value.replace('Mais de', '+').replace('More than', '+')
  }));

  return (
    <section ref={sectionRef} className={styles.transactions}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={styles.title}>
          {translations.Home.transactions.title}
        </h2>
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