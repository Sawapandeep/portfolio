"use client";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from '@/app/components/acternityui/TextRevealCard';
export default function Promo() {
    return (
        <div className="flex items-center justify-center bg-black h-[30rem] rounded-2xl w-full">
            <TextRevealCard
                text="You know the business"
                revealText="I know the chemistry "
            >
                {/* @ts-ignore */}

                <TextRevealCardTitle>
                </TextRevealCardTitle>
                {/* @ts-ignore */}
                <TextRevealCardDescription>

                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
