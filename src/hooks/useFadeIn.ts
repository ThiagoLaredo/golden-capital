import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInOptions {
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  once?: boolean;
}

export function useFadeIn(options: FadeInOptions = {}) {
  const elementRef = useRef<any>(null);
  
  const {
    delay = 0,
    duration = 0.8,
    y = 20,
    x = 0,
    once = true
  } = options;

  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: y,
        x: x
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: once ? "play none none none" : "play none none reverse"
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
  }, [delay, duration, y, x, once]);

  return elementRef;
}