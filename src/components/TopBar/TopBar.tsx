'use client'

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import React, { useState } from 'react'
import { Boxes, Check, ChevronDown, Folder, Menu, Play, Plus, Send, X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from '../ui/button'
import { Input } from "../ui/input"
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import SideBarItems from "../SideBarItems/SideBarItems"
import {ComboBox} from "../ComboBox/ComboBox"
import { mainEndpoints, subEndpoints } from "../../../data/data-endpoints"





const TopBar = (props : TopBarProps) => {
  
  return (
    <header className="flex items-center justify-between border-b px-4 py-2 sm:px-6 sm:py-4  w-full">
    <div className="flex flex-col md:flex-row md:items-center   space-y-2 sm:space-x-4 md:w-auto w-full">
      <div className="flex justify-between">
        
      <Sheet open={props.isSidebarOpen} onOpenChange={props.setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          
            <SheetTitle className="text-lg font-semibold mb-5">Collections</SheetTitle>
           <SideBarItems {...props}/>
          
        </SheetContent>
      </Sheet>
      <div className="md:hidden flex">
        <ThemeToggleComponent/>
        </div>
      </div>
      <div className="flex items-center gap-4 w-full">
      <div className=" bg-muted border border-muted rounded-md px-2 py-1 flex items-center space-x-1 text-sm font-mono w-full">
        <div className="">
      http://localhost:3000/<ComboBox values={mainEndpoints} value = {props.mainEndpoint} setValue = {props.setMainEndpoint} name={"select-endpoint"}/>
      {props.mainEndpoint === "projects" && <>&project_name=<ComboBox values={subEndpoints} value = {props.subDomain} setValue = {props.setSubDomain} name={"select-query"}/></>}
      </div>
      
      </div>
      <Button size="lg" className="px-2 sm:px-4 md:flex hidden">
      <span className="hidden sm:inline">Send</span>
      <Send className="h-4 w-4 sm:ml-2" />
    </Button>
    <Button size="icon" className="px-2 sm:px-4 flex md:hidden">
      <span className="hidden sm:inline">Send</span>
      <Send className="h-4 w-4 sm:ml-2" />
    </Button>
    </div>
      
      {/* <Select defaultValue="get">
        <SelectTrigger className="w-[90px] sm:w-[100px]">
          <SelectValue placeholder="Method" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="get">project</SelectItem>
          <SelectItem value="post">POST</SelectItem>
          <SelectItem value="put">PUT</SelectItem>
          <SelectItem value="delete">DELETE</SelectItem>
        </SelectContent>
      </Select> */}
      {/* <Input className="w-[140px] sm:w-[200px] md:w-[300px]" placeholder="Enter request URL" type="url" /> */}
    </div>
    <div className="md:flex hidden gap-4 items-center">
    <ThemeToggleComponent/>
    
    </div>
  </header>
  )
}

export default TopBar