import { motion } from 'framer-motion';
import React from 'react';

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.4"  className='w-full h-screen mt-28'>
      <div className='textstructure bg-gray-100 rounded-3xl mt-30 px-12 '>
      {["I'm Nishant","Kumar"].map((items,index)=>{
      return (
        <div className='masker overflow-hidden'>
        <div className='w-fit flex  items-center'>
        {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.45, 0, 0.55, 1], duration:1}} className=' w-[9vw] h-[5vw] mr-4 rounded-md relative top-[6px] overflow-hidden'>
          <img className='bg-cover' src={"./images/nixx.jpg"} alt="" />
        </motion.div>)}
        <h1 className=' text-9xl h-full font-medium tracking-tighter'>{items}
        </h1>
        </div>
      </div> );
     })}
     </div>
     <div className='px-12 text-4xl mt-4 tracking-normal'>I'm a front-end developer passionate about crafting<br></br>
      immersive online experiences. Let's collaborate and <br></br>
      bring your ideas to life!</div>
      <div className='w-full  border-[1px] mt-14 '></div>
    </div>
)} 

export default Landing;