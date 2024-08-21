"use client";

import { ComponentBeam } from "@/app/components/magicui/ComponentBeam";
import { Button } from "@/app/components/shadcn-ui/Button";
import { cn } from "@/app/lib/utils";
import { forwardRef, RefObject, useRef } from "react";
import code from '@/public/Svg/code.svg';
import Image from "next/image";

// Custom Circle component
const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

// ProjectComponent that displays technologies
export function ProjectComponent({
    technologies,
    className,
}: {
    technologies: string[];
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Create an array of refs for each Button
    const divRefs: RefObject<HTMLButtonElement>[] = Array.from({ length: technologies.length }, () =>
        useRef<HTMLButtonElement>(null)
    );

    const imageRef = useRef<HTMLDivElement>(null); // Ref for the Circle/Image component

    // Calculate the middle index or indices
    const isEven = technologies.length % 2 === 0;
    const middleIndex1 = Math.floor(technologies.length / 2) - 1;
    const middleIndex2 = Math.floor(technologies.length / 2);

    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border-2  bg-transparent p-10 md:shadow-xl invert ",
                className,
            )}
            ref={containerRef}
        >
            <div className="flex w-full flex-row items-stretch justify-between gap-10 max-w-lg">
                <div className="flex flex-col justify-center gap-2">
                    {divRefs.map((ref, index) => (
                        <Button
                            key={index}
                            ref={ref}
                            className="bg-violet-500 text-white p-3 rounded-lg shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
                        >
                            <div className="text-center">
                                <p className="text-sm mt-1">{technologies[index]}</p>
                            </div>
                        </Button>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <Circle ref={imageRef}>
                        <Image src={code} alt="Project" />
                    </Circle>
                </div>
            </div>

            {divRefs.map((ref, index) => {
                let curvature = 0;

                if (index < middleIndex1) {
                    // Positive curvature towards the middle
                    curvature = 75 * (1 - index / middleIndex1);
                } else if (index === middleIndex1 || index === middleIndex2) {
                    // Curvature for the middle elements if even
                    curvature = index === middleIndex1 ? 5 : -5;
                } else {
                    // Negative curvature away from the middle
                    const distanceFromMiddle = index - middleIndex2;
                    const maxDistanceFromMiddle = divRefs.length - 1 - middleIndex2;
                    curvature = -75 * (distanceFromMiddle / maxDistanceFromMiddle);
                }

                return (
                    <ComponentBeam
                        key={index}
                        containerRef={containerRef}
                        fromRef={ref}
                        toRef={imageRef}
                        curvature={curvature}
                    />
                );
            })}
        </div>
    );
}

// "use client";

// import { ComponentBeam } from "@/app/components/magicui/ComponentBeam";
// import { Button } from "@/app/components/shadcn-ui/Button";
// import { cn } from "@/app/lib/utils";
// import { forwardRef, RefObject, useRef } from "react";
// import code from '@/public/Svg/code.svg';
// import Image from "next/image";

// // Custom Circle component
// const Circle = forwardRef<
//     HTMLDivElement,
//     { className?: string; children?: React.ReactNode }
// >(({ className, children }, ref) => {
//     return (
//         <div
//             ref={ref}
//             className={cn(
//                 "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
//                 className,
//             )}
//         >
//             {children}
//         </div>
//     );
// });

// Circle.displayName = "Circle";

// // ProjectComponent that displays technologies
// export function ProjectComponent({
//     technologies,
//     className,
// }: {
//     technologies: string[];
//     className?: string;
// }) {
//     const containerRef = useRef<HTMLDivElement>(null);

//     // Create an array of refs for each Button
//     const divRefs: RefObject<HTMLButtonElement>[] = Array.from({ length: technologies.length }, () =>
//         useRef<HTMLButtonElement>(null)
//     );

//     const imageRef = useRef<HTMLDivElement>(null); // Ref for the Circle/Image component

//     // Calculate the middle index for the technologies
//     const middleIndex = Math.floor(technologies.length / 2);

//     return (
//         <div
//             className={cn(
//                 "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-transparent p-10 md:shadow-xl",
//                 className,
//             )}
//             ref={containerRef}
//         >
//             <div className="flex w-full flex-row items-stretch justify-between gap-10 max-w-lg">
//                 <div className="flex flex-col justify-center gap-2">
//                     {divRefs.map((ref, index) => {
//                         // Determine border-radius based on position
//                         let borderRadius = "0%"; // Default for middle elements
//                         if (index === 0) {
//                             borderRadius = "50% 0% 0% 50%"; // More curvature on the left for the first element
//                         } else if (index === technologies.length - 1) {
//                             borderRadius = "0% 50% 50% 0%"; // More curvature on the right for the last element
//                         } else if (index === middleIndex) {
//                             borderRadius = "0%"; // Flat for the middle element
//                         }

//                         return (
//                             <Button
//                                 key={index}
//                                 ref={ref}
//                                 className={cn(
//                                     "bg-violet-500 text-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
//                                     `rounded-lg]` // Apply dynamic border-radius
//                                 )}
//                             >
//                                 <div className="text-center">
//                                     <p className="text-sm mt-1">{technologies[index]}</p>
//                                 </div>
//                             </Button>
//                         );
//                     })}
//                 </div>
//                 <div className="flex flex-col justify-center">
//                     <Circle ref={imageRef}>
//                         <Image src={code} alt="Project" />
//                     </Circle>
//                 </div>
//             </div>

//             {divRefs.map((ref, index) => (
//                 <ComponentBeam
//                     key={index}
//                     containerRef={containerRef}
//                     fromRef={ref}
//                     toRef={imageRef}
//                 />
//             ))}
//         </div>
//     );
// }
//!
// "use client";

// import { ComponentBeam } from "@/app/components/magicui/ComponentBeam";
// import { Button } from "@/app/components/shadcn-ui/Button";
// import { cn } from "@/app/lib/utils";
// import { forwardRef, RefObject, useRef } from "react";
// import code from '@/public/Svg/code.svg';
// import Image from "next/image";

// // Custom Circle component
// const Circle = forwardRef<
//     HTMLDivElement,
//     { className?: string; children?: React.ReactNode }
// >(({ className, children }, ref) => {
//     return (
//         <div
//             ref={ref}
//             className={cn(
//                 "z-10 flex size-12 items-center justify-center rounded-full bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
//                 className,
//             )}
//         >
//             {children}
//         </div>
//     );
// });

// Circle.displayName = "Circle";

// // ProjectComponent that displays technologies
// export function ProjectComponent({
//     technologies,
//     className,
// }: {
//     technologies: string[];
//     className?: string;
// }) {
//     const containerRef = useRef<HTMLDivElement>(null);

//     // Create an array of refs for each Button
//     const divRefs: RefObject<HTMLButtonElement>[] = Array.from({ length: technologies.length }, () =>
//         useRef<HTMLButtonElement>(null)
//     );

//     const imageRef = useRef<HTMLDivElement>(null); // Ref for the Circle/Image component

//     return (
//         <div
//             className={cn(
//                 "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-transparent p-10 md:shadow-xl",
//                 className,
//             )}
//             ref={containerRef}
//         >
//             <div className="flex w-full flex-row items-stretch justify-between gap-10 max-w-lg">
//                 <div className="flex flex-col justify-center gap-2">
//                     {divRefs.slice(0, 5).map((ref, index) => (
//                         <Button
//                             key={index}
//                             ref={ref}
//                             className="bg-violet-500 text-white p-3 rounded-md shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
//                         >
//                             <div className="text-center">
//                                 <p className="text-sm mt-1">{technologies[index]}</p>
//                             </div>
//                         </Button>
//                     ))}
//                 </div>
//                 <div className="flex flex-col justify-center">
//                     <Circle ref={imageRef}>
//                         <Image src={code} alt="Project" />
//                     </Circle>
//                 </div>
//             </div>

//             {divRefs.slice(0,).map((ref, index) => (
//                 <ComponentBeam
//                     key={index}
//                     containerRef={containerRef}
//                     fromRef={ref}
//                     toRef={imageRef}
//                 />
//             ))}
//         </div>
//     );
// }

//!V1
// "use client";

// import { ComponentBeam } from "@/app/components/magicui/ComponentBeam";
// import { cn } from "@/app/lib/utils";
// import Image from "next/image";
// import React, { forwardRef, RefObject, useRef } from "react";
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
// // Circle component
// const Circle = forwardRef<
//     HTMLDivElement,
//     { className?: string; children?: React.ReactNode }
// >(({ className, children }, ref) => {
//     return (
//         <div
//             ref={ref}
//             className={cn(
//                 "z-10 flex size- items-center justify-center rounded-md bg-violet-500 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
//                 className,
//             )}
//         >
//             {children}
//         </div>
//     );
// });

// Circle.displayName = "Circle";

// // ComponentBeamMultipleOutput component
// export function ProjectComponent({
//     className,
// }: {
//     className?: string;
// }) {
//     const containerRef = useRef<HTMLDivElement>(null);

//     // Create an array of refs for each Circle
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
//         <div
//             className={cn(
//                 "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-transparent p-10 md:shadow-xl",
//                 className,
//             )}
//             ref={containerRef}
//         >
//             <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
//                 <div className="flex flex-col justify-center gap-2">
//                     {divRefs.slice(0, 5).map((ref, index) => (
//                         <Circle key={index} ref={ref}>
//                             <div className="text-center">
//                                 <Image src={skills[index].src} alt={skills[index].alt} />
//                                 <p className="text-sm mt-1">{skills[index].alt}</p>
//                             </div>
//                         </Circle>
//                     ))}
//                 </div>
//                 <div className="flex flex-col justify-center">
//                     <Circle ref={divRefs[5]} className="size-16">
//                         <div className="text-center">
//                             <Image src={skills[5].src} alt={skills[5].alt} />
//                             <p className="text-sm mt-1">{skills[5].alt}</p>
//                         </div>
//                     </Circle>
//                 </div>
//                 <div className="flex flex-col justify-center">
//                     <Circle ref={divRefs[6]}>
//                         <div className="text-center">
//                             <Image src={skills[6].src} alt={skills[6].alt} />
//                             <p className="text-sm mt-1">{skills[6].alt}</p>
//                         </div>
//                     </Circle>
//                 </div>
//             </div>

//             {divRefs.slice(0, 5).map((ref, index) => (
//                 <ComponentBeam
//                     key={index}
//                     containerRef={containerRef}
//                     fromRef={ref}
//                     toRef={divRefs[5]}
//                 />
//             ))}
//             <ComponentBeam
//                 containerRef={containerRef}
//                 fromRef={divRefs[5]}
//                 toRef={divRefs[6]}
//             />
//         </div>
//     );
// }
