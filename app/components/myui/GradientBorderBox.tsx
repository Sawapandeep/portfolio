import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientBorderBoxProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}

const GradientBorderBox: React.FC<GradientBorderBoxProps> = ({
    children,
    className,
    containerClassName,
    animate = true,
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0 50%", "100% 50%", "0 50%"],
        },
    };

    return (
        <div className={`relative p-[4px] group  ${containerClassName}`}>
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={`absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]`}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={`absolute inset-0 rounded-3xl z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]`}
            />

            <div className={`relative z-10 p-6 bg-black rounded-3xl ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default GradientBorderBox;

// // components/myui/GradientBorderBox.tsx
// import React, { ReactNode } from 'react';

// interface GradientBorderBoxProps {
//     children: ReactNode;
// }

// const GradientBorderBox: React.FC<GradientBorderBoxProps> = ({ children }) => {
//     return (
//         <div className="relative p-1 rounded-lg">
//             <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient border-4 border-transparent"></div>
//             <div className="relative p-6 bg-black rounded-lg">
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default GradientBorderBox;
