import React from 'react'

const MINUTE = 1000 * 60

const ScoreBoxBig = ({ activity, teamA, teamB, scoreA, scoreB, timer = '-' }) => {
    return (
        <div>
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
                        {timer}
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
        </div>
    )
}

export default ScoreBoxBig