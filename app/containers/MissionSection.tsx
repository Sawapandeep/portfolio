import React from 'react';
import possibility from '@/public/Images/possibility.png';

const MissionSection = () => {
    return (
        <div id='missionSection' className='flex overflow-hidden mb-12 px-7 pb-8 justify-around items-center gap-x-0 gap-y-0'>
            <div id='missionContainer' className='overflow-visible max-w-none order-none pb-0 mx-auto'>
                <div
                    id='missionBlock'
                    className='w-[90vw] h-[700px] bg-cover text-center pt-12 rounded-[30px]'
                    style={{ backgroundImage: `url(${possibility.src})` }}
                >
                    <div id="missionText" className=' w-[510px] mx-auto'>
                        <h1 id="missionHeading" className="self-start grow-0 shrink basis-auto font-semibold text-4xl leading-10">hi. i'm Sawapan</h1>
                        <p id="missionParagrah" className="static overflow-visible self-start grow-0 shrink basis-auto aspect-auto text-center cursor-auto object-contain mt-2.5 font-medium text-xl leading-5">
                            Visioning to craft visually stunning, user-friendly websites that provide unforgettable user experience.
                            Using trusted techniques and deep understanding and user needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;


// import possibility from '@/public/Images/possibility.png';
// const MissionSection = () => {
//     return (
//         <div id='missionSection' className='flex overflow-hidden mb-12 px-7 pb-8 justify-around items-center gap-x-0 gap-y-0' >
//             <div id='missionContainer' className='overflow-visible max-w-none order-none pb-0 mx-auto'>
//                 <div id='missionBlock' className='w-[90vw] h-auto bg-cover  text-center pt-12 rounded-xl' style={{ backgroundImage: possibility }}>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default MissionSection