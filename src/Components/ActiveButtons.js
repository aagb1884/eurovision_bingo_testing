import React, { useState } from 'react';
import Button from './Button';

const ActiveButtons = ({ handleClick, cardArray, buttonStates }) => {
    

 

    return (
        <div className='active-buttons-wrapper'>
            {buttonStates.map((buttonActive, index) => (
                <Button
                    key={index}
                    index={index}
                    isActive={buttonActive}
                    handleClick={() => handleClick(index)}
                    cliche={cardArray[index]}
                />
            ))}
        </div>
    );
}

export default ActiveButtons;