import React, { useState, useEffect } from 'react';

const Dots = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => (prevDots === '...' ? '' : prevDots + '.'));
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <span className='poa pl5'>{dots}</span>
    );
};

export default Dots;
