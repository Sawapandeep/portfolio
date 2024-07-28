// components/CombinedComponent.tsx
"use client";

import { cn } from "@/app/lib/utils";
import { css3, express, figma, firebase, github, html, java, javascript, nextjs, nodejs, prisma, react, typescript, vercel, vscode, whatsapp } from '@/public/Svg/import';
import Image from "next/image";
import React from "react";
// OrbitingCircles Component
export interface OrbitingCirclesProps {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}) => {
    return (
        <div className="relative">
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="pointer-events-none absolute inset-0 size-full"
                >
                    <circle
                        className="stroke-black/10 stroke-1 dark:stroke-white/10"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                    />
                </svg>
            )}

            <div
                style={
                    {
                        "--duration": duration,
                        "--radius": radius,
                        "--delay": -delay,
                    } as React.CSSProperties
                }
                className={cn(
                    "absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10",
                    { "[animation-direction:reverse]": reverse },
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

// Demo Component
export const OrbitCircle = () => {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl my-3">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Skills
            </span>


            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <Image src={whatsapp} alt="WhatsApp" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <Image src={css3} alt="css3" />
            </OrbitingCircles>


            <OrbitingCircles className="size-[50px] border-none bg-transparent"
                radius={160}
                duration={20}
                reverse>
                <Image src={nextjs} alt="nextjs" />

            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={160}
                duration={20}
                delay={20}
                reverse>
                <Image src={nextjs} alt="nextjs" />
            </OrbitingCircles>
        </div>
    );
};
