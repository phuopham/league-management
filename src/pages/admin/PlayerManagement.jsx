import React from 'react'
import Header from '../../components/Header'
import NewPlayerCard from '../../components/NewPlayerCard'

const PlayerManagement = () => {
    return (
        <div className='relative h-full'>
            <Header whiteName='Player' greenName='management' />
            Table goes here
            <NewPlayerCard type='edit' />
        </div>

    )
}

export default PlayerManagement