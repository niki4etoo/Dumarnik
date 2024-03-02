import { useState, useEffect } from 'react';

import displayTimer from './utilities';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Check if there's a previous timestamp stored in localStorage
        const session = localStorage.getItem('sessionTimer');

        if (session) {
            const startTime = parseInt(session, 10);
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);

            setSeconds(elapsedTime);
        } else {
            // If no previous timer, start a new one
            const startTime = Date.now();
            localStorage.setItem('sessionTimer', startTime.toString());
        }

        // Update the timer every second
        const intervalId = setInterval(() => {

            setSeconds((prevSeconds) => {
                if (prevSeconds >= 10 * 60) { // restart every 10 minutes
                    const startTime = Date.now();
                    localStorage.setItem('sessionTimer', startTime.toString());
                    return 0;
                }

                return prevSeconds + 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className='timer'>{displayTimer(seconds)}</div>
        </div>
    );
};

export default Timer;