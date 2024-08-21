// ProjectContent.tsx
"use client";

import projectdata from '@/app/data/projectdata.json';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

import { DockBar } from '../components/magicui/DockBar';
import Space from '../components/myui/Space';
import { ProjectComponent } from './ProjectComponent';
import TextCarousel from './TextCarousel'; // Import the TextCarousel component

const ProjectContent: React.FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const project = projectdata.projects.find(proj => proj.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="max-w-[80vw] mx-auto py-10">
            <div id="ProjectHero" className="mt-14 ">
                <div id="ProjectContainer" className="w-full max-w-[1296px] mx-auto px-6 sm:px-3">
                    <div id="HeroGrid" className="justify-items-center items-center gap-x-6 gap-y-6 grid-rows-[auto] md:gap-x-12 md:gap-y-12 md:grid-cols-[1fr] md:text-center sm:flex flex-row-reverse">
                        <div id="HeroContent" className="flex max-w-[541px] flex-col items-start mx-auto md:items-center">
                            <h1 id="PanelHeading" className="mb-6 lg:text-6xl sm:text-5xl text-4xl text-cyan-300 font-bold">{project.Title}</h1>
                            <h2 id="DisplayHeading" className="text-2xl tracking-[-0.02em] mb-6 md:text-[54px] md:leading-[54px] md:font-medium text-[28px] leading-[30px] font-normal">{project.Description}</h2>
                        </div>
                        <Image className="rounded-[12px] sm:rounded-[6px]" src={project.Image} alt="ProjectImage" width={500} height={270} />
                    </div>
                </div>
            </div>
            <Space />

            <div id="ProjectComponents" className="w-full max-w-[1296px] mx-auto px-3 sm:px-6">
                <div id="Panel" className="flex flex-col justify-between  align-items-center bg-[hsla(0,0%,100%,0.05)] rounded-br-xl rounded-t-xl rounded-bl-xl 
            md:rounded-br-md md:rounded-t-md md:rounded-bl-md 
            my-6 py-[108px] 
            md:py-[60px] 
            sm:py-12 
            ">
                    <h2 className="font-bold text-4xl text-cyan-300 text-center mb-2 sm:mb-4  md:mb-8"> Why? </h2>
                    <p className="font-normal text-center text-xl sm:text-2xl tracking-[-0.02em] ">{project.Problem}</p>
                </div>
                <div id="GridTwoThird" className="grid justify-items-stretch items-stretch grid-flow-row gap-x-6 gap-y-6 grid-cols-[1.25fr_2fr] grid-rows-[auto]">
                    <div id="Panel1" className="  flex flex-col justify-between items-center bg-[hsla(0,0.00%,100.00%,0.05)] sm:rounded-br-xl sm:rounded-t-xl sm:rounded-bl-xl sm:ltr rounded-br-md rounded-t-md rounded-bl-md">
                        <div id="Panel1Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto sm:p-9 p-6 lg:p-12">
                            <h2 className="font-bold text-4xl text-cyan-300 text-center mb-2 sm:mb-4 rounded-lg  p-4 md:mb-8 shadow-x bg-black"> What? </h2>

                            <ProjectComponent technologies={project.Technologies} />
                        </div>
                    </div>
                    <div id="Panel2" className="flex flex-col justify-between items-center bg-[linear-gradient(to_right,#ff715b,#5132c0)] sm:rounded-br-xl sm:rounded-t-xl sm:rounded-bl-xl sm:ltr rounded-br-md rounded-t-md rounded-bl-md">
                        <div id="Panel2Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto p-6 sm:p-9 lg:p-12">
                            <h2 className="font-bold text-4xl text-cyan-300 text-center mb-2 sm:mb-4 rounded-lg bg-black p-4 md:mb-8"> How? </h2>

                            <TextCarousel stages={project.Stages} /> {/* Pass the Stages array */}
                        </div>
                    </div>
                </div>
            </div>
            <DockBar srclink={project.Srclink} livelink={project.Livelink} back={'/'} />
        </div>
    );
};

const CaseStudies: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectContent />
        </Suspense>
    );
};

export default CaseStudies;

//!v3
// "use client";

// import projectdata from '@/app/data/projectdata.json';
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation';
// import React, { Suspense } from 'react';

// import { DockBar } from '../components/magicui/DockBar';
// import { ProjectComponent } from './ProjectComponent';
// import Space from '../components/myui/Space';
// import EmblaCarousel from './Slider';


// const ProjectContent: React.FC = () => {
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');
//     const project = projectdata.projects.find(proj => proj.id === id);

//     if (!project) {
//         return <div>Project not found</div>;
//     }

//     return (
//         <div className="max-w-[80vw] mx-auto py-10">
//             <div id="ProjectHero" className="mt-14 ">
//                 <div id="ProjectContainer" className="w-full max-w-[1296px] mx-auto px-6 sm:px-3">
//                     <div id="HeroGrid" className="justify-items-center items-center gap-x-6 gap-y-6 grid-rows-[auto] md:gap-x-12 md:gap-y-12 md:grid-cols-[1fr] md:text-center sm:flex flex-row-reverse">
//                         <div id="HeroContent" className="flex max-w-[541px] flex-col items-start mx-auto md:items-center">
//                             <h2 id="PanelHeading" className="mb-6 lg:text-6xl sm:text-5xl text-4xl text-cyan-300 font-bold">{project.Title}</h2>
//                             <h1 id="DisplayHeading" className="lg:text-4xl lg:leading-[68px] lg:font-bold tracking-[-0.02em] mb-6 sm:text-[54px] sm:leading-[54px] sm:font-medium text-[28px] leading-[30px] font-normal">{project.Description}</h1>
//                         </div>
//                         <Image className="rounded-[12px] sm:rounded-[6px]" src={project.Image} alt="ProjectImage" width={500} height={270} />
//                     </div>
//                 </div>
//             </div>
//             <Space />
//             <div id="ProjectComponents" className="w-full max-w-[1296px] mx-auto px-3 sm:px-6" >
//                 <div id="GridTwoThird" className=" grid  justify-items-stretch items-stretch grid-flow-row gap-x-6 gap-y-6 grid-cols-[1.25fr_2fr] grid-rows-[auto]">
//                     <div id="Panel1" className="flex flex-col justify-between items-center bg-[hsla(0,0.00%,100.00%,0.05)] sm:rounded-br-xl sm:rounded-t-xl sm:rounded-bl-xl sm:ltr  rounded-br-md rounded-t-md rounded-bl-md">
//                         <div id="Panel1Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto sm:p-9 p-6">
//                             <ProjectComponent technologies={project.Technologies} /> {/* Pass Technologies array */}
//                         </div>
//                     </div>
//                     <div id="Panel2" className="flex flex-col justify-between items-center bg-[linear-gradient(to_right,#ff715b,#5132c0)] sm:rounded-br-xl sm:rounded-t-xl sm:rounded-bl-xl sm:ltr rounded-br-md rounded-t-md rounded-bl-md">
//                         <div id="Panel2Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto p-6 sm:p-9 lg:p-12">
//                             <EmblaCarousel 'to be imlemented here ' />

//                         </div>

//                     </div>

//                 </div>
//             </div>

//             <DockBar srclink={project.Srclink} livelink={project.Livelink} back={'/'} /> {/* DockBar component */}
//         </div>
//     )
// }

// const CaseStudies: React.FC = () => {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <ProjectContent />
//         </Suspense>

//     );
// };
// export default CaseStudies;

//!v2
// "use client";
// import projectdata from '@/app/data/projectdata.json';
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation';
// import React, { Suspense } from 'react';
// import { DockBar } from '../components/magicui/DockBar';
// import { ProjectComponent } from './ProjectComponent';

// const ProjectContent: React.FC = () => {
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');
//     const project = projectdata.projects.find(proj => proj.id === id);

//     if (!project) {
//         return <div>Project not found</div>;
//     }

//     return (
//         <div className="max-w-[80vw] mx-auto py-10">
//             <div id="ProjectHero" className="mt-28 ">
//                 <div id="ProjectContainer" className="w-full max-w-[1296px] mx-auto px-6 sm:px-3">
//                     <div id="HeroGrid" className="justify-items-center items-center gap-x-6 gap-y-6 grid-rows-[auto] md:gap-x-12 md:gap-y-12 md:grid-cols-[1fr] md:text-center sm:flex flex-row-reverse">
//                         <div id="HeroContent" className="flex max-w-[541px] flex-col items-start mx-auto md:items-center">
//                             <h2 id="PanelHeading" className="mb-6 lg:text-6xl sm:text-5xl text-4xl text-cyan-300 font-bold">{project.Title}</h2>
//                             <h1 id="DisplayHeading" className="lg:text-4xl lg:leading-[68px] lg:font-bold tracking-[-0.02em] mb-6 sm:text-[54px] sm:leading-[54px] sm:font-medium text-[28px] leading-[30px] font-normal">{project.Description}</h1>
//                         </div>
//                         <Image className="rounded-[12px] sm:rounded-[6px]" src={project.Image} alt="ProjectImage" width={500} height={270} />
//                     </div>
//                 </div>

//             </div>
//             <div id="ProjectComponents" className="w-full max-w-[1296px] mx-auto px-3 sm:px-6" style={{ perspective: 500 }}>
//                 <div id="GridTwoThird" className=" lg:justify-items-stretch lg:items-stretch lg:grid-flow-row lg:gap-x-6 lg:gap-y-6 lg:grid-cols-[2fr_1fr] lg:grid-rows-[auto] md:max-w-[824px] md:min-h-0 md:grid-cols-[1fr] md:mx-auto gap-x-3 gap-y-3 rtl">
//                     <div id="Panel1" className="flex flex-col justify-between items-start bg-[linear-gradient(to_right,#ff715b,#5132c0)] sm:rounded-br-xl sm:rounded-t-xl sm:rounded-bl-xl sm:ltr rounded-br-md rounded-t-md rounded-bl-md">
//                         <div id="Panel1Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto p-6 sm:p-9 lg:p-12"></div>
//                     </div>
//                     <div id="Panel2" className="flex flex-col justify-between items-start bg-[hsla(0,0.00%,100.00%,0.05)] sm:rounded-br-xl sm:rounded-t-xl sm:rounded-bl-xl sm:ltr  rounded-br-md rounded-t-md rounded-bl-md">
//                         <div id="Panel2Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto sm:p-9 p-6">
//                             <ProjectComponent />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <DockBar srclink={project.Srclink} livelink={project.Livelink} back={'/'} /> {/* Pass the links to DockBar */}
//         </div>
//     );
// };



// export default CaseStudies;
{/* <h1 className="text-4xl font-bold">{project.Title}</h1>
            <p className="text-lg mt-4">{project.Description}</p>
            <img src={project.Image} alt={project.Title} className="mt-6 rounded-lg" /> */}

//!v! before dunamic dataDock
// "use client"; // Ensure this component is treated as a client component
// import projectdata from '@/app/data/projectdata.json';
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation'; // Import from next/navigation
// import React, { Suspense } from 'react';
// import { DockBar } from '../components/magicui/DockBar';

// const ProjectContent: React.FC = () => {
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id'); // Get the 'id' parameter from the URL

//     // Find the project based on the id from the query parameter
//     const project = projectdata.projects.find(proj => proj.id === id);

//     if (!project) {
//         return <div>Project not found</div>;
//     }

//     return (
//         <div className="max-w-[80vw] mx-auto py-10">
//             <div id="ProjectHero" className="mt-28 ">
//                 <div id="ProjectContainer" className="w-full max-w-[1296px] mx-auto px-6 sm:px-3">
//                     <div id="HeroGrid" className="justify-items-center items-center gap-x-6 gap-y-6 grid-rows-[auto] md:gap-x-12 md:gap-y-12 md:grid-cols-[1fr] md:text-center sm:flex flex-row-reverse">
//                         <div id="HeroContent" className="flex max-w-[541px] flex-col items-start mx-auto md:items-center">
//                             <h2 id="PanelHeading" className="mb-6 text-5xl text-cyan-300 font-bold">{project.Title}</h2>
//                             <h1 id="DisplayHeading" className="text-7xl leading-[72px] font-bold tracking-[-0.02em] mb-6 md:text-[54px] md:leading-[54px] sm:text-[54px] sm:leading-[54px]">{project.Description}</h1>
//                             {/* <button id="HeroButton" className="flex h-[60px] justify-center items-center bg-cyan-300 text-black font-semibold text-center px-9 rounded-br-md rounded-t-md rounded-bl-md " onClick={ }>
//                                 Live
//                             </button> */}
//                         </div>
//                         <Image className="rounded-[12px] sm:rounded-[6px]" src={project.Image} alt="ProjectImage" width={500} height={270} />
//                     </div>
//                 </div>
//             </div>
//             <h1 className="text-4xl font-bold">{project.Title}</h1>
//             <p className="text-lg mt-4">{project.Description}</p>
//             <img src={project.Image} alt={project.Title} className="mt-6 rounded-lg" />
//             <DockBar />
//         </div>
//     );
// };

// const CaseStudies: React.FC = () => {
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <ProjectContent />
//         </Suspense>
//     );
// };

// export default CaseStudies;
//!v1
// "use client"; // Ensure this component is treated as a client component
// import projectdata from '@/app/data/projectdata.json';
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation'; // Import from next/navigation
// import { DockBar } from '../components/magicui/DockBar';

// const CaseStudies: React.FC = () => {
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id'); // Get the 'id' parameter from the URL

//     // Find the project based on the id from the query parameter
//     const project = projectdata.projects.find(proj => proj.id === id);

//     if (!project) {
//         return <div>Project not found</div>;
//     }

//     return (
//         <div className="max-w-[80vw] mx-auto py-10">
//             <div id="ProjectHero" className="mt-28 ">
//                 <div id="ProjectContainer" className="w-full max-w-[1296px] mx-auto px-6 sm:px-3">
//                     <div id="HeroGrid" className="justify-items-center items-center gap-x-6 gap-y-6 grid-rows-[auto]  md:gap-x-12 md:gap-y-12 md:grid-cols-[1fr] md:text-center sm:flex flex-row-reverse">
//                         <div id="HeroContent" className="flex max-w-[541px] flex-col items-start mx-auto md:items-center">
//                             <h2 id="PanelHeading" className="mb-6 text-5xl text-cyan-300 font-bold">{project.Title}</h2>
//                             <h1 id="DisplayHeading" className="text-7xl leading-[72px] font-bold tracking-[-0.02em] mb-6  md:text-[54px] md:leading-[54px] sm:text-[54px] sm:leading-[54px]">{project.Description}</h1>
//                             <button id="HeroButton" className="flex h-[60px] justify-center items-center bg-cyan-300 text-black font-semibold text-center px-9 rounded-br-md rounded-t-md rounded-bl-md hover:shadow-[inset_0_0_20px_20px_hsla(0,0.00%,0.00%,0.10)];">
//                                 Live
//                             </button>
//                         </div>
//                         <Image className="rounded-[12px] sm:rounded-[6px]" src={project.Image} alt="ProjectImage" width={500} height={270} />
//                     </div>
//                 </div>
//             </div>
//             <h1 className="text-4xl font-bold">{project.Title}</h1>
//             <p className="text-lg mt-4">{project.Description}</p>
//             <img src={project.Image} alt={project.Title} className="mt-6 rounded-lg" />
//             {/* Add more project details as needed */}
//             <DockBar />
//         </div>

//     );
// };

// export default CaseStudies;
