import React, { useState } from 'react'

const NewTeamLine = () => {

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

    const [selection, setSelection] = useState(players[0].name)



    return (
        <tr>
            <td>
                <select name="name" id="" className='outline-none rounded-lg bg-gray-800 text-center w-full' onChange={() => setSelection(event.target.value)}>
                    {players.map(player => {
                        return (
                            <option key={player.id} value={player.name}>{player.name}</option>
                        )
                    })}
                </select>
            </td>
            <td className='text-center'>
                {players.find(it => it.name == selection).number}
            </td>
            <td className='text-center'>
                {players.find(it => it.name == selection).position}
            </td>
            <td className='text-center'>
                {players.find(it => it.name == selection).description}
            </td>
        </tr>
    )
}

export default NewTeamLine