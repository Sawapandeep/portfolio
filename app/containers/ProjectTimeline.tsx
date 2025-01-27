"use client";

import projectdata from "@/app/data/projectdata.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  Title: string;
  StartDate: string;
  EndDate: string;
  Image: string;
  Type: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  Title,
  StartDate,
  EndDate,
  Image: imgSrc,
  Type,
}) => {
  const ref = useRef<HTMLDivElement | null>(null); // The reference to the left side container
  const imageRef = useRef<HTMLImageElement | null>(null); // The reference to the project image
  const [currentDate, setCurrentDate] = useState(StartDate);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When 50% of the project image is visible, update the date
        if (entry.isIntersecting) {
          setCurrentDate(EndDate); // Set EndDate when image is 50% visible
        } else {
          setCurrentDate(StartDate); // Set StartDate when image is less than 50% visible
        }
      },
      {
        root: null, // Observe within the viewport
        threshold: 0.5, // Trigger when 50% of the image is visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [StartDate, EndDate]);

  const router = useRouter();

  const handleMoreClick = () => {
    const projectId = projectdata.projects.find((proj) => proj.Title === Title)?.id;
    if (projectId) {
      router.push(`/CaseStudies?id=${projectId}`);
    }
  };

  const getTooltipColor = () => {
    switch (Type) {
      case "API":
        return "bg-[#03fbab]";
      case "Frontend":
        return "bg-[#03fbef]";
      case "Backend":
        return "bg-violet-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      ref={ref}
      id="TimelineItem"
      className="relative z-[2] grid auto-cols-[1fr] gap-x-0 gap-y-0 grid-cols-[1fr_50px_1fr] grid-rows-[auto] py-10 max-md:w-full max-md:grid-cols-[40px_1fr] max-sm:grid-cols-[30px_1fr]"
    >
      <article
        id="TimelineLeft"
        className="text-left rounded-3xl border-2 border-[#1e293b] md:justify-end md:items-stretch max-md:text-left max-md:col-start-2 max-md:col-end-3 max-md:row-start-2 max-md:row-end-3"
      >
        <div className="relative">
          <figcaption
            id="TimelineRightHeading"
            className="text-lg md:text-2xl font-bold text-white px-2 md:px-4 py-4"
          >
            {Title}
          </figcaption>
        </div>
        <div className="flex items-center justify-start px-2 md:px-4 mb-2">
          <span className={`text-sm text-black p-2 rounded-md ${getTooltipColor()}`}>
            {Type}
          </span>
        </div>

        <figure
          id="TimelineImageWrapper"
          className="overflow-hidden bg-opacity-70 px-2 md:px-4 py-2 md:py-4 rounded-xl"
        >
          <Image
            ref={imageRef} // Reference the image element
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
            className="border-2 rounded-lg px-2 md:px-4 border-[#1e293b] text-lg text-white mb-4 hover:border-[#6797e4] duration-400"
          >
            More
          </button>
        </div>
      </article>
      <div
        id="TimelineCenter"
        className="flex justify-center max-md:justify-start max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-3"
      >
        <div
          id="TimelineCircle"
          className="sticky w-[15px] h-[15px] max-h-[15px] max-w-[15px] min-h-[15px] min-w-[15px] bg-white shadow-[0_0_0_8px_#0a0a0a] rounded-full top-[50vh]"
        ></div>
      </div>
      <div
        id="TimelineRight"
        className="mb-8 max-md:col-start-2 max-md:col-end-3 max-md:row-start-1 max-md:row-end-2"
      >
        {/* Apply fade-in animation */}
        <div
          id="TimelineDateText"
          className="md:text-6xl font-medium sticky top-[50vh] max-md:mb-6 max-md:text-4xl text-white text-left max-md:text-left justify-items-stretch transition-opacity duration-900 ease-in-out animate-fadeIn"
        >
          {currentDate}
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <div id="SectionTimeline" className="relative z-[-3]">
      <div id="Container" className="mx-auto w-[90vw] max-w-[1360px]">
        <div
          id="TimelineComponent"
          className="relative flex max-w-[1120px] flex-col justify-center items-center mx-auto max-md:flex max-md:auto-cols-[1fr] max-md:gap-x-4 max-md:gap-y-4 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]"
        >
          <div
            id="TimelineProgress"
            className="absolute z-[-2] block w-[3px] h-full bg-[#414141] max-md:left-1.5"
          >
            <div
              id="TimelineProgressBar"
              className="fixed z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(to_bottom,hsla(14.426229508196721,100.00%,64.12%,1.00),#ff4848_51%,#6248ff)] top-0 bottom-[50vh] inset-x-auto"
            ></div>
          </div>
          {projectdata.projects.map((project) => (
            <TimelineItem
              key={project.id}
              Title={project.Title}
              StartDate={project.EndDate}
              EndDate={project.EndDate}
              Image={project.Image}
              Type={project.Type}
            />
          ))}
        </div>
      </div>
      <div
        id="OverlayTop"
        className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-[-1] duration-900 ease-in-out animate-fadeIn"
      />
      <div
        id="OverlayBottom"
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-[-1] duration-900 ease-in-out animate-fadeIn"
      />
    </div>
  );
};

export default Timeline;

//!3
// "use client";

// import projectdata from "@/app/data/projectdata.json";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";

// interface TimelineItemProps {
//   Title: string;
//   StartDate: string;
//   EndDate: string;
//   Image: string;
//   Type: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//   Title,
//   StartDate,
//   EndDate,
//   Image: imgSrc,
//   Type,
// }) => {
//   const ref = useRef<HTMLDivElement | null>(null); // The reference to the left side container
//   const imageRef = useRef<HTMLImageElement | null>(null); // The reference to the project image
//   const [currentDate, setCurrentDate] = useState(StartDate);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // When 50% of the project image is visible, update the date
//         if (entry.isIntersecting) {
//           setCurrentDate(EndDate); // Set EndDate when image is 50% visible
//         } else {
//           setCurrentDate(StartDate); // Set StartDate when image is less than 50% visible
//         }
//       },
//       {
//         root: null, // Observe within the viewport
//         threshold: 0.5, // Trigger when 50% of the image is visible
//       }
//     );

//     if (imageRef.current) {
//       observer.observe(imageRef.current);
//     }

//     return () => {
//       if (imageRef.current) {
//         observer.unobserve(imageRef.current);
//       }
//     };
//   }, [StartDate, EndDate]);

//   const router = useRouter();

//   const handleMoreClick = () => {
//     const projectId = projectdata.projects.find((proj) => proj.Title === Title)?.id;
//     if (projectId) {
//       router.push(`/CaseStudies?id=${projectId}`);
//     }
//   };

//   const getTooltipColor = () => {
//     switch (Type) {
//       case "API":
//         return "bg-[#03fbab]";
//       case "Frontend":
//         return "bg-[#03fbef]";
//       case "Backend":
//         return "bg-violet-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   return (
//     <div
//       ref={ref}
//       id="TimelineItem"
//       className="relative z-[2] grid auto-cols-[1fr] gap-x-0 gap-y-0 grid-cols-[1fr_50px_1fr] grid-rows-[auto] py-10 max-md:w-full max-md:grid-cols-[40px_1fr] max-sm:grid-cols-[30px_1fr]"
//     >
//       <article
//         id="TimelineLeft"
//         className="text-left rounded-3xl border-2 border-[#1e293b] md:justify-end md:items-stretch max-md:text-left max-md:col-start-2 max-md:col-end-3 max-md:row-start-2 max-md:row-end-3"
//       >
//         <div className="relative">
//           <figcaption
//             id="TimelineRightHeading"
//             className="text-lg md:text-2xl font-bold text-white px-2 md:px-4 py-4"
//           >
//             {Title}
//           </figcaption>
//         </div>
//         <div className="flex items-center justify-start px-2 md:px-4 mb-2">
//           <span className={`text-sm text-black p-2 rounded-md ${getTooltipColor()}`}>
//             {Type}
//           </span>
//         </div>

//         <figure
//           id="TimelineImageWrapper"
//           className="overflow-hidden bg-opacity-70 px-2 md:px-4 py-2 md:py-4 rounded-xl"
//         >
//           <Image
//             ref={imageRef} // Reference the image element
//             src={imgSrc}
//             alt={Title}
//             width={1000}
//             height={1000}
//             className="rounded-lg aspect-auto"
//             priority
//           />
//         </figure>
//         <div className="flex justify-end px-2 md:px-4">
//           <button
//             onClick={handleMoreClick}
//             className="border-2 rounded-lg px-2 md:px-4 border-[#1e293b] text-lg text-white mb-4 hover:border-[#6797e4] duration-400"
//           >
//             More
//           </button>
//         </div>
//       </article>
//       <div
//         id="TimelineCenter"
//         className="flex justify-center max-md:justify-start max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-3"
//       >
//         <div
//           id="TimelineCircle"
//           className="sticky w-[15px] h-[15px] max-h-[15px] max-w-[15px] min-h-[15px] min-w-[15px] bg-white shadow-[0_0_0_8px_#0a0a0a] rounded-full top-[50vh]"
//         ></div>
//       </div>
//       <div
//         id="TimelineRight"
//         className="mb-8 max-md:col-start-2 max-md:col-end-3 max-md:row-start-1 max-md:row-end-2"
//       >
//         {/* Transition for StartDate to EndDate */}
//         <div
//           id="TimelineDateText"
//           className="md:text-6xl font-medium sticky top-[50vh] max-md:mb-6 max-md:text-4xl text-white text-left max-md:text-left justify-items-stretch transition-opacity duration-500 ease-in-out"
//         >
//           {currentDate}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Timeline: React.FC = () => {
//   return (
//     <div id="SectionTimeline" className="relative z-[-3]">
//       <div id="Container" className="mx-auto w-[90vw] max-w-[1360px]">
//         <div
//           id="TimelineComponent"
//           className="relative flex max-w-[1120px] flex-col justify-center items-center mx-auto max-md:flex max-md:auto-cols-[1fr] max-md:gap-x-4 max-md:gap-y-4 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]"
//         >
//           <div
//             id="TimelineProgress"
//             className="absolute z-[-2] block w-[3px] h-full bg-[#414141] max-md:left-1.5"
//           >
//             <div
//               id="TimelineProgressBar"
//               className="fixed z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(to_bottom,hsla(14.426229508196721,100.00%,64.12%,1.00),#ff4848_51%,#6248ff)] top-0 bottom-[50vh] inset-x-auto"
//             ></div>
//           </div>
//           {projectdata.projects.map((project) => (
//             <TimelineItem
//               key={project.id}
//               Title={project.Title}
//               StartDate={project.StartDate}
//               EndDate={project.EndDate}
//               Image={project.Image}
//               Type={project.Type}
//             />
//           ))}
//         </div>
//       </div>
//       <div
//         id="OverlayTop"
//         className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-[-1]"
//       />
//       <div
//         id="OverlayBottom"
//         className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-[-1]"
//       />
//     </div>
//   );
// };

// export default Timeline;

//!2
// "use client";

// import projectdata from "@/app/data/projectdata.json";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useRef, useState } from "react";

// interface TimelineItemProps {
//   Title: string;
//   StartDate: string;
//   EndDate: string;
//   Image: string;
//   Type: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({
//   Title,
//   StartDate,
//   EndDate,
//   Image: imgSrc,
//   Type,
// }) => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [isEndReached, setIsEndReached] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsEndReached(entry.isIntersecting);
//       },
//       {
//         root: null, // Observe within the viewport
//         threshold: 0.5, // Trigger when 10% of the element is visible
//         rootMargin: "0px 0px -50% 0px", // Adjust visibility trigger point
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   const router = useRouter();

//   const handleMoreClick = () => {
//     const projectId = projectdata.projects.find((proj) => proj.Title === Title)?.id;
//     if (projectId) {
//       router.push(`/CaseStudies?id=${projectId}`);
//     }
//   };

//   const getTooltipColor = () => {
//     switch (Type) {
//       case "API":
//         return "bg-[#03fbab]";
//       case "Frontend":
//         return "bg-[#03fbef]";
//       case "Backend":
//         return "bg-violet-500";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   return (
//     <div
//       ref={ref}
//       id="TimelineItem"
//       className="relative z-[2] grid auto-cols-[1fr] gap-x-0 gap-y-0 grid-cols-[1fr_50px_1fr] grid-rows-[auto] py-10 max-md:w-full max-md:grid-cols-[40px_1fr] max-sm:grid-cols-[30px_1fr]"
//     >
//       <article
//         id="TimelineLeft"
//         className="text-left rounded-3xl border-2 border-[#1e293b] md:justify-end md:items-stretch max-md:text-left max-md:col-start-2 max-md:col-end-3 max-md:row-start-2 max-md:row-end-3"
//       >
//         <div className="relative">
//           <figcaption
//             id="TimelineRightHeading"
//             className="text-lg md:text-2xl font-bold text-white px-2 md:px-4 py-4"
//           >
//             {Title}
//           </figcaption>
//         </div>
//         <div className="flex items-center justify-start px-2 md:px-4 mb-2">
//           <span className={`text-sm text-black p-2 rounded-md ${getTooltipColor()}`}>
//             {Type}
//           </span>
//         </div>

//         <figure
//           id="TimelineImageWrapper"
//           className="overflow-hidden bg-opacity-70 px-2 md:px-4 py-2 md:py-4 rounded-xl"
//         >
//           <Image
//             src={imgSrc}
//             alt={Title}
//             width={1000}
//             height={1000}
//             className="rounded-lg aspect-auto"
//             priority
//           />
//         </figure>
//         <div className="flex justify-end px-2 md:px-4">
//           <button
//             onClick={handleMoreClick}
//             className="border-2 rounded-lg px-2 md:px-4 border-[#1e293b] text-lg text-white mb-4 hover:border-[#6797e4] duration-400"
//           >
//             More
//           </button>
//         </div>
//       </article>
//       <div
//         id="TimelineCenter"
//         className="flex justify-center max-md:justify-start max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-3"
//       >
//         <div
//           id="TimelineCircle"
//           className="sticky w-[15px] h-[15px] max-h-[15px] max-w-[15px] min-h-[15px] min-w-[15px] bg-white shadow-[0_0_0_8px_#0a0a0a] rounded-full top-[50vh]"
//         ></div>
//       </div>
//       <div
//         id="TimelineRight"
//         className="mb-8 max-md:col-start-2 max-md:col-end-3 max-md:row-start-1 max-md:row-end-2"
//       >
//         <div
//           id="TimelineDateText"
//           className={`md:text-6xl font-medium sticky top-[50vh] max-md:mb-6 max-md:text-4xl text-white text-left max-md:text-left justify-items-stretch transition-opacity duration-700 ${
//             isEndReached ? "opacity-0" : "opacity-100"
//           }`}
//         >
//           {StartDate}
//         </div>
//         <div
//           id="TimelineDateText"
//           className={`md:text-6xl font-medium sticky top-[50vh] max-md:mb-6 max-md:text-4xl text-white text-left max-md:text-left justify-items-stretch transition-opacity duration-700 ${
//             isEndReached ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {EndDate}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Timeline: React.FC = () => {
//   return (
//     <div id="SectionTimeline" className="relative z-[-3]">
//       <div id="Container" className="mx-auto w-[90vw] max-w-[1360px]">
//         <div
//           id="TimelineComponent"
//           className="relative flex max-w-[1120px] flex-col justify-center items-center mx-auto max-md:flex max-md:auto-cols-[1fr] max-md:gap-x-4 max-md:gap-y-4 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]"
//         >
//           <div
//             id="TimelineProgress"
//             className="absolute z-[-2] block w-[3px] h-full bg-[#414141] max-md:left-1.5"
//           >
//             <div
//               id="TimelineProgressBar"
//               className="fixed z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(to_bottom,hsla(14.426229508196721,100.00%,64.12%,1.00),#ff4848_51%,#6248ff)] top-0 bottom-[50vh] inset-x-auto"
//             ></div>
//           </div>
//           {projectdata.projects.map((project) => (
//             <TimelineItem
//               key={project.id}
//               Title={project.Title}
//               StartDate={project.StartDate}
//               EndDate={project.EndDate}
//               Image={project.Image}
//               Type={project.Type}
//             />
//           ))}
//         </div>
//       </div>
//       <div
//         id="OverlayTop"
//         className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-[-1]"
//       />
//       <div
//         id="OverlayBottom"
//         className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-[-1]"
//       />
//     </div>
//   );
// };

// export default Timeline;
//!1
//   "use client";

// import projectdata from '@/app/data/projectdata.json';
// import { useInView } from "framer-motion";
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useEffect, useRef, useState } from "react";

// interface TimelineItemProps {
//     Title: string;
//     // TimelineDate: string;
//     StartDate: string;
//     EndDate:string;
//     Image: string;
//     Type: string;
// }


// const TimelineItem: React.FC<TimelineItemProps> = ({
//     Title,
//     StartDate,
//     EndDate,
//     Image: imgSrc,
//     Type,
// }) => {
//     const ref = useRef<HTMLDivElement | null>(null);
//     const [isEndReached, setIsEndReached] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsEndReached(entry.isIntersecting);
//             },
//             { threshold: 1.0 } // Fully visible
//         );

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => {
//             if (ref.current) {
//                 observer.unobserve(ref.current);
//             }
//         };
//     }, []);

//     const handleMoreClick = () => {
//         const projectId = projectdata.projects.find((proj) => proj.Title === Title)?.id;
//         if (projectId) {
//             router.push(`/CaseStudies?id=${projectId}`);
//         }
//     };

//     const getTooltipColor = () => {
//         switch (Type) {
//             case 'API':
//                 return 'bg-[#03fbab]';
//             case 'Frontend':
//                 return 'bg-[#03fbef]';
//             case 'Backend':
//                 return 'bg-violet-500';
//             default:
//                 return 'bg-gray-500';
//         }
//     };

//     return (
//         <div
//             ref={ref}
//             id='TimelineItem'
//             className="relative z-[2] grid auto-cols-[1fr] gap-x-0 gap-y-0 grid-cols-[1fr_50px_1fr] grid-rows-[auto] py-10 max-md:w-full max-md:grid-cols-[40px_1fr] max-sm:grid-cols-[30px_1fr]"
//         >
//             <article
//                 id='TimelineLeft'
//                 className="text-left rounded-3xl border-2 border-[#1e293b] md:justify-end md:items-stretch max-md:text-left max-md:col-start-2 max-md:col-end-3 max-md:row-start-2 max-md:row-end-3"
//             >
//                 <div className="relative">
//                     <figcaption
//                         id="TimelineRightHeading"
//                         className="text-lg md:text-2xl font-bold text-white px-2 md:px-4 py-4"
//                     >
//                         {Title}
//                     </figcaption>
//                 </div>
//                 <div className="flex items-center justify-start px-2 md:px-4 mb-2">
//                     <span className={`text-sm text-black p-2 rounded-md ${getTooltipColor()}`}>
//                         {Type}
//                     </span>
//                 </div>

//                 <figure
//                     id='TimelineImageWrapper'
//                     className="overflow-hidden bg-opacity-70 px-2 md:px-4 py-2 md:py-4 rounded-xl"
//                 >
//                     <Image
//                         src={imgSrc}
//                         alt={Title}
//                         width={1000}
//                         height={1000}
//                         className="rounded-lg aspect-auto"
//                         priority
//                     />
//                 </figure>
//                 <div className="flex justify-end px-2 md:px-4">
//                     <button
//                         onClick={handleMoreClick}
//                         className={`border-2 rounded-lg px-2 md:px-4 border-[#1e293b] text-lg text-white mb-4 hover:border-[#6797e4] duration-400`}
//                     >
//                         More
//                     </button>
//                 </div>
//             </article>
//             <div
//                 id='TimelineCenter'
//                 className="flex justify-center max-md:justify-start max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-3 "
//             >
//                 <div
//                     id='TimelineCircle'
//                     className="sticky w-[15px] h-[15px] max-h-[15px] max-w-[15px] min-h-[15px] min-w-[15px] bg-white shadow-[0_0_0_8px_#0a0a0a] rounded-full top-[50vh]"
//                 ></div>
//             </div>
//             <div
//                 id='TimelineRight'
//                 className="mb-8 max-md:col-start-2 max-md:col-end-3 max-md:row-start-1 max-md:row-end-2"
//             >
//                 <div
//                     id='TimelineDateText'
//                     className={`md:text-6xl font-medium sticky top-[50vh] max-md:mb-6 max-md:text-4xl text-white text-left max-md:text-left justify-items-stretch transition-all duration-700 ${
//                         isEndReached ? 'opacity-0' : 'opacity-100'
//                     }`}
//                 >
//                     {StartDate}
//                 </div>
//                 <div
//                     id='TimelineDateText'
//                     className={`md:text-6xl font-medium sticky top-[50vh] max-md:mb-6 max-md:text-4xl text-white text-left max-md:text-left justify-items-stretch transition-all duration-700 ${
//                         isEndReached ? 'opacity-100' : 'opacity-0'
//                     }`}
//                 >
//                     {EndDate}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Timeline: React.FC = () => {
//     return (
//         <div id='SectionTimeline' className="relative z-[-3]">
//             <div id='Container' className="mx-auto w-[90vw] max-w-[1360px] ">
//                 <div id='TimelineComponent' className="relative flex max-w-[1120px] flex-col justify-center items-center mx-auto max-md:flex max-md:auto-cols-[1fr] max-md:gap-x-4 max-md:gap-y-4 max-md:grid-cols-[1fr_1fr] max-md:grid-rows-[auto_auto]">
//                     <div id='TimelineProgress' className="absolute z-[-2] block w-[3px] h-full bg-[#414141] max-md:left-1.5">
//                         <div id='TimelineProgressBar' className="fixed z-[-1] w-[3px] h-[50vh] bg-white bg-[linear-gradient(to_bottom,hsla(14.426229508196721,100.00%,64.12%,1.00),#ff4848_51%,#6248ff)] top-0 bottom-[50vh] inset-x-auto"></div>
//                     </div>
//                     {projectdata.projects.map((project) => (
//                         <TimelineItem
//                             key={project.id}
//                             Title={project.Title}
//                             StartDate={project.StartDate}
//                             EndDate={project.EndDate}
//                             Image={project.Image}
//                             Type={project.Type} // Pass the project type to TimelineItem
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

