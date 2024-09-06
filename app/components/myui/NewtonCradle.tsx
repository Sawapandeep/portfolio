'use client';

import React, { useEffect } from 'react';
import { newtonsCradle } from 'ldrs';

const NewtonCradle: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Register the custom element only on the client side
            newtonsCradle.register();
        }
    }, []);

    return (
        <>
            {/* Dynamically rendered custom element */}
            {
                typeof window !== 'undefined' && (
                    <l-newtons-cradle size="78" speed="1.4" color="white"></l-newtons-cradle>
                )
            }
        </>
    );
};

export default NewtonCradle;
