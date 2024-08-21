"use client";

import { Dock, DockIcon } from "@/app/components/magicui/Dock";
import { buttonVariants } from "@/app/components/shadcn-ui/Button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/app/components/shadcn-ui/ToolTip";
import { cn } from "@/app/lib/utils";
import { github, globe } from "@/public/Svg/import";
import backGif from "@/public/animations/back2.gif"; // Import the GIF correctly

import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define Icons object
const Icons = {
    github: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore
        <Image src={github} alt="GitHub" className="w-6 h-6" {...props} />
    ),
    globe: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore
        <Image src={globe} alt="Globe" className="w-6 h-6" {...props} />
    ),
    back: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore
        <Image src={backGif} alt="Return" className="w-8 h-8" {...props} /> // Correctly reference the GIF here
    ),
};

export function DockBar({ srclink, livelink, back }: { srclink: string; livelink: string; back: string }) {
    return (
        <TooltipProvider>
            <Dock direction="middle">
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={srclink}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-12 rounded-full",
                                )}
                            >
                                <Icons.github className="w-6 h-6" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Source</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>

                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={livelink}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-12 rounded-full",
                                )}
                            >
                                <Icons.globe className="w-6 h-6" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Live</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>

                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href={back}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "icon" }),
                                    "size-12 rounded-full",
                                )}
                            >
                                <Icons.back className="w-12 h-12" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Return</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </TooltipProvider>
    );
}

//!V2 before gif worked roerly
// "use client";

// import { Dock, DockIcon } from "@/app/components/magicui/Dock";
// import { buttonVariants } from "@/app/components/shadcn-ui/Button";
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/app/components/shadcn-ui/ToolTip";
// import { cn } from "@/app/lib/utils";
// import { github, globe } from "@/public/Svg/import";
// import back from "@/public/animations/back.gif";

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// // Define Icons object
// const Icons = {
//     github: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//         //@ts-ignore
//         <Image src={github} alt="github" className="w-6 h-6" {...props} />
//     ),
//     globe: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//         //@ts-ignore
//         <Image src={globe} alt="Globe" className="w-6 h-6" {...props} />
//     ),
//     back: (props: React.ImgHTMLAttributes<HTMLVideoElement>) => {
//        //@ts-ignore
//         <Image src={back} alt="Return" className="w-6 h-6" {...props} />
//     }
// };

// export function DockBar({ srclink, livelink, back }: { srclink: string; livelink: string, back: string }) {
//     return (
//         <TooltipProvider>
//             <Dock direction="middle">
//                 <DockIcon>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Link
//                                 href={srclink}
//                                 className={cn(
//                                     buttonVariants({ variant: "ghost", size: "icon" }),
//                                     "size-12 rounded-full",
//                                 )}
//                             >
//                                 <Icons.github className="w-6 h-6" />
//                             </Link>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                             <p>Source</p>
//                         </TooltipContent>
//                     </Tooltip>
//                 </DockIcon>

//                 <DockIcon>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Link
//                                 href={livelink}
//                                 className={cn(
//                                     buttonVariants({ variant: "ghost", size: "icon" }),
//                                     "size-12 rounded-full",
//                                 )}
//                             >
//                                 <Icons.globe className="w-6 h-6" />
//                             </Link>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                             <p>Live</p>
//                         </TooltipContent>
//                     </Tooltip>
//                 </DockIcon>

//                 <DockIcon>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Link
//                                 href={back}
//                                 className={cn(
//                                     buttonVariants({ variant: "ghost", size: "icon" }),
//                                     "size-12 rounded-full",
//                                 )}
//                             >
//                                 <Icons.back className="w-6 h-6" />
//                             </Link>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                             <p>Return</p>
//                         </TooltipContent>
//                     </Tooltip>
//                 </DockIcon>
//             </Dock>
//         </TooltipProvider>
//     );
// }

//!v1 before dunamic dataDock
// import { Dock, DockIcon } from "@/app/components/magicui/Dock";
// import { buttonVariants } from "@/app/components/shadcn-ui/Button";
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/app/components/shadcn-ui/ToolTip";
// import { cn } from "@/app/lib/utils";
// import { CalendarIcon, MailIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// // Import SVGs from local files
// import { github, globe } from "@/public/Svg/import";

// // Define types for icon props
// export type IconProps = React.SVGProps<SVGSVGElement> | React.ImgHTMLAttributes<HTMLImageElement>;

// // Define Icons object
// const Icons = {
//     calendar: (props: React.SVGProps<SVGSVGElement>) => <CalendarIcon {...props} />,
//     email: (props: React.SVGProps<SVGSVGElement>) => <MailIcon {...props} />,
//     github: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//         //@ts-ignore
//         <Image src={github} alt="github" className="w-6 h-6" {...props} />
//     ),
//     globe: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
// // @ts-ignore
//         <Image src={globe} alt="globe" className="w-6 h-6"  {...props} />
//     ),
// };

// // Data structure for navbar and social icons
// const DATA = {

//     contact: {
//         social: {
//             Source: {
//                 name: "Source",
//                 url: "#",
//                 icon: Icons.github,
//             },
//             Live: {
//                 name: "Website",
//                 url: "#",
//                 icon: Icons.globe,
//             },
//             email: {
//                 name: "Send Email",
//                 url: "/",
//                 icon: Icons.email,
//             },
//         },
//     },
// };

// // DockDemo component
// export function DockBar() {
//     return (

//         <TooltipProvider>
//             <Dock direction="middle">

//                 {Object.entries(DATA.contact.social).map(([name, social]) => (
//                     <DockIcon key={name}>
//                         <Tooltip>
//                             <TooltipTrigger asChild>
//                                 <Link
//                                     href={social.url}
//                                     className={cn(
//                                         buttonVariants({ variant: "ghost", size: "icon" }),
//                                         "size-12 rounded-full",
//                                     )}
//                                 >
//                                     <social.icon className="w-6 h-6" />
//                                 </Link>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>{name}</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </DockIcon>
//                 ))}

//             </Dock>
//         </TooltipProvider>
//     );
// }
//?
{/* {DATA.navbar.map((item) => (
                    <DockIcon key={item.label}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full",
                                    )}
                                >
                                    <item.icon className="w-6 h-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))} */}