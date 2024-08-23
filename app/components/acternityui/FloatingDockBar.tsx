import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { FloatingDock } from "./FloatingDock";
import { github, globe, up } from "@/public/Svg/import";

// Define your Icons object with the images
const Icons = {
    github: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore

        <Image src={github} alt="GitHub" className="w-10 h-10" {...props} />
    ),
    globe: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore

        <Image src={globe} alt="Globe" className="w-10 h-10" {...props} />
    ),
    back: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        //@ts-ignore

        <Image src={up} alt="Return" className="w-10 h-10" {...props} />
    ),
};

export function FloatingDockBar({
    srclink,
    livelink,
    back,
}: {
    srclink: string;
    livelink: string;
    back: string;
}) {
    return (
        <div className="flex items-center justify-center h-auto w-full">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={[
                    {
                        title: "Source Code",
                        icon: srclink ? (
                            <Link
                                href={srclink}
                                className={cn("size-12 rounded-full flex items-center justify-center")}
                            >
                                <Icons.github />
                            </Link>
                        ) : null,
                        href: srclink,
                    },
                    {
                        title: "Live Demo",
                        icon: livelink ? (
                            <Link
                                href={livelink}
                                className={cn("size-12 rounded-full flex items-center justify-center")}
                            >
                                <Icons.globe />
                            </Link>
                        ) : null,
                        href: livelink,
                    },
                    {
                        title: "Go Back",
                        icon: back ? (
                            <Link
                                href={back}
                                className={cn("size-12 rounded-full flex items-center justify-center")}
                            >
                                <Icons.back />
                            </Link>
                        ) : null,
                        href: back,
                    },
                ]}
            />
        </div>
    );
}

//!
// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "@/app/lib/utils";
// import { FloatingDock } from "./FloatingDock";
// import { github, globe, up } from "@/public/Svg/import";

// // Define your Icons object with the images
// const Icons = {
//     github: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//  // @ts-ignore

//         <Image src={github} alt="GitHub" className="w-10 h-10" {...props} />
//     ),
//     globe: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//         //@ts-ignore

//         <Image src={globe} alt="Globe" className="w-10 h-10" {...props} />
//     ),
//     back: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
//         //@ts-ignore

//         <Image src={up} alt="Return" className="w-10 h-10" {...props} />
//     ),
// };

// export function FloatingDockBar({
//     srclink,
//     livelink,
//     back,
// }: {
//     srclink: string;
//     livelink: string;
//     back: string;
// }) {
//     return (
//         <div className="flex items-center justify-center h-auto w-full">
//             <FloatingDock
//                 mobileClassName="translate-y-20" // only for demo, remove for production
//                 items={[
//                     {
//                         title: "Source Code",
//                         icon: srclink ? (
//                             <Link
//                                 href={srclink}
//                                 className={cn("size-12 rounded-full")}
//                             >
//                                 <Icons.github className="w-10 h-10" />
//                             </Link>
//                         ) : null,
//                         href: srclink,
//                     },
//                     {
//                         title: "Live Demo",
//                         icon: livelink ? (
//                             <Link
//                                 href={livelink}
//                                 className={cn("size-12 rounded-full")}
//                             >
//                                 <Icons.globe className="w-10 h-10" />
//                             </Link>
//                         ) : null,
//                         href: livelink,
//                     },
//                     {
//                         title: "Go Back",
//                         icon: back ? (
//                             <Link
//                                 href={back}
//                                 className={cn("size-12 rounded-full")}
//                             >
//                                 <Icons.back className="w-10 h-10" />
//                             </Link>
//                         ) : null,
//                         href: back,
//                     },
//                 ]}
//             />
//         </div>
//     );
// }
