import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // Ensure this import matches your actual context file

const GenerateBtn = () => {

  const { user, setShowLogin } = useContext(AppContext); // Assuming AppContext provides user
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/result'); // Navigate to result if user is logged in
    } else {
      setShowLogin(true); // Show login modal if user is not logged in
    }
  };

  return (
    <div className='pb-16 text-center'>
      <motion.h1
        className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        See the magic, Try Now
      </motion.h1>

      <motion.button
        onClick={onClickHandler} // Add onClick handler
        className=' cursor-pointer inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Generate images
        <img className='h-6' src={assets.star_group} alt='' />
      </motion.button>
    </div>
  );
};

export default GenerateBtn;
