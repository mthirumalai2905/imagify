import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-100 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form
        className='relative bg-white p-10 rounded-xl text-slate-500'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={assets.cross_icon}
          alt='Close Icon'
          className='absolute top-5 right-5 cursor-pointer'
          onClick={() => setShowLogin(false)}
          whileHover={{ scale: 1.2 }}
        />
        <motion.h1
          className='text-center text-2xl text-neutral-700 font-medium'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {state}
        </motion.h1>
        <motion.p
          className='text-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Welcome back! Please sign in to continue
        </motion.p>

        {state !== 'Login' && (
          <motion.div
            className='border px-10 py-2 flex items-center gap-2 rounded-full mt-4'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <img src={assets.user_icon} alt='' />
            <input
              className='outline-none text-sm'
              type='text'
              placeholder='Full Name'
              required
            />
          </motion.div>
        )}

        <motion.div
          className='border px-10 py-2 flex items-center gap-2 rounded-full mt-4'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <img src={assets.email_icon} alt='Email Icon' />
          <input
            className='outline-none text-sm'
            type='email'
            placeholder='Email id'
            required
          />
        </motion.div>

        <motion.div
          className='border px-10 py-2 flex items-center gap-2 rounded-full mt-4'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img src={assets.lock_icon} alt='Lock Icon' />
          <input
            className='outline-none text-sm'
            type='password'
            placeholder='Password'
            required
          />
        </motion.div>

        <motion.p
          className='text-sm text-blue-600 my-4 cursor-pointer'
          whileHover={{ scale: 1.1 }}
        >
          Forget password?
        </motion.p>

        <motion.button
          className='bg-blue-600 w-full text-white py-2 rounded-full'
          whileHover={{ scale: 1.05 }}
        >
          {state === 'Login' ? 'Login' : 'Create account'}
        </motion.button>

        {state === 'Login' ? (
          <motion.p
            className='mt-5 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Don't have an account?{' '}
            <span
              className='text-blue-600 cursor-pointer'
              onClick={() => setState('SignUp')}
            >
              Sign up
            </span>
          </motion.p>
        ) : (
          <motion.p
            className='mt-5 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Already have an account?{' '}
            <span
              className='text-blue-600 cursor-pointer'
              onClick={() => setState('Login')}
            >
              Login
            </span>
          </motion.p>
        )}
      </motion.form>
    </div>
  );
};

export default Login;
