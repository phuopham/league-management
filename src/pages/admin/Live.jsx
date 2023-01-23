import React from 'react'
import { useEffect, useMemo, useState } from "react";
import Header from '../../components/Header';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

const Live = () => {

    const [time, setTime] = useState(0);
    const [timestamp, setTimestamp] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [teamA, setTeamA] = useState('Team 1')
    const [teamB, setTeamB] = useState('Team 3')
    const [scoreA, setScoreA] = useState(0)
    const [scoreB, setScoreB] = useState(0)
    const [activity, setActivity] = useState([])
    const [startTime, setStartTime] = useState('')

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
        setStartTime((new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "))
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
        setActivity([])
    };

    const handleCancel = () => {
        setAForPlayer(false)
        setBForPlayer(false)
    }

    const handleActivityA = () => {
        setActivity([...activity, {
            'timestamp': timestamp,
            'player': event.target.value,
            'team': teamA
        }])
        setScoreA(scoreA + 1)
        setAForPlayer(false)
    }

    const handleActivityB = () => {
        setActivity([...activity, {
            'timestamp': time,
            'player': event.target.value,
            'team': 'Team 3'
        }])
        setScoreB(scoreB + 1)
        setBForPlayer(false)
    }

    const [aForPlayer, setAForPlayer] = useState(false)
    const addTeamA = () => {
        setBForPlayer(false)
        setAForPlayer(true)
        setTimestamp(time)
    }

    const [bForPlayer, setBForPlayer] = useState(false)
    const addTeamB = () => {
        setAForPlayer(false)
        setBForPlayer(true)
        setTimestamp(time)
    }

    const handleEnd = () => { }

    const revert = () => {
        //display a warning. if confirm,
        //call the last record and delete it
    }

    return (
        <div>
            <h1 className="text-4xl uppercase tracking-[5px] font-bold text-white mb-10">Match <span className="text-primary">Live</span></h1>
            <div className='flex mb-5 uppercase font-xl font-bold tracking-[5px] justify-between'>
                <div className='block md:hidden text-gray-50'>{teamA}</div>
                <div className='block md:hidden text-primary'>{teamB}</div>
            </div>
            <div className='flex flex-wrap gap-5 justify-between p-5 bg-gray-700 rounded-lg mb-5 text-center '>
                <div className='hidden md:block text-primary text-5xl uppercase tracking-[5px] font-bold'>{teamA}</div>
                <div className='grid grid-cols-3 w-full md:w-1/3'>
                    <div>
                        <div className='text-5xl font-bold'>{scoreA}</div>
                        {activity.filter(it => it.team == teamA).map(it => {
                            return (<div className='font-normal text-sm' key={it.timestamp}>
                                <span>{`${Math.floor(it.timestamp / MINUTE % 60)}`.padStart(2, "0")}'</span>{' '}<span className='text-primary'>{it.player.split(' ')[0]}</span>
                            </div>
                            )
                        })}
                    </div>
                    <div className="flex timer justify-self-center p-3 text-3xl font-normal">
                        {Object.entries({
                            Minutes: (time / MINUTE) % 60,
                            Seconds: (time / SECOND) % 60,
                        }).map(([label, value]) => (
                            <span key={label}>
                                <span className='text-primary'>:</span>{`${Math.floor(value)}`.padStart(2, "0")}
                            </span>
                        ))}
                    </div>
                    <div>
                        <div className='text-5xl font-bold'>{scoreB}</div>
                        {activity.filter(it => it.team == teamB).map(it => {
                            return (<div className='font-normal text-sm' key={it.timestamp}>
                                <span>{`${Math.floor(it.timestamp / MINUTE % 60)}`.padStart(2, "0")}'</span>{' '}<span className='text-primary'>{it.player.split(' ')[0]}</span>
                            </div>
                            )
                        })}
                    </div>

                </div>
                <div className='hidden md:block text-primary text-5xl uppercase tracking-[5px] font-bold'>{teamB}</div>
            </div>
            {isActive && <div className='grid grid-cols-2 gap-4 justify-around p-4 bg-gray-700 rounded-lg mb-5'>
                <div>
                    <button className='uppercase font-bold w-full text-xl p-4 text-secondary-100 rounded-xl bg-gray-50' onClick={addTeamA}>+1</button>
                </div>
                <div>
                    <button className='uppercase font-bold w-full text-xl p-4 text-secondary-100 rounded-xl bg-primary' onClick={addTeamB}>+1</button>
                </div>
                {aForPlayer &&
                    <div className='md:flex'>
                        <select name="player_id" id="" onChange={handleActivityA} className='outline-none rounded-lg p-2 bg-gray-800 text-center w-full mb-2 md:mb-0'>
                            <option>Please select</option>
                            <option value="Messi">Messi</option>
                            <option value="Ronaldo">Ronaldo</option>
                            <option value="Mbappe">Mbappe</option>
                        </select>
                        <button className='w-full md:w-fit bg-gray-400 rounded-md text-secondary-100 px-2 md:ml-2' onClick={handleCancel}>Cancel</button>
                    </div>
                }
                {bForPlayer &&
                    <div className='md:flex col-start-2'>
                        <select name="player_id" id="" onChange={handleActivityB} className='outline-none rounded-lg p-2 bg-gray-800 text-center w-full mb-2 md:mb-0'>
                            <option>Please select</option>
                            <option value="Hai Con">Hai Con</option>
                            <option value="Hai Que">Hai Que</option>
                            <option value="Tien Linh">Tien Linh</option>
                        </select>
                        <button className='w-full md:w-fit bg-gray-400 rounded-md text-secondary-100 px-2 md:ml-2' onClick={handleCancel}>Cancel</button>
                    </div>
                }
                <div className='col-start-1 col-end-3'>
                    <button className='uppercase font-bold w-full text-xl p-1 rounded-xl bg-gray-500  text-red-500 opacity-75' onClick={revert}>Revert</button>
                </div>
            </div>}
            {
                isActive &&
                <div className='p-4 bg-gray-700 rounded-lg mb-5'>
                    <div className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100'>
                        <span className='text-primary'>
                            {startTime}
                        </span> Game Start
                    </div>
                    {activity != [] &&
                        activity.map(it => {
                            return (
                                <div className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1./2 before:border-4 before:border-secondary-100 text-primary' key={it.timestamp}>
                                    <span>{`${Math.floor(it.timestamp / MINUTE % 60)}`.padStart(2, "0")}</span>
                                    <span>:</span>
                                    <span>{`${Math.floor(it.timestamp / SECOND % 60)}`.padStart(2, "0")}</span>
                                    {' '}
                                    <span className='text-gray-300'>{it.player} score</span>
                                    {/* <span className='text-primary'>05:00</span> Son Huynh Min score */}
                                </div>
                            )
                        })
                    }



                </div>
            }
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 justify-around p-4 bg-gray-700 rounded-lg mb-5'>
                {!isActive ?
                    <button className='uppercase tracking-[5px] font-bold text-xl p-4 bg-primary text-secondary-100 rounded-xl col-start-1 col-end-4' onClick={handleStart}>Start</button> :
                    <button className='uppercase tracking-[5px] font-bold text-xl text-red-500 p-4 bg-gray-100 rounded-xl' onClick={handleReset}>Reset</button>
                }

                {isActive && <button className={'uppercase tracking-[5px] font-bold text-xl p-4 text-secondary-100 rounded-xl ' + (isPaused ? ' bg-primary' : 'bg-gray-50')} onClick={handlePauseResume}>{isPaused ? 'Resume' : 'Pause'}</button>}
                {isActive && <button className='uppercase tracking-[5px] font-bold text-xl text-secondary-100 p-4 bg-primary rounded-xl col-start-1 col-end-3 md:col-auto md:col-start-auto md:col-end-auto' onClick={handleEnd}>End</button>

                }
            </div>


        </div >
    );
};

export default Live;