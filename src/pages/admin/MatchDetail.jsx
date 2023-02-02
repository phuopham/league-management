import React from 'react'
import Header from '../../components/Header'
import ScoreBoxBig from '../../components/ScoreBoxBig'
import Timeline from '../../components/Timeline'

const startTime = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")
const activity = [
    {
        'timestamp': 2689678,
        'player': 'Ronaldo',
        'team': 'Team 1'
    },
    {
        'timestamp': 56575,
        'player': 'Messi',
        'team': 'Team 1'
    },
    {
        'timestamp': 173543,
        'player': 'Cong Phuong',
        'team': 'Team 3'
    },
]
const scoreA = '2'
const scoreB = '1'

const MatchDetail = () => {
    return (
        <div>
            <Header whiteName='Match' greenName='Detail' />
            <ScoreBoxBig activity={activity} teamA='Team 1' scoreA={scoreA} scoreB={scoreB} teamB='Team 3' />
            <Timeline activity={activity} startTime={startTime} />
        </div>
    )
}

export default MatchDetail