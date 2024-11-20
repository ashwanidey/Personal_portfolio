'use client'
import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Boxes, ChevronDown, ChevronUp, Folder, Plus } from 'lucide-react'
import { Button } from '../ui/button'


const SideBarItems = () => {


  const [isOpen, setIsOpen] = useState(false)
  return (
    
    <Collapsible className='space-y-2 '>
    <CollapsibleTrigger className='flex items-center w-full justify-between' onClick={() => setIsOpen(prev=>!prev)}>
    <div className='flex'>
    <Boxes  className="mr-2 h-5 w-5"/>Projects
    </div>
    {!isOpen ? <ChevronDown />: <ChevronUp />}
    </CollapsibleTrigger>
    <CollapsibleContent className='ml-6'>
      
      <Button variant = "outline" className="w-full rounded-md border px-4 py-2  text-sm shadow-sm flex justify-start ">
        <span className='dark:text-green-400 text-green-600  text-[12px]'>GET</span>
        <span className=''>Coin Compute</span>          
      </Button>
    </CollapsibleContent>
  </Collapsible>
  )
}

export default SideBarItems