import React from 'react';
import { motion } from 'framer-motion';

function Navbarr() {
  return (
    <div>
      <div className='px-10 py-8 flex justify-between items-center'>
        <div className=" brand font-bold text-2xl">
          Nixx.
        </div>
      </div>
      <div className='px-10 py-8 flex justify-end fixed top-0 w-full z-50'>
        <div className='links flex gap-10'>
          <motion.a 
            href="/About"
            className='text-md font-semibold shadow-md px-4 rounded-md' 
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}>
            About
          </motion.a>
          <motion.a 
            href="/Projects"
            className='text-md font-semibold shadow-md px-4 rounded-md' 
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}>
            Work
          </motion.a>
          <motion.a 
            href="/ontact"
            className='text-md font-semibold shadow-md px-4 rounded-md' 
            whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}>
            Contact
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
