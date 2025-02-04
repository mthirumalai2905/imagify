import React from 'react';
import { testimonialsData, assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center my-20 py-12'
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
        Customer Testimonials
      </motion.h1>
      <motion.p
        className='text-gray-500 mb-12'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        What Our Users Are Saying
      </motion.p>

      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
          >
            <div className='flex flex-col items-center'>
              <img src={testimonial.image} alt='' className='rounded-full w-14' />
              <h2>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4'>{testimonial.role}</p>
              <div className='flex mb-4'>
                {Array(testimonial.stars).fill().map((_, starIndex) => (
                  <img key={starIndex} src={assets.rating_star} alt='Star' className="w-4 h-4" />
                ))}
              </div>
            </div>
            <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
