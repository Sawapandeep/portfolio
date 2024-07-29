// import { useEffect, useRef, useState } from 'react';

// interface ScrollProps {
//     root?: Element | null;
//     rootMargin?: string;
//     threshold?: number | number[];
// }

// const Scroll = ({ root = null, rootMargin = '0px', threshold = 0.1 }: ScrollProps) => {
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const [isIntersecting, setIsIntersecting] = useState(false);
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

//     useEffect(() => {
//         let lastScrollY = window.scrollY;

//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//             if (currentScrollY > lastScrollY) {
//                 setScrollDirection('down');
//             } else {
//                 setScrollDirection('up');
//             }
//             lastScrollY = currentScrollY;
//         };

//         window.addEventListener('scroll', handleScroll);

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting && scrollDirection === 'down' && !hasAnimated) {
//                     setIsIntersecting(true);
//                     setHasAnimated(true);
//                 } else {
//                     setIsIntersecting(false);
//                 }
//             },
//             {
//                 root,
//                 rootMargin,
//                 threshold,
//             }
//         );

//         if (containerRef.current) {
//             observer.observe(containerRef.current);
//         }

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             if (containerRef.current) {
//                 observer.unobserve(containerRef.current);
//             }
//         };
//     }, [root, rootMargin, threshold, scrollDirection, hasAnimated]);

//     return { containerRef, isIntersecting };
// };

// export default Scroll;

// //!v1
import { useEffect, useRef, useState } from "react";

const Scroll = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return { containerRef, isIntersecting };
};

export default Scroll;
