import React from 'react'
import { useRef } from 'react';

const Manager = () => {
    const ref = useRef()
    const showpassword =() => {
        alert("Show the password");
        if(ref.current.src.includes("icons/icons8-hide-30.png")){
            ref.current.src = "icons/icons8-show-30.png"
        }else{
            ref.current.src = "icons/icons8-hide-30.png"
        }
    }

    const savepassword = () => {
        
    }
    
    
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
            <div className="bg-slate-50 max-w-4xl myconatiner">
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-green-700">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-700">Op/&gt;</span>
                </h1>
                <p className='text-green-900 text-center text-lg'>Your own Password Manager</p>
                <div className="text-white flex flex-col p-4 text-black gap-8 items-center">
                    <input className='rounded-full border border-green-500 w-full p-4 py-1' placeholder='Enter Website URL' type="text" name='' id='' />
                    <div className="flex w-full justify-between gap-8 text-black">
                        <input className='rounded-full border border-green-500 w-1/2 p-4 py-1' type="text" placeholder='Enter Username' name='' id='' />
                        <div className="relative">
                        <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" placeholder='Enter Password' name='' id='' />
                        <span className="absolute top-1 right-0 cursor-pointer" onClick={showpassword}>
                            <img className='p-1' ref={ref} width={28} src="icons/icons8-show-30.png" alt="show" />
                        </span>
                        </div>
                    </div>
                    <button onClick={savepassword} className='text-black flex justify-center item-center bg-green-500 rounded-full gap-4 border-2 border-green-900 px-8 py-2 w-fit hover:bg-green-300'><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager