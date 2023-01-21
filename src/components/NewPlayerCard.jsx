import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import Input from './CustomInput'

const NewPlayerCard = ({ isEdit, onCancelClick }) => {
    return (
        <div className='lg:absolute bottom-0 right-1/2 lg:translate-x-1/2 bg-gray-700 lg:w-3/5 p-5 rounded-xl'>
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
                    {isEdit ? <span>Edit <span className='text-primary'>player</span></span> : <span>Add <span className="text-primary">new</span> </span>}
                </div>
                <div className="absolute top-[-2.45rem] right-0">
                    <button className=' p-1 bg-gray-500 rounded-full text-gray-50' onClick={onCancelClick}><RiArrowGoBackFill /></button>
                </div>
            </div>
        </div>
    )
}

export default NewPlayerCard