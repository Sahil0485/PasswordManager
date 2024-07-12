import React from 'react'

const Navbar = () => {
  return (
    <nav  className='bg-slate-800 text-white'>
        <div className="myconatiner flex justify-between items-center px-4 h-12.5 py-5">
        <div className="logo font-bold text-2xl">
            <span className="text-green-700">&lt;</span>
            <span>Pass</span>
            <span className="text-green-700">Op/&gt;</span>
            </div>
        {/* <ul>
            <li  className='flex gap-4'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact Us</a>
            </li>
        </ul> */}
        <button>
          <img className='invert p-5' src="icons/icons8-github-30.png" alt="github" />
        </button>
        </div>
    </nav>
  )
}

export default Navbar