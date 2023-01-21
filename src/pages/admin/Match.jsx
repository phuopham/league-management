import React from 'react'
import Header from '../../components/Header'

const Match = () => {
    return (
        <div>
            <Header whiteName='Start a' greenName='match' />
            <div>
                <h2 className='italic text-xl'>Incomming match</h2>
                <div className='flex gap-8 my-5 pb-5'>
                    <button className='rounded-md bg-primary p-5 opacity-75 hover:opacity-100 text-secondary-100'>
                        <h4 className='font-bold text-lg'>Team1 <span className='font-normal'>vs</span> Team3</h4>
                        <h5 className='italic'>Vòng bảng</h5>
                    </button>
                    <button className='rounded-md bg-primary p-5 opacity-75 hover:opacity-100 text-secondary-100'>
                        <h4 className='font-bold text-lg'>Team1 <span className='font-normal'>vs</span> Team3</h4>
                        <h5 className='italic'>Vòng bảng</h5>
                    </button>
                    <button className='rounded-md bg-primary p-5 opacity-75 hover:opacity-100 text-secondary-100'>
                        <h4 className='font-bold text-lg'>Team1 <span className='font-normal'>vs</span> Team3</h4>
                        <h5 className='italic'>Vòng bảng</h5>
                    </button>
                    <button className='rounded-md bg-primary p-5 opacity-75 hover:opacity-100 text-secondary-100'>
                        <h4 className='font-bold text-lg'>Team1 <span className='font-normal'>vs</span> Team3</h4>
                        <h5 className='italic'>Vòng bảng</h5>
                    </button>
                    <button className='rounded-md bg-primary p-5 opacity-75 hover:opacity-100 text-secondary-100'>
                        <h4 className='font-bold text-lg'>Team1 <span className='font-normal'>vs</span> Team3</h4>
                        <h5 className='italic'>Vòng bảng</h5>
                    </button>
                </div>
            </div>
            <p className='text-end'>Other match</p>
            <div className='flex flex-row-reverse gap-8 my-5'>
                <button className='rounded-md bg-primary p-5 opacity-75 hover:opacity-100 text-secondary-100 font-bold'>
                    Custom match
                </button>
                {/* <button className='rounded-md bg-primary p-5 opacity-75 hover:opacity-100 text-secondary-100 font-bold'>
                    Custom match <span className='font-normal'>(ranked)</span>
                </button> */}
            </div>
        </div>
    )
}

export default Match