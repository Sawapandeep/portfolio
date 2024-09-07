"use client";

import projectdata from '@/app/data/projectdata.json';
import { useInView } from "framer-motion";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
    Title: string;
    // TimelineDate: string;
    StartDate: string;

    Image: string;
    Type: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    Title,
    // TimelineDate,
    StartDate,
    Image: imgSrc,
    Type,
}) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);
    const router = useRouter();

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    const handleMoreClick = () => {
        const projectId = projectdata.projects.find(proj => proj.Title === Title)?.id;
        if (projectId) {
            router.push(`/CaseStudies?id=${projectId}`);
        }
    };

    // Determine the color for the tooltip based on the project type
    const getTooltipColor = () => {
        switch (Type) {
            case 'API':
                return 'bg-[#03fbab]';
            case 'Frontend':
                return 'bg-[#03fbef]';
            case 'Backend':
                return 'bg-violet-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div ref={ref} id='TimelineItem' className="relative z-[2] grid auto-cols-[1fr] gap-x-0 gap-y-0 grid-cols-[1fr_50px_1fr] grid-rows-[auto] py-10 max-md:w-full max-md:grid-cols-[40px_1fr] max-sm:grid-cols-[30px_1fr]">
            <article id='TimelineLeft' className="text-left rounded-3xl border-2 border-[#1e293b] md:justify-end md:items-stretch max-md:text-left  max-md:col-start-2 max-md:col-end-3 max-md:row-start-2 max-md:row-end-3
            
            ">
                <div className="relative">
                    <figcaption id="TimelineRightHeading" className='text-lg md:text-2xl font-bold text-white px-2 md:px-4 py-4'>
                        {Title}
                    </figcaption>
                </div>
                {/* Tooltip is now always visible */}
                <div className="flex items-center justify-start px-2 md:px-4 mb-2">
                    <span className={`text-sm text-black p-2 rounded-md ${getTooltipColor()}`}>
                        {Type}
                    </span>
                </div>

                <figure id='TimelineImageWrapper' className="overflow-hidden bg-opacity-70 px-2 md:px-4 py-2 md:py-4 rounded-xl">
                    <Image
                        src={imgSrc}
                        alt={Title}
                        width={1000}
                        height={1000}
                        className="rounded-lg aspect-auto"
                        priority
                    />
                </figure>
                <div className="flex justify-end px-2 md:px-4">
                    <button
                        onClick={handleMoreClick}
                        className={`border-2 rounded-lg px-2 md:px-4 border-[#1e293b] text-lg text-white mb-4 hover:border-[#6797e4]`}
                    >
                        More
                    </button>
                </div>

            </article>
            <div id='TimelineCenter' className="flex justify-center max-md:justify-start max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-3 ">
                <div id='TimelineCircle' className="sticky w-[15px] h-[15px] max-h-[15px] max-w-[15px] min-h-[15px] min-w-[15px] bg-white shadow-[0_0_0_8px_#0a0a0a] rounded-full top-[50vh]"></div>
            </div>
            <div id='TimelineRight' className="mb-8 max-md:col-start-2 max-md:col-end-3 max-md:row-start-1 max-md:row-end-2 ">
                <div id='TimelineDateText' className="md:text-6xl font-medium sticky top-[50vh] max-md:mb-6 max-md:text-4xl text-white text-left max-md:text-left justify-items-stretch">
                    {StartDate}
                </div>

            </div>
        </div>
    );
};

const Timeline: React.FC = () => {
    return (
        <div id='SectionTimeline' className="relative z-[-3]">
            <div id='Container' className="mx-auto w-[90vw] max-w-[1360px] ">
                <div id='TimelineComponent' className="relative flex max-w-[1120px] flex-col justify-center items-center mx-auto max-md:flex max-md:auto-cols-[1fr] max-md:gap-x-4 max-md:gap-y-4 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]">
                    <div id='TimelineProgress' className="absolute z-[-2] block w-[3px] h-full bg-[#414141] max-md:left-1.5">
                        <div id='TimelineProgressBar' className="fixed z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(to_bottom,hsla(14.426229508196721,100.00%,64.12%,1.00),#ff4848_51%,#6248ff)] top-0 bottom-[50vh] inset-x-auto"></div>
                    </div>
                    {projectdata.projects.map((project) => (
                        <TimelineItem
                            key={project.id}
                            Title={project.Title}
                            StartDate={project.StartDate}
                            Image={project.Image}
                            Type={project.Type} // Pass the project type to TimelineItem
                        />
                    ))}
                </div>
            </div>
            <div id='OverlayTop' className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-[-1]" />
            <div id='OverlayBottom' className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-[-1]" />
        </div>
    );
};

export default Timeline;


// !1
// "use client";

// import projectdata from '@/app/data/projectdata.json';
// import { useInView } from "framer-motion";
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useEffect, useRef, useState } from "react";

// interface TimelineItemProps {
//     Title: string;
//     TimelineDate: string;
//     Image: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//     Title,
//     TimelineDate,
//     Image: imgSrc,
// }) => {
//     const ref = useRef(null);
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const inView = useInView(ref);
//     const router = useRouter();

//     useEffect(() => {
//         if (inView && !hasAnimated) {
//             setHasAnimated(true);
//         }
//     }, [inView, hasAnimated]);

//     const handleMoreClick = () => {
//         const projectId = projectdata.projects.find(proj => proj.Title === Title)?.id;
//         if (projectId) {
//             router.push(`/CaseStudies?id=${projectId}`);
//         }
//     };

//     return (
//         <div ref={ref} id='TimelineItem' className="relative z-[2] grid auto-cols-[1fr] gap-x-0 gap-y-0 grid-cols-[1fr_180px_1fr] grid-rows-[auto] py-10  max-md:w-full max-md:grid-cols-[64px_1fr] max-sm:grid-cols-[48px_1fr]">
//             <div id='TimelineLeft' className="text-right md:justify-end md:items-stretch max-md:text-left max-md:col-start-2 max-md:col-end-3 max-md:row-start-1 max-md:row-end-2">
//                 {/* col-end-3  to 1*/}
//                 <div id='TimelineDateText' className="  md:text-6xl font-medium sticky top-[50vh] max-md:mb-6 max-md:text-4xl text-white text-right max-md:text-left " >
//                     {/* <h1 id="TimelineDateText" className="text-white">{StartDate}</h1> */}
//                     {TimelineDate}
//                 </div>
//             </div>
//             <div id='TimelineCenter' className="flex justify-center max-md:justify-start max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:yrow-end-3 ">
//                 <div id='TimelineCircle' className="sticky w-[15px] h-[15px] max-h-[15px] max-w-[15px] min-h-[15px] min-w-[15px] bg-white shadow-[0_0_0_8px_#0a0a0a] rounded-full top-[50vh]" ></div>
//             </div>
//             <div id='TimelineRight' className="mb-8 rounded-3xl border-2 border-[#1e293b] max-md:col-start-2 max-md:col-end-3 max-md:row-start-2 max-md:row-end-3 ">
//                 <div>
//                     <h1 id="TimelineRightHeading" className='text-lg md:text-2xl font-bold pl-4 py-4'>{Title}</h1>
//                     show a    toolti here , with different color according to project type , such that if "Type": "API", the color of tool tip will be green, if "Type": "Frontend", the color of tool tip will be red, if "Type": "Backend", the color of tool tip will be blue
//                 </div>

//                 <div id='TimelineImageWrapper' className="overflow-hidden bg-opacity-70 p-5 rounded-xl">
//                     <Image
//                         src={imgSrc}
//                         alt={Title}
//                         width={480}
//                         height={270}
//                         className="rounded-lg"
//                         priority
//                     />
//                 </div>
//                 <button
//                     onClick={handleMoreClick}
//                     className=' border-2 rounded-lg p-1 border-white text-lg ml-4 mb-4'
//                 >
//                     More.
//                 </button>
//             </div>
//         </div>
//     );
// };

// const Timeline: React.FC = () => {
//     return (
//         <div id='SectionTimeline' className="relative z-[-3]">
//             <div id='Container' className="mx-auto w-[90vw] max-w-[1360px] px-4">
//                 <div id='TimelineComponent' className="relative flex max-w-[1120px] flex-col justify-center items-center mx-auto max-md:flex max-md:auto-cols-[1fr] max-md:gap-x-4 max-md:gap-y-4 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]">
//                     {/* max-md:flex max-md:auto-cols-[1fr] max-md:gap-x-4 max-md:gap-y-4 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto] */}
//                     <div id='TimelineProgress' className="absolute z-[-2] block w-[3px] h-full bg-[#414141] max-md:left-1.5" >

//                         {/* <div id='TimelineProgress' className="absolute max-md:left-1.5 left-1/2 -translate-x-1/2 bg-black w-[3px] h-full z-[-2] " /> */}
//                         {/* //!add styles from id of  website:(https://sawapandeeps-dynamite-site.webflow.io/) */}
//                         {/* <div id='TimelineProgressBar' className="fixed left-1/2  max-md:left-1.5 -translate-x-1/2 bg-gradient-to-b from-[rgb(255,116,72)] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1] " ></div> */}
//                         <div id='TimelineProgressBar' className="fixed z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(to_bottom,hsla(14.426229508196721,100.00%,64.12%,1.00),#ff4848_51%,#6248ff)] top-0 bottom-[50vh] inset-x-auto" ></div>
//                     </div>
//                     {projectdata.projects.map((project) => (
//                         <TimelineItem
//                             key={project.id}
//                             Title={project.Title}
//                             TimelineDate={project.TimelineDate}
//                             Image={project.Image}
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div id='OverlayTop' className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-[-1]" />
//             <div id='OverlayBottom' className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-[-1]" />
//         </div>
//     );
// };

// export default Timeline;
