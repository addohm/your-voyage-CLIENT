import React, { useEffect } from 'react';
import './index.scss';

const MegaphoneText = ({ text }) => {
    useEffect(() => {
        const letters = document.querySelectorAll('.animated-letter');

        letters.forEach((letter, index) => {
            const delay = index * 100; // Adjust the delay as needed
            letter.style.animation = `moveUpDown 1s ${delay}ms infinite`;
        });
    }, []);

    return (
        text &&
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            {Array?.from(text)?.map((char, index) => (
                <span key={index} style={{ display: 'inline-block' }} className="animated-letter">
                    {char}
                    {char === " " && "\u00A0"}
                </span>
            ))}
        </div>
    );
};

export default MegaphoneText;
