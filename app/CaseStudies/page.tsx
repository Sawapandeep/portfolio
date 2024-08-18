"use client"; // Ensure this component is treated as a client component
import projectdata from '@/app/data/projectdata.json';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'; // Import from next/navigation
import React, { Suspense } from 'react';
import { DockBar } from '../components/magicui/DockBar';

const ProjectContent: React.FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); // Get the 'id' parameter from the URL

    // Find the project based on the id from the query parameter
    const project = projectdata.projects.find(proj => proj.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="max-w-[80vw] mx-auto py-10">
            <div id="ProjectHero" className="mt-28 ">
                <div id="ProjectContainer" className="w-full max-w-[1296px] mx-auto px-6 sm:px-3">
                    <div id="HeroGrid" className="justify-items-center items-center gap-x-6 gap-y-6 grid-rows-[auto] md:gap-x-12 md:gap-y-12 md:grid-cols-[1fr] md:text-center sm:flex flex-row-reverse">
                        <div id="HeroContent" className="flex max-w-[541px] flex-col items-start mx-auto md:items-center">
                            <h2 id="PanelHeading" className="mb-6 text-5xl text-cyan-300 font-bold">{project.Title}</h2>
                            <h1 id="DisplayHeading" className="text-7xl leading-[72px] font-bold tracking-[-0.02em] mb-6 md:text-[54px] md:leading-[54px] sm:text-[54px] sm:leading-[54px]">{project.Description}</h1>
                            <button id="HeroButton" className="flex h-[60px] justify-center items-center bg-cyan-300 text-black font-semibold text-center px-9 rounded-br-md rounded-t-md rounded-bl-md hover:shadow-[inset_0_0_20px_20px_hsla(0,0.00%,0.00%,0.10)];">
                                Live
                            </button>
                        </div>
                        <Image className="rounded-[12px] sm:rounded-[6px]" src={project.Image} alt="ProjectImage" width={500} height={270} />
                    </div>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{project.Title}</h1>
            <p className="text-lg mt-4">{project.Description}</p>
            <img src={project.Image} alt={project.Title} className="mt-6 rounded-lg" />
            {/* Add more project details as needed */}
            <DockBar />
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
