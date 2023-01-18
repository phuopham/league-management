import React from 'react'

function ProfileInput({ title, value, placeholder, isRequired = false, style = "" }) {
    return (
        <div className="md:flex md:items-center mb-8">
            <div className={"py-2 mr-2 " + style}>
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

export default ProfileInput