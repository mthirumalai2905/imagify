import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center my-32'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        How it works
      </motion.h1>
      <motion.p
        className='text-lg text-gray-600 mb-8'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Transform Words Into Stunning Images
      </motion.p>

      <div className='space-y-4 w-full max-w-3xl text-sm'>
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className='flex items-center gap-4 py-4 px-8 rounded-large bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
          >
            <img src={item.icon} alt='' width={40} />
            <div>
              <motion.h2
                className='text-xl font-medium'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                className='text-gray-500'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
