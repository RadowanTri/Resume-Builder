import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const logoutUser =()=>{
        navigate('/')
    }
    const user ={name:'Timerni'}
    return (
        <div>
            <div className='shadow bg-white'>
                <nav className='flex items-center justify-between max-w-7xl px-4 py-3.5 text-state-800 transition-all'>
                    <Link to='/'>
                        <img src="/Resume-Builder/logo.svg" alt="logo" className='h-11 w-auto'/>
                    </Link>
                    <div className='flex items-center justify-center gap-2'>
                        <p className='max-sm:hidden'>Hi {user?.name}</p>
                        <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;