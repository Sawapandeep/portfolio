'use client';
import { useState, useEffect } from "react";
import useIntersectionObserver from "@/app/hooks/Scroll";
import { ReactNode } from "react";

interface ScrollHookProps {
    children: ReactNode;
    className?: string;
}

const ScrollHook = ({ children, className = "" }: ScrollHookProps) => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { containerRef, isIntersecting } = useIntersectionObserver({
        root: null,
        rootMargin: "0px",
        threshold: 0.2,  // 20% threshold
    });

    useEffect(() => {
        if (isIntersecting && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isIntersecting, hasAnimated]);

    return (
        <div
            ref={containerRef}
            className={`transition-opacity duration-[10] ${hasAnimated ? "opacity-100 animate-fadeIn" : "opacity-0"} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollHook;

//!v2
// 'use client';

// import { useState, useEffect } from "react";
// import useIntersectionObserver from "@/app/hooks/Scroll";
// import { ReactNode } from "react";

// interface ScrollHookProps {
//     children: ReactNode;
//     className?: string;
// }

// const ScrollHook = ({ children, className = "" }: ScrollHookProps) => {
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const { containerRef, isIntersecting } = useIntersectionObserver({
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.2,  // 20% threshold
//     });

//     useEffect(() => {
//         if (isIntersecting && !hasAnimated) {
//             setHasAnimated(true);
//         }
//     }, [isIntersecting, hasAnimated]);

//     return (
//         <div
//             ref={containerRef}
//             className={`transition-opacity duration-1000 ${hasAnimated ? "opacity-100 animate-fadeIn" : "opacity-0"} ${className}`}
//         >
//             {children}
//         </div>
//     );
// };

// export default ScrollHook;

// !v1
// 'use client';
// import Scroll from "@/app/hooks/Scroll";
// import React from "react";

// interface ScrollHookProps {
//     children: React.ReactNode;
//     className?: string;
// }

// const ScrollHook: React.FC<ScrollHookProps> = ({ children, className }) => {
//     const { containerRef, isIntersecting } = Scroll({
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.2,  // 20% threshold
//     });

//     return (
//         <div
//             ref={containerRef}
//             className={`transition-opacity duration-1000 ${isIntersecting ? "opacity-100 animate-fadeIn" : "opacity-0"
//                 } ${className}`}
//         >
//             {children}
//         </div>
//     );
// };

// export default ScrollHook;
