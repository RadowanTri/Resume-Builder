import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const logoutUser = () => {
        logout();
        navigate('/login', { replace: true });
    };

    return (
        <div>
            <div className='shadow bg-white'>
                <nav className='flex items-center justify-between max-w-7xl px-4 py-3.5 text-slate-800 transition-all'>
                    <Link to='/'>
                        <img src="/Resume-Builder/logo.svg" alt="logo" className='h-16 w-auto'/>
                    </Link>
                    <div className='flex items-center justify-center gap-2'>
                        {user ? (
                            <>
                                <p className='max-sm:hidden'>Hi {user.name}</p>
                                <button 
                                    onClick={logoutUser} 
                                    className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link 
                                to="/login" 
                                className='bg-green-500 hover:bg-green-600 text-white px-7 py-1.5 rounded-full active:scale-95 transition-all'
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
