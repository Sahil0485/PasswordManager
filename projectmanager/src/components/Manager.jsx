import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
            <div className="bg-slate-50 max-w-4xl myconatiner">
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-green-700">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-700">Op/&gt;</span>
                </h1>
                <p className='text-green-900 text-center text-lg'>Your own Password Manager</p>
                <div className="text-white flex flex-col p-4 text-black gap-8">
                    <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                    <div className="flex w-full justify-between gap-8">
                    <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                    <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
                    </div>
                    <button>Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager