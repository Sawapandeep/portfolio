import { cn } from "@/app/lib/utils";
import { IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const BentoGrid = ({
    className,
    children,
    itemCount,
}: {
    className?: string;
    children?: React.ReactNode;
    itemCount: number;
}) => {
    return (
        <div
            className={cn(
                itemCount <= 2
                    ? "grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 max-w-7xl mx-auto p-2"
                    : "grid xl:auto-rows-[18rem] grid-cols-1 xl:grid-cols-3 gap-4 max-w-7xl mx-auto p-2",
                className
            )}
        >
            {children}
        </div>
    );
};

const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    titleColor, // New prop for title color
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    titleColor?: string; // New prop type
}) => {
    return (
        <div
            className={cn(
                "group/bento relative md:p-4 transition-shadow duration-200 hover:shadow-lg min-xl:mx-auto",
                className
            )}
        >
            <div className="mb-4">{header}</div>
            <div className="group-hover/bento:translate-z-10 group-hover/bento:scale-110 transition-transform transform duration-200 flex-grow rounded-xl p-3 border-2 border-neutral-800">
                {icon}
                <div className={`font-bold ${titleColor} mb-2 mt-2`}>{title}</div> {/* Apply titleColor */}
                <div className="font-normal text-sm text-neutral-600 dark:text-neutral-300">{description}</div>
            </div>
        </div>
    );
};

const ProjectBentoGrid = ({ bentoItems, projectType }: { bentoItems: any[], projectType: string }) => {
    // Function to determine the text color based on the project type
    const getTextColor = (type: string) => {
        switch (type) {
            case 'API':
                return 'text-[#03fbab]';
            case 'Frontend':
                return 'text-[#03fbef]';
            case 'Backend':
                return 'text-violet-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <BentoGrid
            className="max-w-[77.5vw] max-md:max-w-[90vw] h-[40vh] aspect-auto mx-auto"
            itemCount={bentoItems.length} // Pass the number of items
        >
            {bentoItems.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.Title}
                    description={item.Description}
                    header={
                        item.Video ? (
                            <video
                                src={item.Video}
                                className="w-full rounded-xl"
                                autoPlay
                                loop
                                muted
                                style={{ objectFit: "cover" }}
                            />
                        ) : (
                            <Image
                                src={item.Image}
                                alt={item.Title}
                                width={500}
                                height={150}
                                className="w-[65%] mx-auto rounded-xl"
                                style={{ objectFit: "cover" }}
                            />
                        )
                    }
                    icon={
                        i === 0 ? (
                            <IconSignature className="h-4 w-4 text-neutral-500" />
                        ) : i === 1 ? (
                            <IconTableColumn className="h-4 w-4 text-neutral-500" />
                        ) : (
                            <IconFileBroken className="h-4 w-4 text-neutral-500" />
                        )
                    }
                    titleColor={getTextColor(projectType)} // Pass the text color
                    className={"object-fill"}
                />
            ))}
        </BentoGrid>
    );
};

export default ProjectBentoGrid;

//!1
// import { cn } from "@/app/lib/utils";
// import { IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
// import Image from "next/image";
// import React from "react";

// const BentoGrid = ({
//     className,
//     children,
//     itemCount, // Add itemCount as a prop to conditionally apply styles
// }: {
//     className?: string;
//     children?: React.ReactNode;
//     itemCount: number;
// }) => {
//     return (
//         <div
//             className={cn(
//                 // Conditionally adjust grid based on itemCount
//                 itemCount <= 2
//                     ? "grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 max-w-7xl mx-auto p-2"
//                     : "grid xl:auto-rows-[18rem] grid-cols-1 xl:grid-cols-3 gap-4 max-w-7xl mx-auto p-2",
//                 className
//             )}
//         >
//             {children}
//         </div>
//     );
// };

// const BentoGridItem = ({
//     className,
//     title,
//     description,
//     header,
//     icon,
// }: {
//     className?: string;
//     title?: string | React.ReactNode;
//     description?: string | React.ReactNode;
//     header?: React.ReactNode;
//     icon?: React.ReactNode;
// }) => {
//     return (
//         <div
//             className={cn(
//                 "group/bento relative md:p-4 transition-shadow duration-200 hover:shadow-lg   min-xl:mx-auto ",
//                 className
//             )}
//         >
//             <div className=" mb-4">{header}</div>
//             <div className="group-hover/bento:translate-z-10 group-hover/bento:scale-110 transition-transform transform duration-200 flex-grow rounded-xl p-3 border-2 border-neutral-800">
//                 {icon}
//                 <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>
//                 <div className="font-normal text-sm text-neutral-600 dark:text-neutral-300">{description}</div>
//             </div>
//         </div>
//     );
// };

// const ProjectBentoGrid = ({ bentoItems }: { bentoItems: any[] }) => {
//     return (
//         <BentoGrid
//             className="max-w-[77.5vw]  max-md:max-w-[90vw] h-[40vh]  aspect-auto mx-auto"
//             itemCount={bentoItems.length} // Pass the number of items
//         >
//             {bentoItems.map((item, i) => (
//                 <BentoGridItem
//                     key={i}
//                     title={item.Title}
//                     description={item.Description}
//                     header={
//                         item.Video ? (
//                             <video
//                                 src={item.Video}
//                                 className="w-full  rounded-xl"
//                                 autoPlay
//                                 loop
//                                 muted
//                                 style={{ objectFit: "cover" }}
//                             />
//                         ) : (
//                             <Image
//                                 src={item.Image}
//                                 alt={item.Title}
//                                 width={500}
//                                 height={150}
//                                 className="w-full rounded-xl"
//                                 style={{ objectFit: "cover" }}
//                             />
//                         )
//                     }
//                     icon={
//                         i === 0 ? (
//                             <IconSignature className="h-4 w-4 text-neutral-500" />
//                         ) : i === 1 ? (
//                             <IconTableColumn className="h-4 w-4 text-neutral-500" />
//                         ) : (
//                             <IconFileBroken className="h-4 w-4 text-neutral-500" />
//                         )
//                     }
//                     className={"object-fill"}
//                 />
//             ))}
//         </BentoGrid>
//     );
// };

// export default ProjectBentoGrid;
