import { motion } from 'framer-motion';
import React from 'react';

function BubbleGame() {
  return (
    <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#79AC78]'>
      <div className="flex justify-between w-[90vw] pl-24 px-10 py-8">
        <div className="w-1/2">
        <h2 className="px-10 py-10  tracking-tight text-3xl font-normal text-white">
            Bubble Game - Developed a 
            <span style={{ color: '#638889', fontWeight: 'bold' }}> web-based game </span> 
              using HTML, CSS, and JavaScript. 
             Implemented  <span style={{ color: '#51829B', fontWeight: 'bold' }}>  intuitive gameplay </span> mechanics,scoring system, and 
             <span style={{ color: '#80BCBD', fontWeight: 'bold' }}> timer functionality</span>.
             </h2>
          <ul className="list-disc list-inside  text-white mt-8">
            <li className="mb-2">Created a web-based game using HTML, CSS, and JavaScript.</li>
            <li className="mb-2">Implemented intuitive gameplay mechanics, scoring system, and timer functionality.</li>
            <li className="mb-2">Ensured cross-browser compatibility and optimized performance.</li>
          </ul>
          <a href="https://nishantt34.github.io/bubblegame/" className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-300">Visit Game</a>
        </div>
        <motion.div  whileHover={{ scale: 1.1}}
         transition={{ duration: 0.3 }}
         className="w-1/2 flex justify-center ml-32 items-center">
          <img src="./images/game.jpg" alt="Bubble Game" className="w-full max-w-lg rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
}

export default BubbleGame;
