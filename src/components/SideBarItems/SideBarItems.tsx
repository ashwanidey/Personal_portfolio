'use client'
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Boxes, ChevronDown, ChevronUp, Folder, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { mainEndpoints, subEndpoints } from '../../../data/data-endpoints'


const SideBarItems = (props : TopBarProps) => {


  const [isOpen, setIsOpen] = useState(false)

  const handleSubEndpoint = (value : string) => {
    props.setSubDomain(value);
    props.setMainEndpoint('projects')
  }
  
  

  
  return (
    <div className='space-y-4'>
    
    <div className='flex pointer' onClick={() =>props.setMainEndpoint("about-me")}>
    <Boxes  className="mr-2 h-5 w-5"/>About Me
    </div>
    
    <Collapsible className='space-y-2 '>
    <CollapsibleTrigger className='flex items-center w-full justify-between' onClick={() => {
      setIsOpen(prev=>!prev)
      props.setMainEndpoint("projects")
    }}>
    <div className='flex'>
    <Boxes  className="mr-2 h-5 w-5"/>Projects
    </div>
    {!isOpen ? <ChevronDown />: <ChevronUp />}
    </CollapsibleTrigger>
    <CollapsibleContent className='ml-6 space-y-2'>
      {
        subEndpoints.map((data) => (
          <Button variant = "outline" className="w-full rounded-md border px-4 py-2  text-sm shadow-sm flex justify-start " onClick={()=>handleSubEndpoint(data.value)} key={data.value}>
        <span className='dark:text-green-400 text-green-600  text-[12px]'>GET</span>
        <span className=''>{data.value}</span>          
      </Button>
        ))

      }
      
    </CollapsibleContent>
  </Collapsible>
  </div>
  )
}

export default SideBarItems