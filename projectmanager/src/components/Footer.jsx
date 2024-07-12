import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center items-center bg-slate-800 fixed bottom-0 w-full text-white flex-col'>
            <div className="logo font-bold text-2xl">
                <span className="text-green-700">&lt;</span>
                <span>Pass</span>
                <span className="text-green-700">Op/&gt;</span>
            </div>
            <div>
                Created with the support of codewithharry
            </div>
            
        </div>
    )
}

export default Footer