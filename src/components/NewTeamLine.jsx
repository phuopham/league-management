import React, { useState } from 'react'
import { RiAddLine } from 'react-icons/ri';

const NewTeamLine = ({ onClick }) => {

    const players = [
        {
            'id': 1,
            'name': 'Ronaldo',
            'number': 7,
            'position': 'MT',
            'description': 'top 1'
        },
        {
            'id': 2,
            'name': 'Messi',
            'number': 10,
            'position': 'MD',
            'description': 'real top 1'
        },
        {
            'id': 3,
            'name': 'Quang Hai',
            'number': 21,
            'position': 'BB',
            'description': 'lởm vãi'
        }
    ];

    const [selection, setSelection] = useState('')



    return (
        <tr>
            <td>
                <select name="name" id="" className='outline-none rounded-lg bg-gray-800 text-center w-full' onChange={() => setSelection(event.target.value)}>
                    <option value="">Please select</option>
                    {players.map(player => {
                        return (
                            <option key={player.id} value={player.name}>{player.name}</option>
                        )
                    })}
                </select>
            </td>
            <td className='text-center'>
                {players.find(it => it.name == selection)?.number}
            </td>
            <td className='text-center'>
                {players.find(it => it.name == selection)?.position}
            </td>
            <td className='text-center relative'>
                {players.find(it => it.name == selection)?.description}
                <button className=' absolute bottom-1/2 translate-y-1/2 right-[-2rem] p-1 text-gray-900 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100' onClick={onClick}>
                    <RiAddLine />
                </button>
            </td>
        </tr>
    )
}

export default NewTeamLine