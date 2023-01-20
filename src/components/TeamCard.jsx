import React from 'react'
import { RiAddLine, RiEditLine } from 'react-icons/ri'

const TeamCard = ({ name, onClick }) => {
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
    return (
        <div className='bg-gray-900 p-5 rounded-3xl w-full relative mt-5'>
            <div className='absolute top-[-1rem] right-1/2 translate-x-1/2 uppercase tracking-[5px] font-bold text-primary'>{name}</div>
            <div className='absolute top-[-1rem] right-[1rem]'>
                <button className=' p-1 text-gray-900 rounded-full mr-1 bg-primary bg-opacity-30 hover:bg-opacity-100'>
                    <RiEditLine />
                </button>
                <button className=' p-1 text-gray-900 rounded-full bg-white bg-opacity-30 hover:bg-opacity-100'>
                    <RiAddLine />
                </button>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Position</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(it => {
                        return (
                            <tr className='relative'>
                                <td>
                                    {it.name}
                                </td>
                                <td className='text-center'>{it.number}</td>
                                <td className='text-center'>{it.position}</td>
                                <td>{it.description}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default TeamCard