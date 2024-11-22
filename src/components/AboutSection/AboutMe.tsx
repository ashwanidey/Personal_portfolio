import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='bg-card flex md:flex-row flex-col gap-6'>
      <div className='md:w-[40%] flex flex-col justify-center items-center'>
        <h1 className="font-poppins font-semibold sm:text-[72px] text-[40px]  sm:leading-[80px] ">
            Hi there!
            <br className="sm:block hidden" /> I am
            Ashwani 
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl mt-5">
          A passionate Software Developer from India, constantly refining his skills and brainstorming the next groundbreaking innovation.
          </p>
          </div>


          <div className='md:w-[60%] flex justify-center'>
          <div className='md:w-[500px]  '>
            <Image
              width={3500}
              height={3500}
              src={'/assets/guy_coding_blank.png'}
              alt = "svg"
              className='w-full object-cover'
            >

            </Image>
          </div>
          </div>
          </div>
  )
}

export default AboutMe