'use client';
import { newtonsCradle } from 'ldrs';
import React, { useEffect } from 'react';

const NewtonCradle: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Register the custom element only on the client side
            newtonsCradle.register();
        }
    }, []);

    return (
        <>
            {
                typeof window !== 'undefined' && (
                    <l-newtons-cradle size="78" speed="1.4" color="white" />
                )
            }
        </>
    );
};

export default NewtonCradle;
