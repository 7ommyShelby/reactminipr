import React from 'react'
import { Outlet, Link } from 'react-router-dom'


const Home = () => {

    return (

        <div className='w-full h-full'>
            <nav className='px-4 py-2 bg-amber-900 w-full flex justify-evenly'>
                <ul className='w-full flex justify-evenly text-indigo-50'>
                    <li className='cursor-pointer font-bold'><Link to={'/'}>Image Gallery</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'modal'}>Modal</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'todolist'}>ToDo List</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'stopwtch'}>StopWatch</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'chip'}>Chips</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'guess'}>Guessing Game</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'counter'}>Counter</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'accordian'}>Accordian</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'strtrns'}>String Transformer</Link></li>
                    <li className='cursor-pointer font-bold'><Link to={'otp'}>OTP</Link></li>
                </ul>
            </nav>
            {/* <h1 className='text-white'>This is home</h1> */}
            <Outlet />
        </div>
    )
}

export default Home
