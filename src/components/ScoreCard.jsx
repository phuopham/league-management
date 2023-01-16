import React from 'react'

const ScoreCard = ({ team1, team2, score1, score2, type, time }) => {
    return (
        <div className='bg-gray-800 p-5 rounded-3xl w-full min-w-[200px] relative mt-5'>
            <div className='flex justify-between'>
                <div className={
                    score1 > score2 ? 'text-primary' :
                        score1 == score2 ? '' : 'text-gray-500'
                }>
                    {team1}
                </div>
                <div>
                    {score1} - {score2}
                </div>
                <div className={
                    score2 > score1 ? 'text-primary' :
                        score1 == score2 ? '' : 'text-gray-500'
                }>{team2}</div>
            </div>
            <div className="absolute top-[-0.75rem] right-1/2 translate-x-1/2 justify-between text-gray-200 bg-gray-700 px-2 py-1 rounded-xl">
                <div className='text-xs'><span className='text-primary'>{type}</span> - {time}</div>
            </div>
        </div>
    )
}


export default ScoreCard

