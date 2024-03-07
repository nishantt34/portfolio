import { motion } from 'framer-motion';
import React from 'react'


function Marque() {
  return (
        <div  className='w-full py-14 rounded-tl-3xl rounded-tr-3xl bg-[#040D12] overflow-hidden'>
        <div className='text border-t-[1px] border-b-[1px]  border-zinc-100 flex whitespace-nowrap'>
        <motion.h1 initial={{x:0}}
         animate={{x:'-100%'}}
        transition={{repeat:Infinity,ease:"linear",duration: 7}} 
        className='text-white text-6xl pt-7 pr-10 mb-8 font-normal uppercase font-["Test_Founders_Grotesk_X-Cond_SmBd"] '>Open for full time/remote jobs</motion.h1>

        <motion.h1 initial={{x:0}} 
        animate={{x:'-100%'}} 
        transition={{repeat:Infinity,ease:"linear",duration: 7}}
         className='text-white text-6xl pt-7 pr-10 mb-8  font-normal uppercase font-["Test_Founders_Grotesk_X-Cond_SmBd"]  '>Open for full time/remote jobs</motion.h1>

        <motion.h1 initial={{x:0}} 
        animate={{x:'-100%'}} 
        transition={{repeat:Infinity ,ease:"linear",duration: 7}} 
        className='text-white text-6xl pt-7 pr-10 mb-8 font-normal uppercase font-["Test_Founders_Grotesk_X-Cond_SmBd"]  '>Open for full time/remote jobs</motion.h1>
        
         </div>
        </div>
  );
}

export default Marque ;