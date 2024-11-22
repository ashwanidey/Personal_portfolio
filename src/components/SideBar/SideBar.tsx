import React from 'react'
import { Button } from '../ui/button'
import { Boxes, ChevronDown, ChevronUp, Folder, Plus } from 'lucide-react'
import SideBarItems from '../SideBarItems/SideBarItems'



const SideBar = (props:TopBarProps) => {
  return (
    <aside className="hidden w-64 overflow-y-auto border-r p-4 md:block">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Collections</h2>
            {/* <Button size="icon" variant="ghost">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add collection</span>
            </Button> */}
          </div>
          <div className="space-y-2 ">
              
             <SideBarItems {...props}/>
         
            
            {/* <Button className="w-full justify-start" variant="ghost">
              <Folder className="mr-2 h-4 w-4" />
              Collection 2
            </Button> */}
          </div>
        </aside>
  )
}

export default SideBar