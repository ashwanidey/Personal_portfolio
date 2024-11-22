import React from 'react'

const Education = () => {
  return (
    <div className='space-y-4'>
         <h1 className="flex-1 font-poppins font-semibold sm:text-[50px] text-[30px]  sm:leading-[80px] ">
            Education
          </h1>
        <div className=" gap-8  font-poppins grid md:grid-cols-2">
         
           <div className="flex items-start gap-4 dark:bg-zinc-900 bg-zinc-200 p-5 rounded-lg shadow-lg">
        
        <div className="space-y-2">
          <h3 className="dark:text-white md:text-2xl text-lg font-semibold">
            Lovely Professional University, Punjab
          </h3>
         
          <p className="">August 2022 - May 2026</p>
          <h4 className="text-lg font-medium ">Bachelor of Technology</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li >• Major: Computer Science Engineering</li>
            <li>• Minor: Full Stack Development</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start  gap-4  dark:bg-zinc-900 bg-zinc-200 p-5 rounded-lg shadow-lg ">
       
        <div className="space-y-2">
          <h3 className="dark:text-white md:text-2xl text-lg  font-semibold">
            St. Mary's Public School, Delhi 
          </h3>
          <p className="">May 2024 - June 2024</p>
          <p className=" text-muted-foreground">
            • Graduated with an impressive 92% in the Science stream, showcasing a strong academic foundation and dedication to excellence.
          </p>
        </div>
      </div>
    </div>
        </div>
  )
}

export default Education