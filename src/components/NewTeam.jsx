import React, { useState } from 'react'
import { RiAddLine, RiEditLine } from 'react-icons/ri'

const NewTeam = () => {

    const players = [
        {
            'name': 'Ronaldo',
            'number': 7,
            'position': 'MT',
            'description': 'top 1'
        },
        {
            'name': 'Messi',
            'number': 10,
            'position': 'MD',
            'description': 'real top 1'
        },
        {
            'name': 'Quang Hai',
            'number': 21,
            'position': 'BB',
            'description': 'lởm vãi'
        }
    ];

    const [selection, setSelection] = useState('')


    return (
        <div className='bg-gray-900 p-5 rounded-3xl w-full relative mt-5'>
            <input type='text' className='absolute top-[-1rem] right-1/2 translate-x-1/2 uppercase tracking-[5px] font-bold text-primary outline-none rounded-lg bg-gray-800 text-center' />
            <div className='absolute top-[-1rem] right-[1rem]'>
                <button className=' p-1 text-gray-900 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100'>
                    <RiAddLine />
                </button>
            </div>
            <div className="grid grid-cols-4">
                <div className='text-bold text-center'>Name</div>
                <div className='text-bold text-center'>Number</div>
                <div className='text-bold text-center'>Position</div>
                <div className='text-bold text-center'>Description</div>
                <select name="name" id="" className='outline-none rounded-lg bg-gray-800 text-center' onChange={() => setSelection(event.target.value)}>
                    {players.map(player => {
                        return (
                            <option value={player.name}>{player.name}</option>
                        )
                    })}
                </select>
                <div className='text-center'>
                    {players.find(it => it.name == selection).number}
                </div>
                <div className='text-center'>
                    {players.find(it => it.name == selection).position}
                </div>
                <div className='text-center'>
                    {players.find(it => it.name == selection).description}
                </div>
            </div>

        </div>
    )
}

export default NewTeam