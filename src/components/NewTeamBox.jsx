import React, { useState } from 'react'
import { RiAddLine, RiEditLine } from 'react-icons/ri'
import NewTeamLine from './NewTeamLine';

const NewTeamBox = () => {
    return (
        <div className='bg-gray-900 p-5 rounded-3xl w-full relative mt-5'>
            <input type='text' className='absolute top-[-1rem] right-1/2 translate-x-1/2 uppercase tracking-[5px] font-bold text-primary outline-none rounded-lg bg-gray-800 text-center' />
            <div className='absolute top-[-1rem] right-[1rem]'>
                <button className=' p-1 text-gray-900 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100'>
                    <RiAddLine />
                </button>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className='text-bold text-center'>Name</th>
                        <th className='text-bold text-center'>Number</th>
                        <th className='text-bold text-center'>Position</th>
                        <th className='text-bold text-center'>Description</th>

                    </tr>
                </thead>
                <tbody>
                    <NewTeamLine />
                    <NewTeamLine />
                    <NewTeamLine />
                </tbody>
            </table>

        </div>
    )
}

export default NewTeamBox