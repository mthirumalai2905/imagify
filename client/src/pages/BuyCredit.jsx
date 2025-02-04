import React, { useContext } from 'react';
import { plans } from '../assets/assets';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const BuyCredit = () => {

  const { user } = useContext(AppContext);

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <motion.button
        className='border border-gray-400 px-10 py-2 rounded-full mb-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Plans
      </motion.button>

      <motion.h1
        className='text-center text-3xl font-medium mb-6 sm:mb-10'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Choose the plan
      </motion.h1>

      <motion.div
        className='flex flex-wrap justify-center gap-6 text-left'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={assets.logo_icon} alt='Logo icon' className='mx-auto mb-4' />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>
                ${item.price} / {item.credits}
              </span>
            </p>
            <motion.button
              className='cursor-pointer w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {user ? 'Purchase' : 'Get Started'}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BuyCredit;
