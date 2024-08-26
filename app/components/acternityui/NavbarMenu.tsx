"use client";
import { github, globe, up } from "@/public/Svg/import";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Icons = {
    github: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore
        <Image src={github} alt="GitHub" className="icon w-10 h-10" {...props} />
    ),
    globe: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore
        <Image src={globe} alt="Globe" className="icon w-10 h-10" {...props} />
    ),
    back: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore
        <Image src={up} alt="Return" className="icon w-10 h-10 -rotate-90" {...props} />
    ),
};

// Button component for navigation with tooltip and hover animation
const NavButton = ({ icon, href, ariaLabel }: { icon: JSX.Element; href: string; ariaLabel: string }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center p-2"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <Link
                href={href}
                aria-label={ariaLabel}
                className="flex items-center justify-center transform transition-transform duration-1000 ease-out hover:scale-150"
            >
                {icon}
            </Link>
            {/* Tooltip */}
            {showTooltip && (
                <span className="absolute bottom-[-3rem]  whitespace-nowrap text-lg bg-[#191b2a] shadow-[0_0_12px_-12px_rgba(0,0,0,0.8)] rounded-md px-1 py-1 z-10">
                    {ariaLabel}
                </span>
            )}
        </div>
    );
};

// NavMenu component with scroll detection and fade effect
export function NavMenu({ srclink, livelink, back }: { srclink: string; livelink: string; back: string }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Detect scroll direction
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`flex justify-center space-x-4 p-3 bg-white dark:bg-black fixed top-0 inset-x-0 z-50 mt-2 max-md:mx-2 mx-auto max-w-[250px] rounded-full border-4 border-[#191b2a] 
            transition-opacity duration-500 ease-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <NavButton icon={<Icons.github />} href={srclink} ariaLabel="Source Code" />
            <NavButton icon={<Icons.globe />} href={livelink} ariaLabel="Live Demo" />
            <NavButton icon={<Icons.back />} href={back} ariaLabel="Go Back" />
        </div>
    );
};

//!1
// "use client";
// import { github, globe, up } from "@/public/Svg/import";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// const Icons = {
//     github: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//         //@ts-ignore
//         <Image src={github} alt="GitHub" className="icon w-10 h-10" {...props} />
//     ),
//     globe: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//         //@ts-ignore
//         <Image src={globe} alt="Globe" className="icon w-10 h-10" {...props} />
//     ),
//     back: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//         //@ts-ignore
//         <Image src={up} alt="Return" className="icon w-10 h-10" {...props} />
//     ),
// };

// // Button component for navigation with tooltip and hover animation
// const NavButton = ({ icon, href, ariaLabel }: { icon: JSX.Element; href: string; ariaLabel: string }) => {
//     const [showTooltip, setShowTooltip] = useState(false);

//     return (
//         <div
//             className="relative flex items-center justify-center p-2"
//             onMouseEnter={() => setShowTooltip(true)}
//             onMouseLeave={() => setShowTooltip(false)}
//         >
//             <Link
//                 href={href}
//                 aria-label={ariaLabel}
//                 className="flex items-center justify-center transform transition-transform duration-1000 ease-out hover:scale-150"
//             >
//                 {icon}
//             </Link>
//             {/* Tooltip */}
//             {showTooltip && (
//                 <span className="absolute bottom-[-2.5rem] text-white whitespace-nowrap text-lg bg-neutral-800 rounded-md px-1 py-1 z-10 ">
//                     {ariaLabel}
//                 </span>
//             )}
//         </div>
//     );
// };

// // NavMenu component with props
// export function NavMenu({ srclink, livelink, back }: { srclink: string; livelink: string; back: string }) {
//     return (
//         <div className="flex justify-center space-x-4 p-3 bg-white dark:bg-black fixed top-0 inset-x-0 z-50 mt-2 max-md:mx-2 mx-auto max-w-2xl rounded-full border-2 border-[#191b2a]">
//             <NavButton icon={<Icons.github />} href={srclink} ariaLabel="Source Code" />
//             <NavButton icon={<Icons.globe />} href={livelink} ariaLabel="Live Demo" />
//             <NavButton icon={<Icons.back />} href={back} ariaLabel="Go Back" />
//         </div>
//     );
// };
