"use client";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from '@/app/components/acternityui/TextRevealCard';
export default function Promo() {
    return (
        <div className="flex items-center justify-center bg-black h-[30rem] rounded-2xl w-full max-md:w-[70vw] mx-auto">
            <TextRevealCard
                text="You know the business"
                revealText="I know the chemistry "
            >
                {/* @ts-ignore */}


            </TextRevealCard>
        </div>
    );
}
