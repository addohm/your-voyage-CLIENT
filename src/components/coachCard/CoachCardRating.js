import React, { useEffect, useState } from 'react';

const CoachCardRating = ({ name, rating, isReadOnly }) => {

    const [_rating, _ratingSet] = useState(0);
    useEffect(() => {
        _ratingSet(rating)
    }, [rating])

    // ! click
    const handleHeartClick = (selectedRating) => {
        if (isReadOnly) return
        _ratingSet(selectedRating);
    };

    // ! hover
    const [heartIndexHovered, heartIndexHoveredSet] = useState(-1);
    const handleHeartHover = (ind) => {
        if (isReadOnly) return
        heartIndexHoveredSet(ind);
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <Heart
                    key={index}
                    index={index}
                    filled={index < _rating}
                    onClick={handleHeartClick}
                    heartIndexHovered={heartIndexHovered}
                    handleHeartHover={handleHeartHover}
                    name={name}
                    rating={_rating}
                />
            ))}
        </div>
    );
};

const Heart = ({ index, filled, onClick, heartIndexHovered, handleHeartHover, name, rating }) => {
    const heartColor = heartIndexHovered >= index || filled ? '#D19B5B' : '#CCCCCC'

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                onClick={() => onClick(index + 1)}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => handleHeartHover(index)}
                onMouseLeave={() => handleHeartHover(-1)}
            >
                <path
                    fill={heartColor}
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
            </svg>
            <input hidden name={name} value={rating} />
        </>
    );
};

export default CoachCardRating;