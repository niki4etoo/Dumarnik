import React, { useState, useEffect } from 'react';

import './timer.css';

interface TimerProps {
    session: number;
}

const Timer: React.FC<TimerProps> = ( props: TimerProps ) => {

    const [seconds, setSeconds] = useState<number>(props.session);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prevSeconds) => prevSeconds - 1);
            } else {
                clearInterval(intervalId); // Stop the timer when seconds reach 0
            }
        }, 1000);

        return () => {
            clearInterval(intervalId); // Clear the interval on component unmount
        };
    }, [seconds]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };
    return (
        <>
            <div className='timer'>
                <h1>{formatTime(seconds)}</h1>
            </div>
        </>
    )
}

export default Timer;