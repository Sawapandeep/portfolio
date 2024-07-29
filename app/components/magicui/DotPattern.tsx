import { useId } from "react";
import { cn } from "@/app/lib/utils";

interface DotPatternProps {
    width?: any;
    height?: any;
    x?: any;
    y?: any;
    cx?: any;
    cy?: any;
    cr?: any;
    fill?: string; // Add fill color prop
    className?: string;

    [key: string]: any;
}

export default function DotPattern({
    width = 15,
    height = 15,
    x = 0,
    y = 0,
    cx = 1,
    cy = 1,
    cr = 1,
    fill = "white", // Default fill color is white

    className,
    ...props
}: DotPatternProps) {
    const id = useId();

    return (
        <svg
            aria-hidden="true"
            className={cn("pointer-events-none relative inset-0 h-full w-full fill-neutral-400/80", className)}
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <circle cx={cx} cy={cy} r={cr} fill={fill} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
        </svg>
    );
}

// Utility function to convert SVG to data URL
export const getDotPatternDataUrl = (dotPatternProps: DotPatternProps) => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <pattern id="pattern" width="${dotPatternProps.width}" height="${dotPatternProps.height}" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                    <circle cx="${dotPatternProps.cx}" cy="${dotPatternProps.cy}" r="${dotPatternProps.cr}" fill="${dotPatternProps.fill}" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#pattern)" />
        </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

//!v1
// import { useId } from "react";

// import { cn } from "@/app/lib/utils";

// interface DotPatternProps {
//     width?: any;
//     height?: any;
//     x?: any;
//     y?: any;
//     cx?: any;
//     cy?: any;
//     cr?: any;
//     className?: string;
//     [key: string]: any;
// }
// export default function DotPattern({
//     width = 15,
//     height = 15,
//     x = 0,
//     y = 0,
//     cx = 1,
//     cy = 1,
//     cr = 1,
//     className,
//     ...props
// }: DotPatternProps) {
//     const id = useId();

//     return (
//         <svg aria-hidden="true"
//             className={cn("pointer-events-none relative inset-0 h-full w-full fill-neutral-400/80", className,)}
//             {...props}
//         >
//             <defs>
//                 <pattern
//                     id={id}
//                     width={width}
//                     height={height}
//                     patternUnits="userSpaceOnUse"
//                     patternContentUnits="userSpaceOnUse"
//                     x={x}
//                     y={y}
//                 >
//                     <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
//                 </pattern>
//             </defs>
//             <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
//         </svg>
//     );
// }
