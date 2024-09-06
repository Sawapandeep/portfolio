"use client";
import { WavyBackground } from "@/app/components/acternityui/WavyBackground";

export default function WBD({ children }: { children: React.ReactNode }) {
    return (
        <WavyBackground className="bg-black">
            {children}  {/* Renders the passed children here */}
        </WavyBackground>
    );
}

// "use client";
// import { WavyBackground } from "@/app/components/acternityui/WavyBackground";

// export default function WBD() {
//     return (
//         <WavyBackground className="max-w-4xl mx-auto pb-40">
//             {/* <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
//                 Hero waves are cool
//             </p>
//             <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
//                 Leverage the power of canvas to create a beautiful hero section
//             </p> */}
//         </WavyBackground>
//     );
// }
