import React from 'react'

const ScoreCard = ({ team1, team2, score1, score2 }) => {
    return (
        <div className='bg-gray-800 p-5 rounded-3xl w-full min-w-[200px]'>
            <div className='flex justify-between'>
                <div className={
                    score1 > score2 ? 'text-primary' : 
                    score1 == score2? '':'text-gray-500'
                }>
                    {team1}
                </div>
                <div>
                    {score1} - {score2}
                </div>
                <div className={
                    score2 > score1 ? 'text-primary' : 
                    score1 == score2? '':'text-gray-500'
                }>{team2}</div>
            </div>
        </div>
    )
}


export default ScoreCard

