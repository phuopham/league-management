import React from 'react'

function CustomInput({ title, value, placeholder, isRequired = false, style = "" }) {
    return (
        <div className="md:flex md:items-center md:my-1">
            <div className={"py-2 mr-2 w-1/5 " + style}>
                <p>
                    {title}
                    {isRequired && <span className="text-red-500">*</span>}
                </p>
            </div>
            <div className="flex-1">
                <input
                    type="text"
                    className="w-full min-w-[15rem] py-2 px-4 outline-none rounded-lg bg-secondary-900"
                    placeholder={placeholder}
                    value={value}
                />
            </div>
        </div>
    )
}

export default CustomInput