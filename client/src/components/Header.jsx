import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true); // Show login components/modal
    }
  };

  return (
    <div className='relative overflow-hidden'>
      {/* Random Blue and Yellow Moving Balls */}
      {[...Array(30)].map((_, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${index % 2 === 0 ? 'bg-blue-400' : 'bg-yellow-400'}`}
          style={{
            width: `${Math.random() * 8 + 8}px`,
            height: `${Math.random() * 8 + 8}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ['0%', '-120%'],
            y: ['0%', '120%'],
          }}
          transition={{
            duration: 4 + Math.random() * 2, // Faster motion
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <motion.div
        className='flex flex-col justify-center items-center text-center my-15 relative z-10'
        initial={{ opacity: 0.2, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 shadow-md'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2 }}
        >
          <p>Best text-to-image generator</p>
          <img src={assets.star_icon} alt='' />
        </motion.div>

        <motion.h1
          className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center font-semibold leading-tight'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >
          Turn text to <span className='text-blue-600'>image</span> in seconds.
        </motion.h1>

        <motion.p
          className='text-center max-w-xl mx-auto mt-5 text-gray-600 font-light'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Unleash your creativity with AI. Turn your imagination into visual art in seconds — just type and watch the magic happen.
        </motion.p>

        <motion.button
          onClick={onClickHandler}
          className='cursor-pointer sm:text-lg text-white bg-blue-600 hover:bg-blue-700 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full shadow-lg'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
        >
          Generate Images
          <motion.img className='h-6' src={assets.star_group} alt='' />
        </motion.button>

        <div className='grid grid-cols-3 sm:grid-cols-6 gap-4 mt-8'>
          {[...Array(6)].map((_, index) => (
            <motion.img
              className='rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-20 sm:w-24'
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=''
              key={index}
              whileHover={{ rotate: 3 }}
            />
          ))}
        </div>

        <p className='mt-4 text-neutral-600 text-sm'>Generated images from Imagify</p>
      </motion.div>
    </div>
  );
};

export default Header;
