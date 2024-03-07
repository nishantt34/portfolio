import { motion } from 'framer-motion';
import React from 'react';

function Projects() {
  return (
    <div data-scroll data-scroll-section className="w-full py-20 rounded-3xl  h-screen flex justify-center items-center dark:bg-neutral-900 bg-[#040D12]">
      <div className='max-w-4xl px-10 border-b-[1px] border-zinc-900 pb-8'>
        <h1 className='text-6xl pt-20 font-semibold text-white '>
          Featured Projects
        </h1>
        <h2 className='px-10 py-10 border-t-[1px] mt-7 border-zinc-900 tracking-tight text-3xl font-normal text-white'>
          Travel - The Travel Website is a 
          <span style={{ color:'#79AC78', fontWeight: 'bold' }}> captivating </span> 
          online platform designed to showcase various travel destinations and provide essential information to potential travelers. 
          <span style={{ color: '#51829B', fontWeight: 'bold' }}> Featuring beautiful imagery </span> 
          and engaging content, this website serves as an 
          <span style={{ color: '#80BCBD', fontWeight: 'bold' }}> inspiration for wanderlust </span> 
          and exploration.
        </h2>
        <div className='pb-12'>
        <ul className="list-disc list-inside text-white">
          <li className="mb-2">Developed and deployed a travel website using HTML, CSS, and JavaScript.</li>
          <li className="mb-2">Integrated smooth scrolling and image sliders, contributing to a 30% increase in user interaction and engagement.</li>
          <li className="mb-2">Employed performance optimization techniques, leading to a loading time reduction of 40%, enhancing user experience.</li>
          <li className="mb-2">Utilized clean code structure and efficient web technologies, resulting in maintainability.</li>
        </ul>
        </div>
        <a href="https://nishantt34.github.io/travelwebsite/" className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-300">Visit Website</a>
      </div>
      <motion.div  whileHover={{ scale: 1.1}}
       transition={{ duration: 0.3 }}
       className="max-w-md flex-grow">
        <img src="./images/travel.jpg" alt="" className="w-full max-w-2xl rounded-lg shadow-lg" />
      </motion.div>
    </div>
  );
}

export default Projects;
