// // SkillSection.tsx
// "use client";

// import { cn } from "@/app/lib/utils";
// import IconCloud from '@/app/components/magicui/IconCloud'; // Adjust the import path if necessary
// import DotPattern, { getDotPatternDataUrl } from "@/app/components/magicui/DotPattern";

// const SkillSection = () => {
//     return (
//         <div id='skillSection' className='flex overflow-hidden mb-12 px-7 pb-8 justify-around items-center gap-x-0 gap-y-0'>
//             <div id='skillContainer' className='overflow-hidden w-[80vw] bg-[linear-gradient(144deg,rgba(169,46,196,0.7),rgba(4,21,24,0.7)_43%,rgba(169,46,196,0.7))] mx-auto py-2.5 px-2.5 rounded-3xl'>
//                 <h1 id='skillHeading' className='text-xl leading-5 text-center'>My Skills</h1>
//                 <div
//                     id='skillCloud'
//                     className='block justify-center items-center content-center rounded-3xl'
//                     style={{
//                         backgroundImage: `url(${getDotPatternDataUrl({
//                             width: 15,
//                             height: 15,
//                             cx: 1,
//                             cy: 1,
//                             cr: 1,
//                             fill: "azure",
//                         })})`,
//                         backgroundSize: "cover",
//                     }}
//                 >
//                     <IconCloud />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SkillSection;

//!v2
// SkillSection.tsx

import IconCloud from '@/app/components/magicui/IconCloud'; // Adjust the import 

const SkillSection = () => {
    return (

        <div id='skillSection' className='flex overflow-hidden mb-12 px-7 pb-8 justify-around items-center gap-x-0 gap-y-0'>

            <div id='skillContainer' className='overflow-hidden w-[80vw]  bg-[linear-gradient(144deg,rgba(169,46,196,0.7),rgba(4,21,24,0.7)_43%,rgba(169,46,196,0.7))]  mx-auto py-2.5 px-2.5  rounded-[30px] '>
                <h1 id='skillHeading' className='text-xl leading-5 text-center'>My Skills</h1>
                <div id='skillCloud' className='block justify-center items-center content-center rounded-3xl ba' >

                    <IconCloud />

                </div>

            </div>
        </div >
    );
};

export default SkillSection;

//!v1


// import IconCloud from '@/app/ui/IconCloud/page'
// import React from 'react'

// const SkillSection = () => {
//     return (
//         <div id='skillSection' className='flex overflow-hidden mb-12 px-7 pb-8 justify-around items-center gap-x-0 gap-y-0'>

//         </div>
//     )
// }

// export default SkillSection