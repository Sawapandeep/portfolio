import { cn } from "@/app/lib/utils";
import { IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid xl:auto-rows-[18rem] grid-cols-1 xl:grid-cols-3 gap-4 max-w-7xl mx-auto  p-2 ",
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
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento relative p-4 transition-shadow duration-200 hover:shadow-lg min-xl:w-[70vw]  min-xl:mx-auto",
                className
            )}
        >
            {/* <div className="absolute inset-0 -z-10 rounded-xl border border-neutral-700 pointer-events-none  "></div> */}

            <div className=" mb-4">
                {header}
            </div>
            <div className="group-hover/bento:translate-z-10 group-hover/bento:scale-110 transition-transform transform  duration-200 flex-grow  rounded-xl  p-3 border-2 border-neutral-800">

                {/* <div className="group-hover/bento:translate-x-2 transition duration-200 flex-grow  rounded-xl  p-3 border-2 border-neutral-800"> */}
                {icon}
                <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-normal  text-sm trasns text-neutral-600  dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};

const ProjectBentoGrid = ({ bentoItems }: { bentoItems: any[] }) => {
    return (
        <BentoGrid className="max-w-[77.5vw] mx-auto ">
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
                                style={{ maxHeight: "200px", objectFit: "cover" }}
                            />
                        ) : (
                            <Image
                                src={item.Image}
                                alt={item.Title}
                                width={500}
                                height={150}
                                className="w-full rounded-xl"
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
                    className={"object-fill"}
                />
            ))}
        </BentoGrid>
    );
};

export default ProjectBentoGrid;

