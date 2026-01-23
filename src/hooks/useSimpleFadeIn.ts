// src/hooks/useSimpleFadeIn.ts
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface UseSimpleFadeInProps {
  delay?: number;
  y?: number;
  duration?: number;
}

export const useSimpleFadeIn = ({ 
  delay = 0, 
  y = 20, 
  duration = 1 
}: UseSimpleFadeInProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;

    // Animação básica sem ScrollTrigger
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
      }
    );
  }, [delay, y, duration]);

  return elementRef;
};