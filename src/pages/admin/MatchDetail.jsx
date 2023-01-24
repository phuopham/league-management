import React from 'react'
import Header from '../../components/Header'
import Timeline from '../../components/Timeline'

const startTime = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ")
const MatchDetail = () => {
    return (
        <div>
            <Header whiteName='Match' greenName='Detail' />
            <Timeline activity={[]} startTime={startTime} />
        </div>
    )
}

export default MatchDetail