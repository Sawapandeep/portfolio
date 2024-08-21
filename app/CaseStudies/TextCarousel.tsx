import React, { Suspense, useEffect, useState } from 'react';

interface TextCarouselProps {
    stages: string[];
}
const TextCarousel: React.FC<TextCarouselProps> = ({ stages }) => {
    const [currentStage, setCurrentStage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStage((prevStage) =>
                prevStage === stages.length - 1 ? 0 : prevStage + 1
            );
        }, 10000);

        return () => clearInterval(interval);
    }, [stages.length]);

    const nextStage = () => {
        setCurrentStage((prevStage) =>
            prevStage === stages.length - 1 ? 0 : prevStage + 1
        );
    };

    const prevStage = () => {
        setCurrentStage((prevStage) =>
            prevStage === 0 ? stages.length - 1 : prevStage - 1
        );
    };

    return (
        <div className="relative h-full w-full rounded-lg bg-black overflow-hidden">
            <div
                className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out  "
                style={{ transform: `translateY(-${currentStage * 100}%)` }}
            >
                {stages.map((stage, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 h-full flex flex-col items-center justify-center p-6"
                    >
                        <h4 className="text-cyan-400 text-xl sm:text-2xl">Stage {index + 1}</h4>
                        <p className="text-white text-lg sm:text-xl text-center">{stage}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={prevStage}
                className="absolute bottom-6 left-4 text-white text-xl"
            >
                ⬆️
            </button>
            <button
                onClick={nextStage}
                className="absolute bottom-6 right-4 text-white text-xl"
            >
                ⬇️
            </button>
        </div>
    );
};
export default TextCarousel;