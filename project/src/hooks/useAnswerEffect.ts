import { useEffect } from 'react';
import gsap from 'gsap';

export function useAnswerEffect(answer: boolean | null) {
  useEffect(() => {
    if (answer === true) {
      gsap.to('.container', {
        backgroundColor: '#fdf2f8',
        duration: 1,
        ease: 'power2.inOut'
      });
      gsap.from('.hearts', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out'
      });
    } else if (answer === false) {
      document.documentElement.classList.remove('dark');
      const styleSheet = document.styleSheets[0];
      for (let i = styleSheet.cssRules.length - 1; i >= 0; i--) {
        styleSheet.deleteRule(i);
      }
    }
  }, [answer]);
}