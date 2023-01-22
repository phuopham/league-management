import React from 'react'
import { useEffect, useMemo, useState } from "react";
import Header from '../../components/Header';

const SECOND = 1000;
const MINUTE = SECOND * 60;

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

    const [aForPlayer, setAForPlayer] = useState(false)
    const addTeamA = () => {
        setBForPlayer(false)
        setAForPlayer(true)
    }

    const [bForPlayer, setBForPlayer] = useState(false)
    const addTeamB = () => {
        setBForPlayer(true)
        setAForPlayer(false)
    }

    const revert = () => { }

    return (
        <div>
            <h1 className="text-4xl uppercase tracking-[5px] font-bold text-white mb-10">Match <span className="text-primary">Live</span></h1>
            <div className='flex mb-5 uppercase font-xl font-bold tracking-[5px] justify-between'>
                <div className='block md:hidden text-gray-50'>Team 1</div>
                <div className='block md:hidden text-primary'>Team 3</div>
            </div>
            <div className='flex flex-wrap gap-5 justify-between p-5 bg-gray-700 rounded-lg mb-5 text-center '>
                <div className='hidden md:block text-primary text-5xl uppercase tracking-[5px] font-bold'>Team 1</div>
                <div className='grid grid-cols-3 w-full md:w-1/3'>
                    <div>
                        <div className='text-5xl font-bold'>2</div>
                        <div className='font-normal text-sm'><span>5'</span>{' '}<span className='text-primary'>{'Messi Lambogini'.split(' ')[0]}</span></div>
                        <div className='font-normal text-sm'><span>12'</span>{' '}<span className='text-primary'>{'Ronaldo Spagetty'.split(' ')[0]}</span></div>
                    </div>
                    <div className="flex timer justify-self-center p-3 text-3xl font-normal">
                        {Object.entries({
                            Minutes: (time / MINUTE) % 60,
                            Seconds: (time / SECOND) % 60,
                        }).map(([label, value]) => (
                            <div key={label} className="col-4">
                                <span className='text-primary'>:</span>{`${Math.floor(value)}`.padStart(2, "0")}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='text-5xl font-bold'>3</div>
                        <div className='font-normal text-sm'><span>8'</span>{' '}<span className='text-primary'>{'Hai Con'.split(' ')[0]}</span></div>
                        <div className='font-normal text-sm'><span>16'</span>{' '}<span className='text-primary'>{'Linh Tien'.split(' ')[0]}</span></div>
                        <div className='font-normal text-sm'><span>19'</span>{' '}<span className='text-primary'>{'Linh Tien'.split(' ')[0]}</span></div>
                    </div>

                </div>
                <div className='hidden md:block text-primary text-5xl uppercase tracking-[5px] font-bold'>Team 3</div>
            </div>
            <div className='grid grid-cols-2 gap-4 justify-around p-4 bg-gray-700 rounded-lg mb-5'>
                {!isActive ?
                    <button className='uppercase tracking-[5px] font-bold text-xl p-4 bg-primary text-secondary-100 rounded-xl col-start-1 col-end-3' onClick={handleStart}>Start</button> :
                    <button className='uppercase tracking-[5px] font-bold text-xl text-red-500 p-4 bg-gray-100 rounded-xl' onClick={handleReset}>Reset</button>
                }

                {isActive && <button className={'uppercase tracking-[5px] font-bold text-xl p-4 text-secondary-100 rounded-xl ' + (isPaused ? ' bg-primary' : 'bg-gray-50')} onClick={handlePauseResume}>{isPaused ? 'Resume' : 'Pause'}</button>}
            </div>
            <div className='grid grid-cols-2 gap-4 justify-around p-4 bg-gray-700 rounded-lg mb-5'>
                <div>
                    <button className='uppercase font-bold w-full text-xl p-4 text-secondary-100 rounded-xl bg-gray-50' onClick={addTeamA}>+1</button>
                </div>
                <div>
                    <button className='uppercase font-bold w-full text-xl p-4 text-secondary-100 rounded-xl bg-primary' onClick={addTeamB}>+1</button>
                </div>
                <div className='h-10'>
                    {aForPlayer &&
                        <select name="player_id" id="" className='outline-none rounded-lg p-2 bg-gray-800 text-center w-full'>
                            <option>Please select</option>
                            <option value="1">Messi</option>
                            <option value="2">Ronaldo</option>
                            <option value="3">Mbappe</option>
                        </select>
                    }
                </div>
                <div className='h-10'>
                    {bForPlayer &&
                        <select name="player_id" id="" className='outline-none rounded-lg p-2 bg-gray-800 text-center w-full'>
                            <option>Please select</option>
                            <option value="1">Hai Con</option>
                            <option value="2">Hai Que</option>
                            <option value="3">Tien Linh</option>
                        </select>}
                </div>
                <div className='col-start-1 col-end-3'>
                    <button className='uppercase font-bold w-full text-xl p-1 rounded-xl bg-gray-500  text-red-500 opacity-75' onClick={revert}>Revert</button>
                </div>
            </div>
        </div>
    );
};

export default Live;