import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionAnimationOptions {
  titleDelay?: number;
  contentDelay?: number;
  staggerDelay?: number;
}

export function useSectionAnimation(options: SectionAnimationOptions = {}) {
  const sectionRef = useRef<any>(null);
  const titleRef = useRef<any>(null);
  const contentRef = useRef<any>(null);
  
  const {
    titleDelay = 0.1,
    contentDelay = 0.3,
    staggerDelay = 0.15
  } = options;

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

    // Animação para o título
    if (title) {
      gsap.fromTo(title, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: titleDelay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    // Animação para o conteúdo (com stagger se tiver múltiplos elementos)
    if (content) {
      const children = content.children;
      
      if (children.length > 0) {
        gsap.fromTo(children, 
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: contentDelay,
            stagger: staggerDelay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      } else {
        // Se for um único elemento
        gsap.fromTo(content, 
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: contentDelay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [titleDelay, contentDelay, staggerDelay]);

  return { sectionRef, titleRef, contentRef };
}