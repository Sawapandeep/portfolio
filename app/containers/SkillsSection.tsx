'use client';
import { AnimatedBeam } from "@/app/components/magicui/AnimatedBeam";
import { cn } from "@/app/lib/utils";
import {
    api,
    cplusplus,
    express,
    figma,
    firebase,
    github,
    java,
    nextjs,
    nodejs,
    react,
    tailwind,
    typescript,
    laptop,
    vscode
} from "@/public/Svg/import";
import Image from "next/image";
import React, { forwardRef, RefObject, useRef, useState, useEffect } from "react";

// Tooltip Component
const Tooltip = ({ text }: { text: string }) => (
    <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-gray-800 text-white text-sm transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 whitespace-nowrap overflow-hidden"
    >
        {text}
    </div>
);

const Circle = forwardRef<
    HTMLDivElement,
    {
        className?: string;
        children?: React.ReactNode;
        altText: string;
    }
>(({ className, children, altText }, ref) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const circleRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside the Circle component
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (circleRef.current && !circleRef.current.contains(event.target as Node)) {
                setIsTooltipVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setIsTooltipVisible(!isTooltipVisible);
    };

    return (
        <div
            ref={(node) => {
                //@ts-ignore
                circleRef.current = node; // No direct assignment needed
                if (typeof ref === 'function') ref(node);
                else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }}
            className={cn(
                "relative z-10 size-12 items-start justify-center rounded-full bg-[#191b2a] p-1.5 shadow-[0_0_12px_-12px_rgba(0,0,0,0.8)] group",
                className
            )}
            onClick={handleClick}
            tabIndex={0}
        >
            {children}
            <div
                className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-gray-800 text-white text-sm transition-opacity duration-200 ${isTooltipVisible ? "opacity-100" : "opacity-0"
                    } group-hover:opacity-100 whitespace-nowrap overflow-hidden`}
            >
                {altText}
            </div>
        </div>
    );
});

Circle.displayName = "Circle";

export default function SkillSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const divRefs: RefObject<HTMLDivElement>[] = Array.from({ length: 14 }, () =>
        useRef<HTMLDivElement>(null)
    );

    const skills = [
        { src: firebase, alt: "Firebase" },
        { src: nodejs, alt: "Node.js" },
        { src: tailwind, alt: "Tailwind" },
        { src: laptop, alt: "My Skills" },
        { src: figma, alt: "Figma" },
        { src: express, alt: "Express" },
        { src: vscode, alt: "VS Code" },
        { src: nextjs, alt: "Next.js" },
        { src: react, alt: "React" },
        { src: java, alt: "Java" },
        { src: typescript, alt: "TypeScript" },
        { src: github, alt: "GitHub" },
        { src: cplusplus, alt: "C++" },
        { src: api, alt: "API" }
    ];

    return (
        <div className="relative w-full h-auto flex items-start justify-center overflow-hidden md:shadow-xl bg-black" ref={containerRef}>
            <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full text-3xl text-center leading-5 z-20 mt-10">
                My Skills?
            </h1>
            <div className="flex w-[85%] h-full flex-col max-w-lg mt-10 items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={divRefs[12]} altText={skills[12].alt}>
                        <Image src={skills[12].src} alt={skills[12].alt} />
                    </Circle>
                    <Circle ref={divRefs[13]} altText={skills[13].alt}>
                        <Image src={skills[13].src} alt={skills[13].alt} />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-evenly">
                    <Circle ref={divRefs[0]} altText={skills[0].alt}>
                        <Image src={skills[0].src} alt={skills[0].alt} />
                    </Circle>
                    <Circle ref={divRefs[4]} altText={skills[4].alt}>
                        <Image src={skills[4].src} alt={skills[4].alt} />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-around">
                    <Circle ref={divRefs[1]} altText={skills[1].alt}>
                        <Image src={skills[1].src} alt={skills[1].alt} />
                    </Circle>
                    <Circle ref={divRefs[3]} className="size-16" altText={skills[3].alt}>
                        <Image src={skills[3].src} alt={skills[3].alt} />
                    </Circle>
                    <Circle ref={divRefs[5]} altText={skills[5].alt}>
                        <Image src={skills[5].src} alt={skills[5].alt} />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={divRefs[2]} altText={skills[2].alt}>
                        <Image src={skills[2].src} alt={skills[2].alt} />
                    </Circle>
                    <Circle ref={divRefs[6]} altText={skills[6].alt}>
                        <Image src={skills[6].src} alt={skills[6].alt} />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={divRefs[7]} altText={skills[7].alt}>
                        <Image src={skills[7].src} alt={skills[7].alt} />
                    </Circle>
                    <Circle ref={divRefs[8]} altText={skills[8].alt}>
                        <Image src={skills[8].src} alt={skills[8].alt} />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-evenly">
                    <Circle ref={divRefs[9]} altText={skills[9].alt}>
                        <Image src={skills[9].src} alt={skills[9].alt} />
                    </Circle>
                    <Circle ref={divRefs[11]} altText={skills[11].alt}>
                        <Image src={skills[11].src} alt={skills[11].alt} />
                    </Circle>
                    <Circle ref={divRefs[10]} altText={skills[10].alt}>
                        <Image src={skills[10].src} alt={skills[10].alt} />
                    </Circle>
                </div>
            </div>

            {/* Animated Beams */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[12]}
                toRef={divRefs[3]}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[13]}
                toRef={divRefs[3]}
                curvature={75}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[0]}
                toRef={divRefs[3]}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[1]}
                toRef={divRefs[3]}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[2]}
                toRef={divRefs[3]}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[4]}
                toRef={divRefs[3]}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[5]}
                toRef={divRefs[3]}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[6]}
                toRef={divRefs[3]}
                curvature={75}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[7]}
                toRef={divRefs[3]}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[8]}
                toRef={divRefs[3]}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[9]}
                toRef={divRefs[3]}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[10]}
                toRef={divRefs[3]}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={divRefs[11]}
                toRef={divRefs[3]}
            />
        </div>
    );
}

//!1
// 'use client';
// import { AnimatedBeam } from "@/app/components/magicui/AnimatedBeam";
// import { cn } from "@/app/lib/utils";
// import {
//     api,
//     cplusplus,
//     express,
//     figma,
//     firebase,
//     github,
//     java,
//     nextjs,
//     nodejs,
//     react,
//     tailwind,
//     typescript,
//     user,
//     vscode
// } from "@/public/Svg/import";
// import Image from "next/image";
// import React, {
//     forwardRef,
//     RefObject,
//     useRef,
//     useState,
//     useEffect
// } from "react";

// // Tooltip Component
// const Tooltip = ({ text }: { text: string }) => (
//     <div
//         className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-gray-800 text-white text-sm transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 whitespace-nowrap overflow-hidden"
//     >
//         {text}
//     </div>
// );

// const Circle = forwardRef<
//     HTMLDivElement,
//     {
//         className?: string;
//         children?: React.ReactNode;
//         altText: string;
//     }
// >(({ className, children, altText }, ref) => {
//     const [isTooltipVisible, setIsTooltipVisible] = useState(false);
//     const circleRef = useRef<HTMLDivElement>(null);

//     // Handle clicks outside the Circle component
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (circleRef.current && !circleRef.current.contains(event.target as Node)) {
//                 setIsTooltipVisible(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleClick = () => {
//         setIsTooltipVisible(!isTooltipVisible);
//     };

//     return (
//         <div
//             ref={(node) => {
//                 circleRef.current = node;
//                 if (typeof ref === 'function') ref(node);
//                 else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
//             }}
//             className={cn(
//                 "relative z-10 size-12 items-start justify-center rounded-full bg-[#191b2a] p-1.5 shadow-[0_0_12px_-12px_rgba(0,0,0,0.8)] group",
//                 className
//             )}
//             onClick={handleClick}
//             tabIndex={0}
//         >
//             {children}
//             <div
//                 className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-gray-800 text-white text-sm transition-opacity duration-200 ${isTooltipVisible ? "opacity-100" : "opacity-0"
//                     } group-hover:opacity-100 whitespace-nowrap overflow-hidden`}
//             >
//                 {altText}
//             </div>
//         </div>
//     );
// });

// Circle.displayName = "Circle";

// export default function SkillSection() {
//     const containerRef = useRef<HTMLDivElement>(null);

//     const divRefs: RefObject<HTMLDivElement>[] = Array.from({ length: 14 }, () =>
//         useRef<HTMLDivElement>(null)
//     );

//     const skills = [
//         { src: firebase, alt: "Firebase" },
//         { src: nodejs, alt: "Node.js" },
//         { src: tailwind, alt: "Tailwind" },
//         { src: user, alt: "My Skills" },
//         { src: figma, alt: "Figma" },
//         { src: express, alt: "Express" },
//         { src: vscode, alt: "VS Code" },
//         { src: nextjs, alt: "Next.js" },
//         { src: react, alt: "React" },
//         { src: java, alt: "Java" },
//         { src: typescript, alt: "TypeScript" },
//         { src: github, alt: "GitHub" },
//         { src: cplusplus, alt: "C++" },
//         { src: api, alt: "API" }
//     ];

//     return (
//         <div className="relative w-full h-auto flex items-start justify-center overflow-hidden md:shadow-xl bg-black" ref={containerRef}>
//             <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full  text-center leading-5 z-20 mt-10 font-medium text-4xl">
//                 My Skills?
//             </h1>
//             <div className="flex size-full flex-col max-w-lg mt-10 items-stretch justify-between gap-10">
//                 <div className="flex flex-row items-center justify-between">
//                     <Circle ref={divRefs[12]} altText={skills[12].alt}>
//                         <Image src={skills[12].src} alt={skills[12].alt} />
//                     </Circle>
//                     <Circle ref={divRefs[13]} altText={skills[13].alt}>
//                         <Image src={skills[13].src} alt={skills[13].alt} />
//                     </Circle>
//                 </div>
//                 <div className="flex flex-row items-center justify-evenly">
//                     <Circle ref={divRefs[0]} altText={skills[0].alt}>
//                         <Image src={skills[0].src} alt={skills[0].alt} />
//                     </Circle>
//                     <Circle ref={divRefs[4]} altText={skills[4].alt}>
//                         <Image src={skills[4].src} alt={skills[4].alt} />
//                     </Circle>
//                 </div>
//                 <div className="flex flex-row items-center justify-around">
//                     <Circle ref={divRefs[1]} altText={skills[1].alt}>
//                         <Image src={skills[1].src} alt={skills[1].alt} />
//                     </Circle>
//                     <Circle ref={divRefs[3]} className="size-16" altText={skills[3].alt}>
//                         <Image src={skills[3].src} alt={skills[3].alt} />
//                     </Circle>
//                     <Circle ref={divRefs[5]} altText={skills[5].alt}>
//                         <Image src={skills[5].src} alt={skills[5].alt} />
//                     </Circle>
//                 </div>
//                 <div className="flex flex-row items-center justify-between">
//                     <Circle ref={divRefs[2]} altText={skills[2].alt}>
//                         <Image src={skills[2].src} alt={skills[2].alt} />
//                     </Circle>
//                     <Circle ref={divRefs[6]} altText={skills[6].alt}>
//                         <Image src={skills[6].src} alt={skills[6].alt} />
//                     </Circle>
//                 </div>
//                 <div className="flex flex-row items-center justify-between">
//                     <Circle ref={divRefs[7]} altText={skills[7].alt}>
//                         <Image src={skills[7].src} alt={skills[7].alt} />
//                     </Circle>
//                     <Circle ref={divRefs[8]} altText={skills[8].alt}>
//                         <Image src={skills[8].src} alt={skills[8].alt} />
//                     </Circle>
//                 </div>
//                 <div className="flex flex-row items-center justify-evenly">
//                     <Circle ref={divRefs[9]} altText={skills[9].alt}>
//                         <Image src={skills[9].src} alt={skills[9].alt} />
//                     </Circle>
//                     <Circle ref={divRefs[11]} altText={skills[11].alt}>
//                         <Image src={skills[11].src} alt={skills[11].alt} />
//                     </Circle>
//                     <Circle ref={divRefs[10]} altText={skills[10].alt}>
//                         <Image src={skills[10].src} alt={skills[10].alt} />
//                     </Circle>
//                 </div>
//             </div>

//             {/* Animated Beams */}
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[12]}
//                 toRef={divRefs[3]}
//                 curvature={75}
//                 endYOffset={10}
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[13]}
//                 toRef={divRefs[3]}
//                 curvature={75}
//                 endYOffset={10}
//                 reverse
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[0]}
//                 toRef={divRefs[3]}
//                 curvature={-75}
//                 endYOffset={-10}
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[1]}
//                 toRef={divRefs[3]}
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[2]}
//                 toRef={divRefs[3]}
//                 curvature={75}
//                 endYOffset={10}
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[4]}
//                 toRef={divRefs[3]}
//                 curvature={-75}
//                 endYOffset={-10}
//                 reverse
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[5]}
//                 toRef={divRefs[3]}
//                 reverse
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[6]}
//                 toRef={divRefs[3]}
//                 curvature={75}
//                 endYOffset={10}
//                 reverse
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[7]}
//                 toRef={divRefs[3]}
//                 reverse
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[8]}
//                 toRef={divRefs[3]}
//                 curvature={-75}
//                 endYOffset={-10}
//                 reverse
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[9]}
//                 toRef={divRefs[3]}
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[10]}
//                 toRef={divRefs[3]}
//                 curvature={-75}
//                 endYOffset={-10}
//             />
//             <AnimatedBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[11]}
//                 toRef={divRefs[3]}
//             />
//         </div>
//     );
// }
// ///