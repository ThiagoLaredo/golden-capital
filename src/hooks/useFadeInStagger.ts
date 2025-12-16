import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInStaggerOptions {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  once?: boolean;
  childSelector?: string; // Adicionando esta propriedade
}

export function useFadeInStagger(options: FadeInStaggerOptions = {}) {
  const containerRef = useRef<any>(null);
  
  const {
    delay = 0,
    duration = 0.8,
    y = 20,
    stagger = 0.15,
    once = true,
    childSelector
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Usar childSelector se fornecido, caso contrário usar children
    const elements = childSelector 
      ? container.querySelectorAll(childSelector)
      : container.children;
    
    if (elements.length === 0) return;
    
    gsap.fromTo(elements, 
      {
        opacity: 0,
        y: y
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: once ? "play none none none" : "play none none reverse"
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [delay, duration, y, stagger, once, childSelector]);

  return containerRef;
}