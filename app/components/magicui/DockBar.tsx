import { Dock, DockIcon } from "@/app/components/magicui/Dock";
import { buttonVariants } from "@/app/components/shadcn-ui/Button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/app/components/shadcn-ui/ToolTip";
import { cn } from "@/app/lib/utils";
import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Import SVGs from local files
import { githubWhite, globe } from "@/public/Svg/import";

// Define types for icon props
export type IconProps = React.SVGProps<SVGSVGElement> | React.ImgHTMLAttributes<HTMLImageElement>;

// Define Icons object
const Icons = {
    calendar: (props: React.SVGProps<SVGSVGElement>) => <CalendarIcon {...props} />,
    email: (props: React.SVGProps<SVGSVGElement>) => <MailIcon {...props} />,
    githubWhite: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore
        <Image src={githubWhite} alt="githubWhite" className="w-6 h-6" {...props} />
    ),
    globe: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore
        <Image src={globe} alt="Globe" className="w-6 h-6"  {...props} />
    ),
};

// Data structure for navbar and social icons
const DATA = {
    navbar: [
    ],
    contact: {
        social: {
            githubWhite: {
                name: "githubWhite",
                url: "#",
                icon: Icons.githubWhite,
            },
            Globe: {
                name: "Globe",
                url: "#",
                icon: Icons.globe,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,
            },
        },
    },
};

// DockDemo component
export function DockBar() {
    return (
        // <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">

        <TooltipProvider>
            <Dock direction="middle">
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
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={social.url}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full",
                                    )}
                                >
                                    <social.icon className="w-6 h-6" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                {/* <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon> */}
            </Dock>
        </TooltipProvider>
        // </div>
    );
}
