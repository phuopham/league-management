import React from 'react'

function Input({title, value, placeholder, isRequired = false}) {
    return (
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
                <p>
                    {title}
                    {isRequired && <span className="text-red-500">*</span>} 
                </p>
            </div>
            <div className="flex-1">
                <input
                    type="text"
                    className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                    placeholder={placeholder}
                    value={value}
                />
            </div>
        </div>
    )
}

export default Input