import React from 'react'
import Input from './ProfileInput'

const NewPlayerCard = () => {
    return (
        <div className='absolute bottom-0 right-1/2 translate-x-1/2 translate-y-[2.5rem] bg-gray-700 w-3/5 p-5 rounded-3xl'>
            <div className="relative">
                <div className="flex flex-wrap justify-between gap-5">
                    <div className='w-full'>
                        <Input title='Name' placeholder='name' />
                    </div>
                    <div className='w-full'>
                        <Input title='Position' placeholder='position' />
                    </div>
                    <div className='w-full'>
                        <Input title='Number' placeholder='number' />
                    </div>
                    <div className='w-full'>
                        <Input title='Description' placeholder='description' />
                    </div>
                </div>
                <div className="absolute top-[-2.45rem] right-1/2 translate-x-1/2 text-xl uppercase font-bold">Add <span className="text-primary">new</span></div>
            </div>
        </div>
    )
}

export default NewPlayerCard