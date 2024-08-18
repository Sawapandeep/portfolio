"use client";

import { TextGenerate } from '@/app/components/acternityui/TextGenerate';
import timelineData from '@/app/data/timelinedata.json';
import { useInView } from "framer-motion";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
    Title: string;
    StartDate: string;
    Description: string;
    Image: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    Title,
    StartDate,
    Description,
    Image: imgSrc,
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
        const projectId = timelineData.projects.find(proj => proj.Title === Title)?.id;
        if (projectId) {
            router.push(`/CaseStudies?id=${projectId}`);
        }
    };

    return (
        <div ref={ref} id='TimelineItem' className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative">
            <div id='TimelineLeft' className="text-right md:justify-end md:items-stretch">
                <div id='TimelineDateText' className=" text-4xl md:text-6xl font-medium sticky top-[50vh]">
                    {StartDate}
                </div>
            </div>
            <div id='TimelineCenter' className="flex justify-center">
                <div id='TimelineCircle' className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_4px_#0a0a0a]" />
            </div>
            <div id='TimelineRight' className="mb-8 rounded-3xl border-2 border-[#1e293b]">
                <div>
                    <h1 id="TimelineRightHeading" className='text-lg md:text-2xl font-bold pl-4 py-4'>{Title}</h1>
                    {hasAnimated ? (
                        <TextGenerate
                            words={Description}
                            className="text-xs md:text-sm font-medium leading-snug pl-4"
                            filter={true}
                            duration={1}
                        />
                    ) : (
                        <div className="text-xs md:text-sm font-medium leading-snug pl-4">
                            {Description}
                        </div>
                    )}
                </div>

                <div id='TimelineImageWrapper' className=" bg-opacity-70 p-5 rounded-lg">
                    <Image
                        src={imgSrc}
                        alt={Title}
                        width={480}
                        height={270}
                        className="rounded-lg"
                        priority
                    />
                </div>
                <button
                    onClick={handleMoreClick}
                    className='border-2 rounded-lg border-white text-lg ml-4 mb-4'
                >
                    More.
                </button>
            </div>
        </div>
    );
};

const Timeline: React.FC = () => {
    return (
        <div id='SectionTimeline' className="relative z-[-3]">
            <div id='Container' className="mx-auto max-w-[1360px] px-4">
                <div id='TimelineComponent' className="flex flex-col items-center justify-center relative">
                    <div id='TimelineProgress' className="absolute left-1/2 -translate-x-1/2 bg-black w-[3px] h-full z-[-2]" />
                    <div id='TimelineProgressBar' className="fixed left-1/2 -translate-x-1/2 bg-gradient-to-b from-[rgb(255,116,72)] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1]" />
                    {timelineData.projects.map((project) => (
                        <TimelineItem
                            key={project.id}
                            Title={project.Title}
                            StartDate={project.StartDate}
                            Description={project.Description}
                            Image={project.Image}
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


//!V8 befor sending just id
// "use client";

// import { TextGenerate } from '@/app/components/acternityui/TextGenerate';
// import timelineData from '@/app/data/timelinedata.json';
// import { useInView } from "framer-motion";
// import Image from 'next/image';
// import { useEffect, useRef, useState } from "react";
// import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router

// interface TimelineItemProps {
//     Title: string;
//     StartDate: string;
//     Description: string;
//     Image: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//     Title,
//     StartDate,
//     Description,
//     Image: imgSrc,
// }) => {
//     const ref = useRef(null);
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const inView = useInView(ref);
//     const router = useRouter(); // This useRouter is from next/navigation

//     useEffect(() => {
//         if (inView && !hasAnimated) {
//             setHasAnimated(true);
//         }
//     }, [inView, hasAnimated]);

//     const handleMoreClick = () => {
//         const projectId = timelineData.projects.find(proj => proj.Title === Title)?.id;
//         if (projectId) {
//             router.push(`/CaseStudies?id=${projectId}`);
//         }
//     };

//     return (
//         <div ref={ref} id='TimelineItem' className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative">
//             <div id='TimelineLeft' className="text-right md:justify-end md:items-stretch">
//                 <div id='TimelineDateText' className=" text-4xl md:text-6xl font-medium sticky top-[50vh]">
//                     {StartDate}
//                 </div>
//             </div>
//             <div id='TimelineCenter' className="flex justify-center">
//                 <div id='TimelineCircle' className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_4px_#0a0a0a]" />
//             </div>
//             <div id='TimelineRight' className="mb-8 rounded-3xl border-2 border-[#1e293b]">
//                 <div>
//                     <h1 id="TimelineRightHeading" className='text-lg md:text-2xl font-bold pl-4 py-4'>{Title}</h1>
//                     {hasAnimated ? (
//                         <TextGenerate
//                             words={Description}
//                             className="text-xs md:text-sm font-medium leading-snug pl-4"
//                             filter={true}
//                             duration={1}
//                         />
//                     ) : (
//                         <div className="text-xs md:text-sm font-medium leading-snug pl-4">
//                             {Description}
//                         </div>
//                     )}
//                 </div>

//                 <div id='TimelineImageWrapper' className=" bg-opacity-70 p-5 rounded-lg">
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
//                     className='border-2 rounded-lg border-white text-lg ml-4 mb-4'
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
//             <div id='Container' className="mx-auto max-w-[1360px] px-4">
//                 <div id='TimelineComponent' className="flex flex-col items-center justify-center relative">
//                     <div id='TimelineProgress' className="absolute left-1/2 -translate-x-1/2 bg-black w-[3px] h-full z-[-2]" />
//                     <div id='TimelineProgressBar' className="fixed left-1/2 -translate-x-1/2 bg-gradient-to-b from-[rgb(255,116,72)] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1]" />
//                     {timelineData.projects.map((project) => (
//                         <TimelineItem
//                             key={project.id}
//                             Title={project.Title}
//                             StartDate={project.StartDate}
//                             Description={project.Description}
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

// !v8 before routing
// "use client";

// import { TextGenerate } from '@/app/components/acternityui/TextGenerate';
// import timelineData from '@/app/data/timelinedata.json';
// import { useInView } from "framer-motion";
// import Image from 'next/image';
// import { useEffect, useRef, useState } from "react";

// interface TimelineItemProps {
//     Title: string;
//     StartDate: string;
//     Description: string;
//     Image: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//     Title,
//     StartDate,
//     Description,
//     Image: imgSrc,
// }) => {
//     const ref = useRef(null);
//     const [hasAnimated, setHasAnimated] = useState(false);

//     // Track if the element is in view
//     const inView = useInView(ref);

//     useEffect(() => {
//         if (inView && !hasAnimated) {
//             setHasAnimated(true);
//         }
//     }, [inView, hasAnimated]);

//     return (
//         <div ref={ref} id='TimelineItem' className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative">
//             <div id='TimelineLeft' className="text-right md:justify-end md:items-stretch">
//                 <div id='TimelineDateText' className=" text-4xl md:text-6xl font-medium sticky top-[50vh]">
//                     {StartDate}
//                 </div>
//             </div>
//             <div id='TimelineCenter' className="flex justify-center">
//                 <div id='TimelineCircle' className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_4px_#0a0a0a]" />
//             </div>
//             <div id='TimelineRight' className="mb-8 rounded-3xl border-2 border-[#1e293b]">
//                 <div>
//                     <h1 id="TimelineRightHeading" className='text-lg md:text-2xl font-bold pl-4 py-4'>{Title}</h1>
//                     {hasAnimated && (
//                         <TextGenerate
//                             words={Description}
//                             className="text-xs md:text-sm font-medium leading-snug pl-4"
//                             filter={true}
//                             duration={1}
//                         />
//                     )}
//                     {!hasAnimated && (
//                         <div className="text-xs md:text-sm font-medium leading-snug pl-4">
//                             {Description}
//                         </div>
//                     )}
//                 </div>

//                 <div id='TimelineImageWrapper' className=" bg-opacity-70 p-5 rounded-lg">
//                     <Image
//                         src={imgSrc}
//                         alt={Title}
//                         width={480}
//                         height={270}
//                         className="rounded-lg"
//                         priority
//                     />
//                 </div>
//                 <button className=' border-2 rounded-lg border-white text-lg ml-4 mb-4'>More.</button>
//             </div>
//         </div>
//     );
// };

// const Timeline: React.FC = () => {
//     return (
//         <div id='SectionTimeline' className="relative z-[-3]">
//             <div id='Container' className="mx-auto max-w-[1360px] px-4">
//                 <div id='TimelineComponent' className="flex flex-col items-center justify-center relative">
//                     <div id='TimelineProgress' className="absolute left-1/2 -translate-x-1/2 bg-black w-[3px] h-full z-[-2]" />
//                     <div id='TimelineProgressBar' className="fixed left-1/2 -translate-x-1/2 bg-gradient-to-b from-[rgb(255,116,72)] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1]" />
//                     {/* Loop through the timeline data and render TimelineItems */}
//                     {timelineData.projects.map((project, index) => (
//                         <TimelineItem
//                             key={project.id}
//                             Title={project.Title}
//                             StartDate={project.StartDate}
//                             Description={project.Description}
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

//!v7 text generate effect
// "use client";

// import Image from 'next/image';
// import timelineData from '@/app/data/timelinedata.json'; // Importing the timeline data
// import { TextGenerate } from '@/app/components/acternityui/TextGenerate'; // Import the TextGenerate component

// interface TimelineItemProps {
//     Title: string;
//     StartDate: string;
//     Description: string;
//     Image: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//     Title,
//     StartDate,
//     Description,
//     Image: imgSrc,
// }) => (
//     <div id='TimelineItem' className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative">
//         <div id='TimelineLeft' className="text-right md:justify-end md:items-stretch">
//             <div id='TimelineDateText' className=" text-4xl md:text-6xl font-medium sticky top-[50vh]">
//                 {StartDate}
//             </div>
//         </div>
//         <div id='TimelineCenter' className="flex justify-center">
//             <div id='TimelineCircle' className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_4px_#0a0a0a]" />
//         </div>
//         <div>
//             <div id='TimelineRight' className="mb-8">
//                 <div>
//                     <h1 id="TimelineRightHeading" className='text-lg md:text-2xl font-bold'>{Title}</h1>
//                     <TextGenerate
//                         words={Description}
//                         className="text-xs md:text-sm font-medium leading-snug"
//                     />
//                 </div>
//             </div>
//             <div id='TimelineImageWrapper' className="bg-black bg-opacity-70 p-5 rounded-lg">
//                 <Image
//                     src={imgSrc}
//                     alt={Title}
//                     width={480}
//                     height={270}
//                     className="rounded-lg"
//                     priority
//                 />
//             </div>
//         </div>
//     </div>
// );

// const Timeline: React.FC = () => {
//     return (
//         <div id='SectionTimeline' className="relative z-[-3]">
//             <div id='Container' className="mx-auto max-w-[1360px] px-4">
//                 <div id='TimelineComponent' className="flex flex-col items-center justify-center relative">
//                     <div id='TimelineProgress' className="absolute left-1/2 -translate-x-1/2 bg-gray-700 w-[3px] h-full z-[-2]" />
//                     <div id='TimelineProgressBar' className="fixed left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#ff7448] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1]" />
//                     {/* Loop through the timeline data and render TimelineItems */}
//                     {timelineData.projects.map((project, index) => (
//                         <TimelineItem
//                             key={index}
//                             Title={project.Title}
//                             StartDate={project.StartDate}
//                             Description={project.Description}
//                             Image={project.Image}
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div id='OverlayTop' className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-[-1]" />
//             <div id='OverlayBottom' className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[-1]" />
//         </div>
//     );
// };

// export default Timeline;

//!v6 importing data from timeline.json
// import Image from 'next/image';
// import timelineData from '@/app/data/timelinedata.json'; // Importing the timeline data

// interface TimelineItemProps {
//     Title: string;
//     StartDate: string;
//     Description: string;
//     Image: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//     Title,
//     StartDate,
//     Description,
//     Image: imgSrc,  // Rename Image to imgSrc to avoid conflicts
// }) => (
//     <div id='TimelineItem' className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative">
//         <div id='TimelineLeft' className="text-right md:justify-end md:items-stretch">
//             <div id='TimelineDateText' className="  text-4xl md:text-6xl font-medium sticky top-[50vh]">
//                 {StartDate}
//             </div>
//         </div>
//         <div id='TimelineCenter' className="flex justify-center">
//             <div id='TimelineCircle' className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_4px_#0a0a0a]" />
//         </div>
//         <div>
//             <div id='TimelineRight' className="mb-8">
//                 <div>
//                     <h1 id="TimelineRightHeading" className='text-lg md:text-2xl font-bold'>{Title}</h1>
//                     <p id='TimelineIRightText' className=" text-xs md:text-sm font-medium leading-snug">
//                         {Description}
//                     </p>
//                 </div>
//             </div>
//             <div id='TimelineImageWrapper' className="bg-black bg-opacity-70 p-5 rounded-lg">
//                 <Image
//                     src={imgSrc}
//                     alt={Title}
//                     width={480}
//                     height={270}
//                     className="rounded-lg"
//                     priority
//                 />
//             </div>
//         </div>
//     </div>
// );

// const Timeline: React.FC = () => {
//     return (
//         <div id='SectionTimeline' className="relative z-[-3]">
//             <div id='Container' className="mx-auto max-w-[1360px] px-4">
//                 <div id='TimelineComponent' className="flex flex-col items-center justify-center relative">
//                     <div id='TimelineProgress' className="absolute left-1/2 -translate-x-1/2 bg-gray-700 w-[3px] h-full z-[-2]" />
//                     <div id='TimelineProgressBar' className="fixed left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#ff7448] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1]" />
//                     {/* Loop through the timeline data and render TimelineItems */}
//                     {timelineData.projects.map((project, index) => (
//                         <TimelineItem
//                             key={index}
//                             Title={project.Title}
//                             StartDate={project.StartDate}
//                             Description={project.Description}
//                             Image={project.Image}
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div id='OverlayTop' className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-[-1]" />
//             <div id='OverlayBottom' className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[-1]" />
//         </div>
//     );
// };

// export default Timeline;

//!v5 importing data from timeline.json (faced error)
// import Image from 'next/image';
// import timelineData from '@/app/data/timelinedata.json'; // Importing the timeline data

// interface TimelineItemProps {
//     Title: string
//     StartDate: string;
//     Description: string;
//     Image: string;


// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//     Title,
//     StartDate,
//     Description,
//     Image,

// }) => (
//     <div id='TimelineItem' className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative">
//         <div id='TimelineLeft' className="text-right md:justify-end md:items-stretch">
//             <div id='TimelineDateText' className=" text-4xl md:text-6xl font-medium sticky top-[50vh]">
//                 {StartDate}
//             </div>
//         </div>
//         <div id='TimelineCenter' className="flex justify-center">
//             <div id='TimelineCircle' className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_4px_#0a0a0a]" />
//         </div>
//         <div>
//             <div id='TimelineRight' className="mb-8">
//                 <div>
//                     <h1 id="TimelineRightHeading" className='text-lg md:text-2xl font-bold'>{Title}</h1>
//                     <p id='TimelineIRightText' className=" text-xs md:text-sm font-medium leading-snug">
//                         {Description}
//                     </p></div>
//             </div>

//             <div id='TimelineImageWrappe' className="bg-black bg-opacity-70 p-5 rounded-lg">
//                 <Image
//                     src={Image}
//                     alt={Title}
//                     width={480}
//                     height={270}
//                     className="rounded-lg"
//                     priority
//                 />
//             </div>
//         </div>
//     </div>
// );

// const Timeline: React.FC = () => {
//     return (
//         <div id='SectionTimeline' className=" relative z-[-3]" >
//             <div id='Container' className="mx-auto max-w-[1360px] px-4">
//                 <div id='TimelineComponent' className="flex flex-col items-center justify-center relative">
//                     <div id='TimelineProgress' className="absolute left-1/2 -translate-x-1/2 bg-gray-700 w-[3px] h-full z-[-2]" />
//                     <div id='TimelineProgressBar' className="fixed left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#ff7448] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1]" />

//                     {/* Loop through the timeline data and render TimelineItems */}
//                     {timelineData.projects.map((project, index) => (
//                         <TimelineItem
//                             key={index}
//                             StartDate={new Date(project.StartDate).toLocaleDateString('en-US', {
//                                 year: 'numeric',
//                                 month: 'long',
//                             })}
//                             Description={project.Description}
//                             Image={project.Image}
//                         // imgAlt={project.Title}
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div id='OverlayTop' className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-[-1]" />
//             <div id='OverlayBottom' className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[-1]" />
//         </div>
//     );
// };

// export default Timeline;

// //!v4 trying to fix rogress bar
// import Image from 'next/image';

// interface TimelineItemProps {
//     date: string;
//     text: string;
//     imgSrc: string;
//     imgAlt: string;
//     additionalContent?: JSX.Element;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//     date,
//     text,
//     imgSrc,
//     imgAlt,
// }) => (
//     <div id='TimelineItem' className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative">
//         <div id='TimelineLeft' className="text-right md:justify-end md:items-stretch">
//             <div id='TimelineDateText' className="text-white text-4xl md:text-6xl font-medium sticky top-[50vh]">
//                 {date}
//             </div>
//         </div>
//         <div id='TimelineCenter' className="flex justify-center">
//             <div id='TimelineCircle' className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_4px_#0a0a0a]" />
//         </div>
//         <div>
//             <div id='TimelineRight' className="mb-8">
//                 <p id='TimelineImageWrapper' className="text-white text-lg md:text-2xl font-medium leading-snug">
//                     {text}
//                 </p>
//             </div>

//             <div id='' className="bg-black bg-opacity-70 p-5 rounded-lg">
//                 <Image
//                     src={imgSrc}
//                     alt={imgAlt}
//                     width={480}
//                     height={270}
//                     className="rounded-lg"
//                     priority
//                 />
//             </div>
//         </div>
//     </div>
// );

// const Timeline: React.FC = () => {
//     return (

//         < div id='SectionTimeline' className=" relative z-[-3]" >
//             <div id='Container' className="mx-auto max-w-[1360px] px-4">
//                 <div id='TimelineComponent' className="flex flex-col items-center justify-center relative">
//                     <div id='TimelineProgress' className="absolute left-1/2 -translate-x-1/2 bg-gray-700 w-[3px] h-full z-[-2]" />
//                     {/* Fixed gradient bar for progress */}
//                     <div id='TimelineProgressBar' className="fixed left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#ff7448] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1]" />

//                     {/* Timeline Items */}
//                     <TimelineItem
//                         date="January 2012"
//                         text="Co-founder Dan finishes the economics degree he promised his mum he’d complete, only to never use it and start his own clothing business (love you mum)."
//                         imgSrc="https://cdn.prod.website-files.com/66b49b60a0caf052653f1696/66b49b60a0caf052653f16dd_Image%201%20-%20Transparent.png"
//                         imgAlt="Dan's Economics Degree"
//                     /><TimelineItem
//                         date="January 2012"
//                         text="Co-founder Dan finishes the economics degree he promised his mum he’d complete, only to never use it and start his own clothing business (love you mum)."
//                         imgSrc="https://cdn.prod.website-files.com/66b49b60a0caf052653f1696/66b49b60a0caf052653f16dd_Image%201%20-%20Transparent.png"
//                         imgAlt="Dan's Economics Degree"
//                     />


//                 </div>
//             </div>
//             <div id='OverlayTop' className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-[-1]" />
//             <div id='OverlayBottom' className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[-1]" />
//         </div >

//     );
// };

// export default Timeline;


//!v3 static data
//// components/Timeline.tsx

// import Image from 'next/image';

// interface TimelineItemProps {
//     date: string;
//     text: string;
//     imgSrc: string;
//     imgAlt: string;
//     additionalContent?: JSX.Element;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//     date,
//     text,
//     imgSrc,
//     imgAlt,
//     additionalContent,
// }) => (
//     <div className="grid grid-cols-1 md:grid-cols-[1fr_180px_1fr] gap-0 py-20 relative">
//         <div className="text-right md:justify-end md:items-stretch">
//             <div className="text-white text-4xl md:text-6xl font-medium sticky top-[50vh]">
//                 {date}
//             </div>
//         </div>
//         <div className="flex justify-center">
//             <div className="bg-white rounded-full w-[15px] h-[15px] sticky top-[50vh] shadow-[0_0_0_8px_#0a0a0a]" />
//         </div>
//         <div>
//             <div className="mb-8">
//                 <p className="text-white text-lg md:text-2xl font-medium leading-snug">
//                     {text}
//                 </p>
//             </div>
//             {additionalContent && <div className="mb-14">{additionalContent}</div>}
//             <div className="bg-black bg-opacity-70 p-5 rounded-lg">
//                 <Image
//                     src={imgSrc}
//                     alt={imgAlt}
//                     width={480}
//                     height={270}
//                     className="rounded-lg"
//                     priority
//                 />
//             </div>
//         </div>
//     </div>
// );

// const Timeline: React.FC = () => {
//     return (
//         <div className="relative z-0">
//             <div className="bg-[#0a0a0a] z-[-3] relative">
//                 <div className=" mx-auto max-w-[1360px] px-4">
//                     <div className="flex flex-col items-center justify-center relative">
//                         <div className="absolute left-1/2 -translate-x-1/2 bg-gray-700 w-[3px] h-full z-[-2]" />
//                         <div className="fixed bg-gradient-to-b from-[#ff7448] via-[#ff4848] to-[#6248ff] w-[3px] h-[50vh] top-0 z-[-1]"></div>

//                         {/* Timeline Items */}
//                         <TimelineItem
//                             date="January 2012"
//                             text="Co-founder Dan finishes the economics degree he promised his mum he’d complete, only to never use it and start his own clothing business (love you mum)."
//                             imgSrc="https://cdn.prod.website-files.com/66b49b60a0caf052653f1696/66b49b60a0caf052653f16dd_Image%201%20-%20Transparent.png"
//                             imgAlt="Dan's Economics Degree"
//                         />

//                         <TimelineItem
//                             date="November 2019"
//                             text="After spending time apart, Dan and Adam begin to plan their next moves and rekindle their business partnership."
//                             imgSrc="https://cdn.prod.website-files.com/66b49b60a0caf052653f1696/66b49b60a0caf052653f16e4_Image%206.png"
//                             imgAlt="Relume Name Creation"
//                             additionalContent={
//                                 <div className="text-gray-400">
//                                     <p className="text-white font-medium">relume</p>
//                                     <div className="bg-transparent inline-block px-2 py-1 rounded-md text-sm">
//                                         verb
//                                     </div>
//                                     <p className="mt-1">
//                                         [ri-loom] <br />
//                                         <span className="text-white">
//                                             To relight or rekindle (a light, flame, etc.)
//                                         </span>
//                                     </p>
//                                 </div>
//                             }
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a] to-transparent z-[-1]" />
//             <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-[-1]" />
//         </div>
//     );
// };

// export default Timeline;

//!v2 using own data
// import timelineData from '@/app/data/timelinedata.json'; // Adjust the path based on your file structure
// import Image from 'next/image';
// import React from 'react';

// // Define the types for your project data
// type Project = {
//     Title: string;
//     StartTime: string;
//     Image: string;
//     Video: string;
//     // other fields are not used in this component, but you can define them here if needed
// };

// const Timeline: React.FC = () => {
//     return (
//         <div id="TimelineWrapper" className='relative z-0'>
//             <div id="SectionTImelineHeading">
//                 <div id="HeadingContainer" className='w-[90vw] max-w-[1360px] mx-auto'>
//                     <div className="py-[120px] sm:py-20">
//                         <div id="HeadingWrapper" className='max-w-screen-sm  text-center mx-auto'>
//                             <div id="HeadingMargin" className='mb-8 md:mb-6 '>
//                                 <h2 className='font-medium text-6xl '>The story of how we got started on Webflow</h2>
//                                 <p className='text-base tiny:text-lg small:text-xl tiny:tracking-[-0.02em]'>Relume was started by two guys with the same mission. Our story starts 8 years ago... Strap in.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id='SectionTimeline' className='relative z-[-3] '>
//                 <div id='Container' className='w-[90vw]  max-w-[1360px] mx-auto'>
//                     <div id='TimelineComponent' className="relative flex max-w-[1120px] flex-col justify-center items-center mx-auto">
//                         <div id='TimelineProgress' className="absolute z-[-2] w-[3px] h-full bg-[#414141] left-[6px]:sm">
//                             <div id="TimelineProgressBar" className="fixed z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,hsla(14.426229508196721,100.00%,64.12%,1.00),#ff4848_51%,#6248ff)] top-0 bottom-[50vh] inset-x-auto"></div>
//                         </div>
//                         {timelineData.projects.map((project: Project, index: number) => (
//                             <div key={index} id='TimelineItem' className="relative z-[2] grid grid-flow-row auto-cols-[1fr] gap-x-0 gap-y-0 grid-cols-[1fr_180px_1fr] grid-rows-[auto] py-20 w-full sm:grid-cols-[64px_1fr] tiny:grid-cols-[48px_1fr]">
//                                 <div id='TimelineLeft' className="justify-end items-stretch text-right sm:text-left">
//                                     <p id='TimelinDate Text' className="sticky  text-5xl leading-[1.2] font-medium tracking-[-0.03em] top-[50vh] sm:text-4xl sm:mb-6">
//                                         {project.StartTime}
//                                     </p>
//                                 </div>
//                                 <div id='TimelineCentre' className="flex justify-center sm:justify-start">
//                                     <div id='TimelineCircle' className="sticky w-[15px] h-[15px] max-h-[15px] max-w-[15px] min-h-[15px] min-w-[15px] bg-white shadow-[0_0_0_5px_#0a0a0a] rounded-br-[100%] rounded-t-[100%] rounded-bl-[100%] top-[50vh]"></div>
//                                 </div>
//                                 <div id="TimelineRight">
//                                     <div id='TimelineRightHeading' className="mb-14 sm:mb-12">
//                                         <p id='TimelineHeadingText' className="text-white text-2xl leading-[1.3] font-medium sm:text-xl">
//                                             {project.Title}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div id="TimelineImageWrapper" className='overflow-hidden bg-[linear-gradient(138deg,hsla(0,0.00%,0.00%,1.00),hsla(0,0.00%,0.00%,0.00)_28%),@img\_66b49b60a0caf052653f16de] bg-[0px_0px,0px_0px] bg-[auto,cover] rounded-br-xl rounded-t-xl rounded-bl-xl'>
//                                     <Image
//                                         src={project.Image || project.Video}
//                                         alt={project.Title}
//                                         width={400}  // Replace with actual width
//                                         height={220} // Replace with actual height
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default Timeline;

//!v1
// import Image from 'next/image'

// const Timeline = () => {
//     return (
//         <div id='Timeline' className='relative z-[-3] '>
//             <div id='Container' className='w-[90vw] max-w-[1360px] mx-auto'>
//                 <div id='TimelineComponent' className="relative flex max-w-[1120px] flex-col justify-center items-center mx-auto">
//                     <div id='TimelineProgress' className="absolute -z-10 w-[3px] h-full bg-[#414141] left-[6px]:sm">
//                         <div id="TimelineProgressBar" className="fixed z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(180deg,hsla(14.426229508196721,100.00%,64.12%,1.00),#ff4848_51%,#6248ff)] top-0 bottom-[50vh] inset-x-auto"></div>
//                     </div>
//                     <div id='TimelineItem' className="relative z-[2] grid grid-flow-row auto-cols-[1fr] gap-x-0 gap-y-0 grid-cols-[1fr_180px_1fr] grid-rows-[auto] py-20 w-full sm:grid-cols-[64px_1fr] tiny:grid-cols-[48px_1fr]">
//                         <div id='TimelineLeft' className="justify-end items-stretch text-right sm:text-left">
//                             <p className="sticky text-white text-5xl leading-[1.2] font-medium tracking-[-0.03em] top-[50vh] sm:text-4xl sm:mb-6"> {/*date  value from timelinedata.json*/}</p>
//                         </div>
//                         <div id='TimelineCentre' className="flex justify-center sm:justify-start">
//                             <div id='TimelineCircle' className="sticky w-[15px] h-[15px] max-h-[15px] max-w-[15px] min-h-[15px] min-w-[15px] bg-white shadow-[0_0_0_8px_#0a0a0a] rounded-br-[100%] rounded-t-[100%] rounded-bl-[100%] top-[50vh]"></div>
//                         </div>
//                         <div id="TimelineRight">
//                             <div id='TimelineRightHeading' className="mb-14 sm:mb-12">
//                                 <p id='TimelineHedingText' className="text-white text-2xl leading-[1.3] font-medium sm:text-xl">{/*Title value from timelinedata.json*/}</p>
//                             </div>
//                         </div>
//                         <div id="TimelineImageWrapper" className='overflow-hidden bg-[linear-gradient(138deg,hsla(0,0.00%,0.00%,1.00),hsla(0,0.00%,0.00%,0.00)_28%),@img\_66b49b60a0caf052653f16de] bg-[0px_0px,0px_0px] bg-[auto,cover] rounded-br-xl rounded-t-xl rounded-bl-xl '>
//                             <Image src={/*image / video from timelinedata.json*/} alt="text" />
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Timeline