import React, { useState } from 'react';
import Button from './Button';

const ActiveButtons = ({ setIsBingoButtonActive, cardArray }) => {
    const [buttonStates, setButtonStates] = useState([false, false, false, false, false, false]);

    const handleClick = (index) => {
        const updatedButtonStates = [...buttonStates];
        updatedButtonStates[index] = !updatedButtonStates[index];
        setButtonStates(updatedButtonStates);

        if (updatedButtonStates.every(state => state === true)) {
            setIsBingoButtonActive(true);
        } else {
            setIsBingoButtonActive(false);
        }
    };

    return (
        <div className='active-buttons-wrapper'>
            {buttonStates.map((isActive, index) => (
                <Button
                    key={index}
                    index={index}
                    isActive={isActive}
                    handleClick={() => handleClick(index)}
                    cliche={cardArray[index]}
                />
            ))}
        </div>
    );
}

export default ActiveButtons;