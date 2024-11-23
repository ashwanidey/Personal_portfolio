import React from 'react'
import { motion } from "framer-motion"

import { skillSets } from '../../../data/skillsets'
import { BentoBox } from './bento-box'
import { ArrowRight, Code, Image, MessageCircle, Music, Video } from 'lucide-react'
import { SiCplusplus, SiFramework, SiGeeksforgeeks, SiLeetcode, SiMongodb } from "react-icons/si";
import { FaCode, FaGithub, FaJava, FaLinkedinIn, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Button } from '../ui/button'

const skills = [
  
  
  "Strong problem-solving and analytical thinking.",
  "Effective team collaboration and communication skills",
  "Time management and the ability to meet deadlines in high-pressure environments"
  
]



const SkillsSection = () => {
  return (
    <div className="  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured Box */}
          <BentoBox className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl shadow-lg p-6 flex flex-col justify-between space-y-6">
            <div>
            <div className="text-3xl font-bold mb-4 ">Soft Skills</div>
            <div className='space-y-3'>
            {skills.map((skillSet, index) => (
               <div className='flex items-center text-md gap-3' key={index}>
               <FaCode className='max-w-5 min-w-5 max-h-5 min-h-5'/>
                <p className=" ">{skillSet}</p>
                </div>
            ))}
            
            </div>
            </div>

            <div>
            <div className="text-3xl font-bold mb-4 ">Profiles</div>
            <div className='flex  items-center gap-3'>
            <a href=""><SiLeetcode className='w-10 h-10 '/> </a>
            <a href=""><SiGeeksforgeeks  className='w-16 h-16 '/> </a>
            <a href=""><FaGithub  className='w-10 h-10 '/> </a>
            <a href=""><FaLinkedinIn className='w-10 h-10 '/> </a>

              </div>
              </div>
            
          <Button variant="default" className='w-fit'>Resume
            <ArrowRight className='w-6 h-6 ml-2' />
          </Button>
            
            
          </BentoBox>
          
          {/* Code Box */}
          <BentoBox className='space-y-4'>
            <Code className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Programming Languages</h3>
            <div className='flex gap-4 items-center'>
            <FaJava className='w-10 h-10'/> 
            <IoLogoJavascript className='w-10 h-10'/>
            <SiCplusplus className='w-10 h-10'/>
            <FaPython className='w-10 h-10'/>
            </div>
          </BentoBox>
          
          {/* Image Box */}
          <BentoBox className='space-y-4'>
            <SiFramework  className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Framework/Libraries</h3>
            <div className='flex gap-4 items-center'>
            <FaJava className='w-10 h-10'/> 
            <IoLogoJavascript className='w-10 h-10'/>
            <SiCplusplus className='w-10 h-10'/>
            <FaPython className='w-10 h-10'/>
            </div>
          </BentoBox>
          
          {/* Video Box */}
          <BentoBox>
            <Video className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Video Content</h3>
           
            <div className='flex gap-4 items-center'>
            <FaJava className='w-10 h-10'/> 
            <IoLogoJavascript className='w-10 h-10'/>
            <SiCplusplus className='w-10 h-10'/>
            <FaPython className='w-10 h-10'/>
            </div>
          </BentoBox>
          
          {/* Music Box */}
          <BentoBox className="md:col-span-2">
            <Music className="h-8 w-8 text-gray-500 dark:text-gray-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tools</h3>
            
            <div className='flex gap-4 items-center'>
            <FaJava className='w-10 h-10'/> 
            <IoLogoJavascript className='w-10 h-10'/>
            <SiCplusplus className='w-10 h-10'/>
            <FaPython className='w-10 h-10'/>
            </div>
          </BentoBox>
          
          
        </div>
      </div>
    </div>
  )
}

export default SkillsSection