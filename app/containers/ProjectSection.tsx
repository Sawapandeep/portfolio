// 'use client';
// import Card from '@/app/components/acternityui/Card';
// import data from '@/app/data/data.json';
// import React, { useState } from 'react';

// type Project = {
//     title: string;
//     description: string;
//     Timeline: string;
//     active: boolean;
//     technologies: string[];
//     weblink?: string;
//     srclink?: string;
//     image?: string;
//     video?: string;
// };

// const projects: Project[] = data.projects;

// const ProjectSection: React.FC = () => {
//     const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//     return (
//         <div id='ProjectSection' className="block-content">
//             <div id='ProjectContainer' className="surface-ground px-4 py-8 md:px-6 lg:px-8">
//                 <div id='ProjectCard' className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
//                     {projects.map((project, index) => (
//                         <Card
//                             key={index}
//                             index={index}
//                             hoveredIndex={hoveredIndex}
//                             setHoveredIndex={setHoveredIndex}
//                             {...project}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProjectSection;


// // 'use client';
// // import Card from '@/app/components/acternityui/Card';
// // import data from '@/app/data/data.json';
// // import React from 'react';


// // type Project = {
// //     title: string;
// //     description: string;
// //     Timeline: string;
// //     active: boolean;
// //     technologies: string[];
// //     links: {
// //         type: string;
// //         href: string;
// //     }[];
// //     image?: string;
// //     video?: string;
// // }; const projects: Project[] = data.projects;

// // const ProjectSection: React.FC = () => {
// //     return (
// //         <div className="block-content">
// //             <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
// //                 <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
// //                     {projects.map((project, index) => (
// //                         <Card key={index} {...project} />
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ProjectSection;




// // import React from 'react';
// // import Image from 'next/image';
// // import data from '@/app/data/data.json';

// // interface MediaData {
// //     title: string;
// //     type: string;
// //     size: string;
// //     created: string;
// //     dimensions: string;
// //     resolution: string;
// //     src: string;
// //     alt: string;
// //     mediaType: 'image' | 'video';
// // }

// // const ProjectSection: React.FC = () => {
// //     const { Projects } = data as { Projects: MediaData[] };

// //     return (
// //         <div className="surface-ProjectSection shadow-2 border-round p-3 rounded-lg">
// //             {Projects.map((item, index) => (
// //                 <div key={index} className="border rounded-lg p-3 bg-white">
// //                     {item.mediaType === 'image' ? (
// //                         <Image
// //                             src={item.src}
// //                             alt={item.alt}
// //                             width={600}
// //                             height={400}
// //                             className="mb-3 w-full"
// //                         />
// //                     ) : (
// //                         <video controls className="mb-3 w-full">
// //                             <source src={item.src} type="video/mp4" />
// //                             Your browser does not support the video tag.
// //                         </video>
// //                     )}
// //                     <div className="flex justify-between items-start">
// //                         <div>
// //                             <div className="text-xl font-medium text-900 mb-2">{item.title}</div>
// //                             <p className="mt-0 mb-3 text-600">{item.type} - {item.size}</p>
// //                         </div>
// //                         <button className="p-button p-component p-button-rounded p-button-text p-button-icon-only">
// //                             <span className="p-button-icon pi pi-download"></span>
// //                             <span className="p-button-label">&nbsp;</span>
// //                             <span role="presentation" className="p-ink" style={{ height: '48px', width: '48px' }}></span>
// //                         </button>
// //                     </div>
// //                     <ul className="list-none m-0 p-0">
// //                         <li className="px-0 py-2 flex justify-between items-center border-b border-gray-200">
// //                             <span className="text-600 font-medium text-sm">Created</span>
// //                             <span className="text-900 font-medium text-sm">{item.created}</span>
// //                         </li>
// //                         <li className="px-0 py-2 flex justify-between items-center border-b border-gray-200">
// //                             <span className="text-600 font-medium text-sm">Dimensions</span>
// //                             <span className="text-900 font-medium text-sm">{item.dimensions}</span>
// //                         </li>
// //                         <li className="px-0 py-2 flex justify-between items-center">
// //                             <span className="text-600 font-medium text-sm">Resolution</span>
// //                             <span className="text-900 font-medium text-sm">{item.resolution}</span>
// //                         </li>
// //                     </ul>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default ProjectSection;
