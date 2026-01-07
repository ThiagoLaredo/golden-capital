'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import styles from './Breadcrumb.module.css';

// Registrar ScrollTrigger apenas no cliente
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  animateOnScroll?: boolean; // Nova prop para controlar animação
  animationOptions?: {
    delay?: number;
    duration?: number;
    y?: number;
    once?: boolean;
  };
}

export default function Breadcrumb({ 
  items, 
  className = '', 
  animateOnScroll = true,
  animationOptions = {}
}: BreadcrumbProps) {
  const containerRef = useRef<HTMLElement>(null);
  
  // Opções padrão para a animação do breadcrumb (sutil)
  const {
    delay = 0.1,
    duration = 0.6,
    y = 10,
    once = true
  } = animationOptions;

  useEffect(() => {
    if (!animateOnScroll || !containerRef.current) return;
    
    const element = containerRef.current;
    
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: y
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 90%", // Um pouco mais alto para breadcrumbs
          end: "bottom 20%",
          toggleActions: once ? "play none none none" : "play none none reverse",
          // Para breadcrumbs, podemos ativar mais cedo
          markers: false // Debug: false em produção
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, y, once, animateOnScroll]);

  // Se não animar, retornar o componente sem ref
  if (!animateOnScroll) {
    return (
      <nav className={`${styles.breadcrumb} ${className}`} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbList}>
          {items.map((item, index) => (
            <li key={item.href} className={styles.breadcrumbItem}>
              {index > 0 && (
                <span className={styles.separator}>
                  <FaChevronRight size={12} />
                </span>
              )}
              
              {item.active ? (
                <span className={styles.activeItem} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav 
      ref={containerRef}
      className={`${styles.breadcrumb} ${className}`} 
      aria-label="Breadcrumb"
    >
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={item.href} className={styles.breadcrumbItem}>
            {index > 0 && (
              <span className={styles.separator}>
                <FaChevronRight size={12} />
              </span>
            )}
            
            {item.active ? (
              <span className={styles.activeItem} aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}