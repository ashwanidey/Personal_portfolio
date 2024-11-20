import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import React from 'react'
import { Check, ChevronDown, Folder, Menu, Play, Plus, Send, X } from 'lucide-react'
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

type TopBarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};


const TopBar = ({isSidebarOpen,setIsSidebarOpen} : TopBarProps) => {
  return (
    <header className="flex items-center justify-between border-b px-4 py-2 sm:px-6 sm:py-4">
    <div className="flex items-center space-x-2 sm:space-x-4">
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <nav className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold">Collections</h2>
            <Button className="justify-start" variant="ghost">
              <Folder className="mr-2 h-4 w-4" />
              Collection 1
            </Button>
            <Button className="justify-start" variant="ghost">
              <Folder className="mr-2 h-4 w-4" />
              Collection 2
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
      <Select defaultValue="get">
        <SelectTrigger className="w-[90px] sm:w-[100px]">
          <SelectValue placeholder="Method" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="get">GET</SelectItem>
          <SelectItem value="post">POST</SelectItem>
          <SelectItem value="put">PUT</SelectItem>
          <SelectItem value="delete">DELETE</SelectItem>
        </SelectContent>
      </Select>
      <Input className="w-[140px] sm:w-[200px] md:w-[300px]" placeholder="Enter request URL" type="url" />
    </div>
    <div className="flex gap-4 items-center">
    <ThemeToggleComponent/>
    <Button size="lg" className="px-2 sm:px-4">
      <span className="hidden sm:inline">Send</span>
      <Send className="h-4 w-4 sm:ml-2" />
    </Button>
    </div>
  </header>
  )
}

export default TopBar