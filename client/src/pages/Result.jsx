import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(''); // Define state for input

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    // Simulate async task or call API
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div className='relative'>
        <motion.img
          src={image}
          alt='Sample Image'
          className='max-w-sm rounded'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        {loading && (
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 10 }}
          />
        )}
      </div>
      <motion.p
        className={!loading ? 'hidden' : ''}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Loading.....
      </motion.p>

      {!isImageLoaded && (
        <motion.div
          className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <input 
            onChange={e => setInput(e.target.value)} 
            value={input}
            type='text' 
            placeholder='Describe what you want to generate' 
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' 
          />
          <motion.button
            type='submit'
            className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate
          </motion.button>
        </motion.div>
      )}

      {isImageLoaded && (
        <motion.div
          className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.p
            onClick={() => { setIsImageLoaded(false) }}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          > 
            Generate Another
          </motion.p>
          <motion.a
            href={image}
            className='bg-zinc-900 cursor-pointer px-10 py-3 rounded-full'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download
          </motion.a>
        </motion.div>
      )}
    </form>
  );
};

export default Result;
