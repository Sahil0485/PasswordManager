import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()

    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordarray, setpasswordarray] = useState([])

    const getpassword = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        setpasswordarray(JSON.parse(passwords))
        console.log(password)
    }
    

    useEffect(() => {
        // let passwords = localStorage.getItem("passwords");
        // if (passwords) {
        // setpasswordarray(JSON.parse(passwords))
        // }
    }, [])


    const showpassword = () => {
        passwordref.current.type = "text"
        if (ref.current.src.includes("icons/icons8-hide-30.png")) {
            passwordref.current.type = "text"
            ref.current.src = "icons/icons8-show-30.png"
        } else {
            passwordref.current.type = "password"
            ref.current.src = "icons/icons8-hide-30.png"
        }
    }

    const savepassword = async () => {
        if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3){
        setpasswordarray([...passwordarray, form])
        let res = await fetch("http://localhost:3000/", {method: "POST", header: {"content-type": "application/json"}, body: JSON.stringify({...passwordarray, form}) })
        // localStorage.setItem("passwords", JSON.stringify([...passwordarray, form]))
        // console.log([...passwordarray, form])
        }else{
            alert("Enter correct information")
        }
    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copytext = (text) => {
        toast('copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
            <div className="bg-slate-50 max-w-4xl p-2 md:p-0 md:myconatiner min-h-[77.6vh]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-green-700">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-700">Op/&gt;</span>
                </h1>
                <p className='text-green-900 text-center text-lg'>Your own Password Manager</p>
                <div className="text-black flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handlechange} className='rounded-full border border-green-500 w-full p-4 py-1' placeholder='Enter Website URL' type="text" name='site' id='' />
                    <div className="flex w-full flex-col md:flex-row justify-between gap-8 text-black">
                        <input value={form.username} onChange={handlechange} className='rounded-full border border-green-500 w-full p-4 py-1' type="text" placeholder='Enter Username' name='username' id='' />
                        <div className="relative">
                            <input ref={passwordref} value={form.password} onChange={handlechange} className='rounded-full border border-green-500 w-full p-4 py-1' type="password" placeholder='Enter Password' name='password' id='' />
                            <span className="absolute top-1 right-3.5 cursor-pointer" onClick={showpassword}>
                                <img className='p-1' ref={ref} width={28} src="icons/icons8-show-30.png" alt="show" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savepassword} className='text-black flex justify-center item-center bg-green-500 rounded-full gap-4 border-2 border-green-900 px-8 py-2 w-fit hover:bg-green-300'><lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>Add Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bole text-2xl py-4'>Your Passwords</h2>
                    {passwordarray.length === 0 && <div>No password to show</div>}
                    {passwordarray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordarray.map((item, index) => {

                                    return <tr key={index}>
                                        <td className='text-center py-2 border-white w-32'><a href="{item.site}" target='_blank'>{item.site}</a><button onClick={() => { copytext(item.site) }}>copy</button></td>
                                        <td className='text-center py-2 border-white w-32'>{item.username} <button onClick={() => { copytext(item.username) }}>copy</button></td>
                                        <td className='text-center py-2 border-white w-32'>{"*".repeat(item.password.length)} <button onClick={() => { copytext(item.password) }}>copy</button></td>
                                        <td className='text-center py-2 border-white w-32'>Edit / Delete</td>
                                    </tr>
                                    _
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager