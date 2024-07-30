"use client";

import { cn } from "@/app/lib/utils";
import DotPattern from "@/app/components/magicui/RetroGrid";

const DotSection = () => {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                Dot Pattern
            </p>
            <DotPattern className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")} />
        </div>
    );
}

export default DotSection;  