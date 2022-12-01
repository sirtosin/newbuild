import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ connect, handleConnect,logout }) => {
    return (
        <header className='flex items-center p-4 shadow-md h-[100px] w-full px-10'>
            <Link to='/'>
            <div>
                <img src="https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='h-10 w-10 rounded-full object-contain' alt="logo" />
                </div>
            </Link>
            <div className='flex items-center space-x-4 font-bold text-xl ml-auto capitalize cursor-pointer'>
                {connect ? <>
                    <p className=''>accounts</p>
                    <Link to='/request'>
                        <p>make request</p>
                    </Link>
                    <button onClick={logout} className='text-white bg-red-500 rounded p-2 w-max text-sm'>logout</button>
                </>
                    :
                    <button onClick={handleConnect} className='text-white bg-blue-500 rounded p-2 w-max text-sm'>connect</button>}
            </div>

        </header>
    )
}

export default Header
