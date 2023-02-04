import React from 'react'
import Header from '../../components/Header'
import RankingTable from '../../components/RankingTable'
import ScoreCard from '../../components/ScoreCard'
import TeamCard from '../../components/TeamCard'

const League = () => {
    return (
        <div>
            <Header whiteName={'League'} greenName={'board'} />
            <div className='grid grid-cols-4 gap-5'>
                <div className='col-start-2 col-end-4'>
                    <ScoreCard type={'final'} time='03/03/2023' team1={'N/A'} team2={'N/A'} />
                </div>
                <div className='col-start-2 col-end-4'>
                    <ScoreCard type={'3rd place'} time='03/03/2023' team1={'N/A'} team2={'N/A'} />
                </div>
                <div className='col-start-1'>
                    <ScoreCard type={'semi-final'} time='03/03/2023' team1={'N/A'} team2={'N/A'} />
                </div>
                <div className=''>
                    <ScoreCard type={'semi-final'} time='03/03/2023' team1={'N/A'} team2={'N/A'} />
                </div>
                <div className=''>
                    <ScoreCard type={'semi-final'} time='03/03/2023' team1={'N/A'} team2={'N/A'} />
                </div>
                <div className=''>
                    <ScoreCard type={'semi-final'} time='03/03/2023' team1={'N/A'} team2={'N/A'} />
                </div>
                <div className='bg-gray-700 p-5 rounded-2xl'>
                    <div className='text-primary uppercase tracking-[5px] font-bold text-center'>Group A</div>
                    <ScoreCard type={'Group A'} time='03/03/2023' team1={'team 1'} team2={'team 2'} />
                    <ScoreCard type={'Group A'} time='03/03/2023' team1={'team 1'} team2={'team 3'} />
                    <ScoreCard type={'Group A'} time='03/03/2023' team1={'team 1'} team2={'team 4'} />
                    <ScoreCard type={'Group A'} time='03/03/2023' team1={'team 2'} team2={'team 3'} />
                    <ScoreCard type={'Group A'} time='03/03/2023' team1={'team 2'} team2={'team 4'} />
                    <ScoreCard type={'Group A'} time='03/03/2023' team1={'team 3'} team2={'team 4'} />
                </div>
                <div className='bg-gray-700 p-5 rounded-2xl'>
                    <div className='text-primary uppercase tracking-[5px] font-bold text-center'>Group B</div>
                    <ScoreCard type={'Group B'} time='03/03/2023' team1={'team 1'} team2={'team 2'} />
                    <ScoreCard type={'Group B'} time='03/03/2023' team1={'team 1'} team2={'team 3'} />
                    <ScoreCard type={'Group B'} time='03/03/2023' team1={'team 1'} team2={'team 4'} />
                    <ScoreCard type={'Group B'} time='03/03/2023' team1={'team 2'} team2={'team 3'} />
                    <ScoreCard type={'Group B'} time='03/03/2023' team1={'team 2'} team2={'team 4'} />
                    <ScoreCard type={'Group B'} time='03/03/2023' team1={'team 3'} team2={'team 4'} />
                </div>
                <div className='bg-gray-700 p-5 rounded-2xl'>
                    <div className='text-primary uppercase tracking-[5px] font-bold text-center'>Group C</div>
                    <ScoreCard type={'Group C'} time='03/03/2023' team1={'team 1'} team2={'team 2'} />
                    <ScoreCard type={'Group C'} time='03/03/2023' team1={'team 1'} team2={'team 3'} />
                    <ScoreCard type={'Group C'} time='03/03/2023' team1={'team 1'} team2={'team 4'} />
                    <ScoreCard type={'Group C'} time='03/03/2023' team1={'team 2'} team2={'team 3'} />
                    <ScoreCard type={'Group C'} time='03/03/2023' team1={'team 2'} team2={'team 4'} />
                    <ScoreCard type={'Group C'} time='03/03/2023' team1={'team 3'} team2={'team 4'} />
                </div>
                <div className='bg-gray-700 p-5 rounded-2xl'>
                    <div className='text-primary uppercase tracking-[5px] font-bold text-center'>Group D</div>
                    <ScoreCard type={'Group D'} time='03/03/2023' team1={'team 1'} team2={'team 2'} />
                    <ScoreCard type={'Group D'} time='03/03/2023' team1={'team 1'} team2={'team 3'} />
                    <ScoreCard type={'Group D'} time='03/03/2023' team1={'team 1'} team2={'team 4'} />
                    <ScoreCard type={'Group D'} time='03/03/2023' team1={'team 2'} team2={'team 3'} />
                    <ScoreCard type={'Group D'} time='03/03/2023' team1={'team 2'} team2={'team 4'} />
                    <ScoreCard type={'Group D'} time='03/03/2023' team1={'team 3'} team2={'team 4'} />
                </div>
            </div>
        </div>
    )
}

export default League