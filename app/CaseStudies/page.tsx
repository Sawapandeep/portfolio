"use client";

import projectdata from '@/app/data/projectdata.json';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import { NavMenu } from '../components/acternityui/NavbarMenu';
import ProjectBentoGrid from '../components/acternityui/ProjectBentoGrid';
import GradientBorderBox from '../components/myui/GradientBorderBox';
import { ProjectComponent } from './ProjectComponent';
import TextCarousel from './TextCarousel';

const ProjectContent: React.FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const project = projectdata.projects.find(proj => proj.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    // Function to determine the color based on the project type
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
        <div className="max-w-[80vw] mx-auto py-10 space-y-16">
            <NavMenu srclink={project.Srclink} livelink={project.Livelink} back="/" isActive={project.Active} />
            <div id="ProjectHero" className="mt-8">
                <div id="ProjectContainer" className="w-full max-w-[1296px] mx-auto px-6 sm:px-3">
                    <div id="HeroGrid" className="xl:flex flex-row-reverse justify-items-center items-center gap-x-6 gap-y-6 grid-rows-[auto] lg:gap-x-12 lg:gap-y-12 lg:grid-cols-[1fr] lg:text-center">
                        <div id="HeroContent" className="flex max-w-[541px] flex-col items-start mx-auto md:items-center">
                            <h1 id="PanelHeading" className={`mb-6 self-stretch text-3xl lg:text-5xl 2xl:text-6xl font-bold text-center lg:text-left ${getTextColor(project.Type)}`}>
                                {project.Title}
                            </h1>
                            <h2 id="DisplayHeading" className={`mb-6 text-2xl lg:text-3xl 2xl:text-4xl text-[28px] leading-[30px] font-normal text-center lg:text-left text-white`}>
                                {project.Description}
                            </h2>
                        </div>
                        <Image className="rounded-[6px] md:rounded-[12px] mx-auto md:w-[65vw] lg:w-auto" src={project.Image} alt="ProjectImage" width={500} height={270} />
                    </div>
                </div>
            </div>
            <div id="ProjectComponents" className="w-full mx-auto px-3 sm:px-6">
                <GradientBorderBox>
                    {project.Problem && (
                        <div id="Panel" className="flex flex-col justify-between align-items-center bg-[hsla(0,0%,100%,0.09)] rounded-xl md:rounded-md my-6 py-[12px] md:py-[30px]">
                            <h2 className={`font-bold text-4xl text-center mb-2 sm:mb-4 ${getTextColor(project.Type)}`}>Why?</h2>
                            <p className="font-light text-center text-xl sm:text-2xl tracking-[-0.02em]">{project.Problem}</p>
                        </div>
                    )}
                    <div id="GridTwoThird" className="flex flex-col gap-y-6 xl:grid xl:grid-flow-row xl:gap-x-6 xl:grid-cols-[1.25fr_2fr]">
                        <div id="Panel1" className="flex flex-col justify-between items-center bg-[hsla(0,0.00%,100.00%,0.09)] rounded-xl">
                            <div id="Panel1Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto sm:p-2 p-[6px]">
                                <h2 className={`font-bold text-4xl text-center mb-2 sm:mb-4 rounded-lg p-4 shadow-x bg-black ${getTextColor(project.Type)}`}>What?</h2>
                                <ProjectComponent technologies={project.Technologies} />
                            </div>
                        </div>
                        <div id="Panel2" className="flex flex-col justify-between items-center bg-[linear-gradient(to_right,#ff715b,#5132c0)] rounded-xl">
                            <div id="Panel2Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto sm:p-2 p-[6px]">
                                <h2 className={`font-bold text-4xl text-center mb-2 sm:mb-4 rounded-lg bg-black p-4 ${getTextColor(project.Type)}`}>How?</h2>
                                <TextCarousel stages={project.Stages} /> {/* Pass the Stages array */}
                            </div>
                        </div>
                    </div>
                </GradientBorderBox>
            </div>
            <ProjectBentoGrid bentoItems={project.BentoItems} projectType={project.Type} />
            <div className="bg-black xl:h-[180px]" />
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

//!1
// "use client";

// import projectdata from '@/app/data/projectdata.json';
// import Image from 'next/image';
// import { useSearchParams } from 'next/navigation';
// import React, { Suspense } from 'react';
// import { NavMenu } from '../components/acternityui/NavbarMenu';
// import ProjectBentoGrid from '../components/acternityui/ProjectBentoGrid';
// import GradientBorderBox from '../components/myui/GradientBorderBox';
// import { ProjectComponent } from './ProjectComponent';
// import TextCarousel from './TextCarousel';

// const ProjectContent: React.FC = () => {
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');
//     const project = projectdata.projects.find(proj => proj.id === id);

//     if (!project) {
//         return <div>Project not found</div>;
//     }

//     return (
//         <div className="max-w-[80vw] mx-auto py-10 space-y-16">
//             <NavMenu srclink={project.Srclink} livelink={project.Livelink} back="/" isActive={project.Active} />
//             {/* <NavMenu srclink={project.Srclink} livelink={project.Livelink} back="/" /> */}
//             <div id="ProjectHero" className="mt-8">
//                 <div id="ProjectContainer" className="w-full max-w-[1296px] mx-auto px-6 sm:px-3">
//                     <div id="HeroGrid" className="xl:flex flex-row-reverse justify-items-center items-center gap-x-6 gap-y-6 grid-rows-[auto] lg:gap-x-12 lg:gap-y-12 lg:grid-cols-[1fr] lg:text-center">
//                         <div id="HeroContent" className="flex max-w-[541px] flex-col items-start mx-auto md:items-center">
//                             <h1 id="PanelHeading" className="mb-6 self-stretch text-3xl lg:text-5xl 2xl:text-6xl text-cyan-300 font-bold text-center lg:text-left">{project.Title}</h1>
//                             <h2 id="DisplayHeading" className="mb-6 text-2xl lg:text-3xl 2xl:text-4xl text-[28px] leading-[30px] font-normal text-center lg:text-left">{project.Description}</h2>
//                         </div>
//                         <Image className="rounded-[6px] md:rounded-[12px] mx-auto md:w-[65vw] lg:w-auto" src={project.Image} alt="ProjectImage" width={500} height={270} />
//                     </div>
//                 </div>
//             </div>
//             {/* <Space /> */}
//             <div id="ProjectComponents" className="w-full  mx-auto px-3 sm:px-6">
//                 <GradientBorderBox>
//                     {project.Problem && (
//                         <div id="Panel" className="flex flex-col justify-between align-items-center bg-[hsla(0,0%,100%,0.09)] rounded-xl md:rounded-md my-6 py-[12px] md:py-[30px] ">
//                             <h2 className="font-bold text-4xl text-cyan-300 text-center mb-2 sm:mb-4">Why?</h2>
//                             <p className="font-light text-center text-xl sm:text-2xl tracking-[-0.02em] ">{project.Problem}</p>
//                         </div>
//                     )}

//                     <div id="GridTwoThird" className="  flex flex-col gap-y-6 xl:grid xl:grid-flow-row xl:gap-x-6 xl:grid-cols-[1.25fr_2fr]">
//                         <div id="Panel1" className="flex flex-col justify-between items-center bg-[hsla(0,0.00%,100.00%,0.09)] rounded-xl">
//                             <div id="Panel1Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto sm:p-2 p-[6px] ">
//                                 <h2 className="font-bold text-4xl text-cyan-300 text-center mb-2 sm:mb-4 rounded-lg p-4  shadow-x bg-black">What?</h2>
//                                 <ProjectComponent technologies={project.Technologies} />
//                             </div>
//                         </div>
//                         <div id="Panel2" className="flex flex-col justify-between items-center bg-[linear-gradient(to_right,#ff715b,#5132c0)] rounded-xl">
//                             <div id="Panel2Body" className="relative z-[1] flex w-full flex-col justify-between items-stretch grow shrink-0 basis-auto mx-auto sm:p-2 p-[6px]">
//                                 <h2 className="font-bold text-4xl text-cyan-300 text-center mb-2 sm:mb-4 rounded-lg bg-black p-4 ">How?</h2>
//                                 <TextCarousel stages={project.Stages} /> {/* Pass the Stages array */}
//                             </div>
//                         </div>
//                     </div>
//                 </GradientBorderBox>
//             </div>
//             <ProjectBentoGrid bentoItems={project.BentoItems} />
//             <div className="bg-black xl:h-[180px]" />

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
