import React from 'react'
import { RiAddLine, RiEditLine } from 'react-icons/ri'

const TeamCard = () => {
    return (
        <div className='bg-gray-900 p-5 rounded-3xl w-full relative mt-5'>
            <div className='absolute top-[-1rem] right-1/2 translate-x-1/2 uppercase tracking-[5px] font-bold text-primary'>TeamCard</div>
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
                    <tr className='relative'>
                        <td>
                            <button className='absolute top-0 left-[-2rem] p-1 text-gray-900 rounded-full bg-primary bg-opacity-30 hover:bg-opacity-100'>
                                <RiEditLine />
                            </button>
                            Messi
                        </td>
                        <td className='text-center'>10</td>
                        <td>Tienve</td>
                        <td>Best player</td>
                    </tr>
                    <tr className='relative'>
                        <td>
                            <button className='absolute top-0 left-[-2rem] p-1 text-gray-900 rounded-full bg-primary bg-opacity-30 hover:bg-opacity-100'>
                                <RiEditLine />
                            </button>
                            Ronaldo</td>
                        <td className='text-center'>7</td>
                        <td>Tiendao</td>
                        <td>Real best player</td>
                    </tr>
                    <tr className='relative'>
                        <td>
                            <button className='absolute top-0 left-[-2rem] p-1 text-gray-900 rounded-full bg-primary bg-opacity-30 hover:bg-opacity-100'>
                                <RiEditLine />
                            </button>
                            Nguyen Quang Hai</td>
                        <td className='text-center'>18</td>
                        <td>Tienve</td>
                        <td>Lom deo chiu dc</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeamCard