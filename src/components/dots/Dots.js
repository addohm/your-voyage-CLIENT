import React, { useState, useEffect } from 'react';

const Dots = ({ className }) => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => (prevDots === '...' ? '' : prevDots + '.'));
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <span className={`poa pl5 ${className}`}>{dots}</span>
    );
};

export default Dots;
