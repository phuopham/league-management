import React from 'react'
import Input from './CustomInput'

const NewPlayerCard = ({ type }) => {
    return (
        <div className='absolute bottom-0 right-1/2 translate-x-1/2 translate-y-[2.5rem] bg-gray-700 w-3/5 p-5 rounded-3xl'>
            <div className="relative grid grid-cols-1 2xl:grid-cols-2">
                <div className='w-full'>
                    <Input title='Name' placeholder='name' style='md:text-right' />
                </div>
                <div className='w-full'>
                    <Input title='Position' placeholder='position' style='md:text-right' />
                </div>
                <div className='w-full'>
                    <Input title='Number' placeholder='number' style='md:text-right' />
                </div>
                <div className='w-full'>
                    <Input title='Description' placeholder='description' style='md:text-right' />
                </div>
                <div className="absolute top-[-2.45rem] right-1/2 translate-x-1/2 text-xl uppercase font-bold">
                    {type == 'add' && <span>Add <span className="text-primary">new</span> </span>}
                    {type == 'edit' && <span>Edit <span className='text-primary'>player</span></span>}
                </div>
            </div>
        </div>
    )
}

export default NewPlayerCard