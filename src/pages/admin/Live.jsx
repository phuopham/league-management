import React from 'react'
import { useEffect, useMemo, useState } from "react";
import Header from '../../components/Header';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

const Live = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)

    useEffect(() => {
        let interval = null
        if (isActive && isPaused === false) {
            interval = setInterval(
                () => setTime(time + 1000),
                1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [isActive, isPaused, time]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div>
            <div className="flex flex-wrap justify-between items-center mb-10">
                <h1 className="text-4xl uppercase tracking-[5px] font-bold text-white">Match <span className="text-primary">Live</span></h1>
                <div>
                    <span className='uppercase tracking-[5px] text-2xl font-bold'>Team 1</span>
                    {' '}<span>vs</span>{' '}
                    <span className='uppercase tracking-[5px] text-2xl font-bold'>Team 3</span>
                </div>
            </div>
            <div className='flex flex-wrap gap-5 justify-between md:grid md:grid-cols-3'>
                {!isActive ?
                    <button className='uppercase tracking-[5px] font-bold text-xl p-7 bg-primary text-secondary-100 rounded-xl' onClick={handleStart}>Start</button> :
                    <button className='uppercase tracking-[5px] font-bold text-xl p-7 bg-gray-100 text-secondary-100 rounded-xl' onClick={handleReset}>Reset</button>
                }
                <div className="flex timer justify-self-center place-self-center text-3xl font-bold">
                    {Object.entries({
                        Hours: (time / HOUR) % 24,
                        Minutes: (time / MINUTE) % 60,
                        Seconds: (time / SECOND) % 60,
                    }).map(([label, value]) => (
                        <div key={label} className="col-4">
                            <span className='text-primary'>:</span>{`${Math.floor(value)}`.padStart(2, "0")}

                        </div>

                    ))}
                </div>
                {isActive && <button className={'uppercase tracking-[5px] font-bold text-xl p-7 text-secondary-100 rounded-xl ' + (isPaused ? ' bg-primary' : 'bg-gray-50')} onClick={handlePauseResume}>{isPaused ? 'Resume' : 'Pause'}</button>}
            </div>
        </div>
    );
};

export default Live;