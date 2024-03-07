import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section className='w-full p-20 rounded-bl-3xl rounded-br-3xl  bg-[#79AC78]'>
        <h1 className='text-[3vw] font-["Agency_fb"] tracking-tight leading-tight font-semibold '>Welcome to my profile! I'm Nishant, a passionate and driven front end developer<br></br>
         with a keen eye for innovation and a knack for problem-solving. </h1>
         <h1 className='text-[2vw] py-4 tracking-tight leading-tight font-normal'> Below, you'll find more about my background, skills, and aspirations:</h1>
         <div className='border-t-[1px] mt-8 border-zinc-100'></div>
        
         <div className="flex flex-wrap justify-between mt-9">
         <div className="w-full md:w-1/2 px-4">
         <h2 className="text-xl font-bold mb-4 ">Skills</h2>
         <ul className='list-disc'>
          <li className="mb-2">HTML , CSS</li>
          <li className="mb-2">Programming Languages: Java , JavaScript</li>
          <li className="mb-2">Frameworks/Libraries: Tailwind , React.js</li>
        </ul>
         </div>
         <div className="w-full md:w-1/2 px-4">
         <h2 className="text-xl font-bold mb-4">Education</h2>
         <ul>
          <li className="mb-2">Bachelor's in Electronics and Communication , [ Noida Institute of Engineering and Technology ]</li>
          <li className="mb-2">Graduation Year: [2023]</li>
        </ul>
      </div>
    </div>
      <div className='border-t-[1px] mt-8 border-zinc-100'></div>
    <div className=" py-8">

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Aspirations</h2>
        <p>
          I'm excited about the opportunity to bring my skills and expertise to a dynamic organization where I can make a meaningful impact and continue to grow both personally and professionally.
        </p>
      </div>

      <div className="bg-[#344955] text-white rounded p-4">
        <p>
          If you're looking for a dedicated front end developer with a passion for excellence and a drive to succeed, I'd love to connect and explore how we can work together to achieve our goals. Let's build something extraordinary together!
        </p>
      </div>
    </div>

    </div>
  )
}

export default About