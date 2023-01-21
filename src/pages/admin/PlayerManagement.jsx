import React, { useState } from 'react'
import { RiDeleteBin3Line, RiEdit2Fill, RiEdit2Line } from 'react-icons/ri';
import Header from '../../components/Header'
import NewPlayerCard from '../../components/NewPlayerCard'

const PlayerManagement = () => {
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
    const [isEdit, setStateType] = useState(false)
    const onEditClick = (e) => { setStateType(true) }
    const onDeleteClick = () => { console.log('delete') }
    const onCancelClick = () => {
        setStateType(false)
    }
    return (
        <div className='relative h-full'>
            <Header whiteName='Player' greenName='management' />
            <div className='bg-secondary-100 rounded-2xl p-5'>
                <table className='w-full text-center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Team</th>
                            <th>Number</th>
                            <th>Position</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(it => {
                            return (
                                <tr key={it.id}>
                                    <td>{it.name}</td>
                                    <td>{it.name}</td>
                                    <td>{it.number}</td>
                                    <td>{it.position}</td>
                                    <td>{it.description}</td>
                                    <td>
                                        <button className='text-secondary-900 bg-gray-100 p-1 rounded-full' value={it.name} onClick={onEditClick}><RiEdit2Line /></button>
                                        <button className='bg-primary p-1 rounded-full text-secondary-900' value={it.name} onClick={onDeleteClick}><RiDeleteBin3Line /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <NewPlayerCard isEdit={isEdit} onCancelClick={onCancelClick} />
        </div>

    )
}

export default PlayerManagement