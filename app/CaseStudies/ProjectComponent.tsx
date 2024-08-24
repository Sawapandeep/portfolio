import React, { forwardRef, RefObject, useRef } from "react";
import { Button } from "@/app/components/shadcn-ui/Button";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import code from '@/public/Svg/code.svg';
import { ComponentBeam } from "@/app/components/magicui/ComponentBeam";

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

export function ProjectComponent({
    technologies,
    className,
}: {
    technologies: string[];
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const divRefs: RefObject<HTMLButtonElement>[] = Array.from({ length: technologies.length }, () =>
        useRef<HTMLButtonElement>(null)
    );
    const imageRef = useRef<HTMLDivElement>(null);

    const isEven = technologies.length % 2 === 0;
    const middleIndex1 = Math.floor(technologies.length / 2) - 1;
    const middleIndex2 = Math.floor(technologies.length / 2);

    // Dynamic height calculation based on the number of technologies
    const heightClass =
        technologies.length < 4
            ? 'h-[200px]' // Smaller height for fewer technologies
            : 'h-[500px]'; // Default larger height

    return (
        <div
            className={cn(
                `relative flex w-full  items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-transparent p-10 md:shadow-xl  ${heightClass} `,
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
                            className="bg-black text-white p-3 rounded-lg shadow-[0_0_20px_-12px_rgba(0,0,0,1)]"
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
                    curvature = 75 * (1 - index / middleIndex1);
                } else if (index === middleIndex1 || index === middleIndex2) {
                    curvature = index === middleIndex1 ? 5 : -5;
                } else {
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

//!V-before h-shrinking

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

//     // Calculate the middle index or indices
//     const isEven = technologies.length % 2 === 0;
//     const middleIndex1 = Math.floor(technologies.length / 2) - 1;
//     const middleIndex2 = Math.floor(technologies.length / 2);

//     return (
//         <div
//             className={cn(
//                 "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-transparent p-10 md:shadow-xl ",
//                 className,
//             )}
//             ref={containerRef}
//         >
//             <div className="flex w-full flex-row items-stretch justify-between gap-10 max-w-lg">
//                 <div className="flex flex-col justify-center gap-2">
//                     {divRefs.map((ref, index) => (
//                         <Button
//                             key={index}
//                             ref={ref}
//                             className="bg-violet-500 text-white p-3 rounded-lg shadow-[0_0_20px_-12px_rgba(0,0,0,1)]"
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

//             {divRefs.map((ref, index) => {
//                 let curvature = 0;

//                 if (index < middleIndex1) {
//                     // Positive curvature towards the middle
//                     curvature = 75 * (1 - index / middleIndex1);
//                 } else if (index === middleIndex1 || index === middleIndex2) {
//                     // Curvature for the middle elements if even
//                     curvature = index === middleIndex1 ? 5 : -5;
//                 } else {
//                     // Negative curvature away from the middle
//                     const distanceFromMiddle = index - middleIndex2;
//                     const maxDistanceFromMiddle = divRefs.length - 1 - middleIndex2;
//                     curvature = -75 * (distanceFromMiddle / maxDistanceFromMiddle);
//                 }

//                 return (
//                     <ComponentBeam
//                         key={index}
//                         containerRef={containerRef}
//                         fromRef={ref}
//                         toRef={imageRef}
//                         curvature={curvature}
//                     />
//                 );
//             })}
//         </div>
//     );
// }
