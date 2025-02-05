import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-2'>
      <Link to='/'>
        <img src={assets.logo} alt="" className='w-24 sm:w-32 lg:w-40' />
      </Link>

      <div className='flex items-center gap-4'>
        {user ? (
          <div className='flex items-center gap-4 sm:gap-6'>
            <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-3 py-1 cursor-pointer rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-all'>
              <img className='w-4 sm:w-5' src={assets.credit_star} alt='' />
              <span>Credit's left: {credit}</span>
            </button>
            <p className='text-sm sm:text-lg font-semibold'>{user.name}</p>
            <div className='relative group'>
              <img src={assets.profile_icon} className='w-8 sm:w-10 rounded-full drop-shadow cursor-pointer' alt='' />
              <div className='absolute top-12 right-0 z-10 bg-white border shadow-lg rounded-lg text-black py-2 w-24 sm:w-32 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-auto'>
                <ul>
                  <li className='px-3 sm:px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={logout}>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-3 sm:gap-5'>
            <p onClick={() => navigate('/buy')} className='cursor-pointer text-blue-600 hover:underline text-xs sm:text-sm'>Pricing</p>
            <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-3 py-1 sm:px-4 text-xs cursor-pointer sm:text-sm rounded-full hover:bg-zinc-700'>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
