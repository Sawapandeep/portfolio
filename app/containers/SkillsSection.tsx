// SkillSection.tsx
// "use client";

import IconCloud from '@/app/components/magicui/IconCloud'; // Adjust the import path if necessary

const SkillSection = () => {
    return (
        <div id='skillSection' className='flex overflow-hidden mb-12 px-7 pb-8 justify-around items-center gap-x-0 gap-y-0'>
            <div id='skillContainer' className='overflow-hidden w-[80vw]  bg-[linear-gradient(144deg,rgba(169,46,196,0.7),rgba(4,21,24,0.7)_43%,rgba(169,46,196,0.7))]  mx-auto py-2.5 px-2.5  rounded-3xl '>
                <h1 id='skillHeading' className='text-xl leading-5 text-center'>My Skills</h1><div id='skillCloud' className='block justify-center items-center content-center  rounded-3xl '><IconCloud />
                </div>
            </div>
        </div>
    );
};

export default SkillSection;



// import IconCloud from '@/app/ui/IconCloud/page'
// import React from 'react'

// const SkillSection = () => {
//     return (
//         <div id='skillSection' className='flex overflow-hidden mb-12 px-7 pb-8 justify-around items-center gap-x-0 gap-y-0'>

//         </div>
//     )
// }

// export default SkillSection