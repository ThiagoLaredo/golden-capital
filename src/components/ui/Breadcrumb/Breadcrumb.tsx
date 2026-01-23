'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import styles from './Breadcrumb.module.css';

// REMOVA o registro do ScrollTrigger se não for usar
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  animateOnScroll?: boolean;
  animationOptions?: {
    delay?: number;
    duration?: number;
    y?: number;
  };
}

export default function Breadcrumb({ 
  items, 
  className = '', 
  animateOnScroll = true,
  animationOptions = {}
}: BreadcrumbProps) {
  const containerRef = useRef<HTMLElement>(null);
  
  const {
    delay = 0.1,
    duration = 0.6,
    y = 10
  } = animationOptions;

  useEffect(() => {
    if (!animateOnScroll || !containerRef.current) return;
    
    const element = containerRef.current;
    
    // ANIMAÇÃO SIMPLES - SEM SCROLLTRIGGER
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
        ease: "power2.out"
      }
    );
    
  }, [delay, duration, y, animateOnScroll]); // Note: removi 'once'

  // Para simplificar, remova a lógica de `!animateOnScroll` separada
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