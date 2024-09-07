import Image from 'next/image';
import { Spotlight } from '../components/acternityui/Spotlight';
import { WavyBackground } from '../components/acternityui/WavyBackground';
import Reality from '@/public/Images/Reality.png';
const TimelineHeader = () => {
    return (
        <WavyBackground>
            <div id="TimelineHeader" className="z-10" >
                <div id="TimelineHeaderContainer" className="w-[90vw] max-w-[1360px] mx-auto">
                    <div id="PaddingContainer" className="py-[120px] max-md:py-[90px]">
                        <div id="TimelineHeaderWrapper" className="max-w-screen-sm text-white text-center mx-auto relative">
                            <div id="MarginHeader" className="drop-shadow-lg" style={{ textShadow: '2px 2px 14px #0c0c0c' }}>
                                {/* Spotlight effect */}
                                {/* <Spotlight className="left-0 md:left-60" fill="cyan" /> */}
                                <h1 id="HeadingTimeline" className="text-white font-medium text-5xl">
                                    Originating My Ideas into Reality
                                </h1>
                                {/* <Image src={Reality} alt="Reality" width={1080} height={100} /> */}
                            </div>
                            <p id="ParagraphTimeline" className="max-md:text-sm+ text-xl font-light"></p>
                        </div>
                    </div>
                </div>
            </div >
        </WavyBackground>

    );
}

export default TimelineHeader;

// import { Spotlight } from '../components/acternityui/Spotlight'
// import WBD from './WBD'

// const TimelineHeader = () => {
//     return (
//         <WBD ><div id="TimelineHeader" className="bg-black z-10">
//             <div id="TimelineHEaderContainer" className="w-[90vw] max-w-[1360px] mx-auto">
//                 <div id="PaddingContainer" className="py-[120px] max-md:py-[90px]">
//                     <div id="TimelineHeaderWrapper" className="max-w-screen-sm text-white text-center mx-auto">
//                         <div id="MarginHeader" className=" bg-black">

//                             <h1 id="HeadingTimeline" className="text-white font-medium text-5xl ">Originating My Ideas into  Reality</h1>
//                         </div>
//                         <p id="ParagraphTimeline" className="max-md:text-sm+ text-xl font-light"></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </WBD>
//     )
// }

// export default TimelineHeader