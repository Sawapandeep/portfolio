'use client';

import { newtonsCradle } from 'ldrs';
import React, { useEffect, useState } from 'react';

const NewtonCradle: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
            newtonsCradle.register(); // Register the custom element
        }
    }, []);

    if (!isClient) {
        // Prevent rendering on the server
        return null;
    }

    return (
        <>
            {
                // @ts-ignore
                <l-newtons-cradle size="78" speed="1.4" color="white" />
            }
        </>
    );
};

export default NewtonCradle;
