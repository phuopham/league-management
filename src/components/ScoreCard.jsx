import React from 'react'

const ScoreCard = ({team1, team2, score1, score2}) => {
  return (
    <div className='bg-gray-800 p-5 rounded-3xl w-full min-w-[200px]'>
        <div className='flex justify-between'>
            <div>{team1}</div>
            <div>{score1} - {score2}</div>
            <div>{team2}</div>
        </div>
    </div>
  )
}


export default ScoreCard

