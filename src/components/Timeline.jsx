import React from 'react'

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

const Timeline = ({ activity = [], startTime }) => {
    return (
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
    )
}

export default Timeline