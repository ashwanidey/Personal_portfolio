'use client'

import * as React from "react"
import { Check, ChevronDown, Folder, Menu, Play, Plus, Send, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import TopBar from "./TopBar/TopBar"

export function PostmanUi() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="flex h-screen flex-col">
      <TopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-64 overflow-y-auto border-r p-4 md:block">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Collections</h2>
            <Button size="icon" variant="ghost">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add collection</span>
            </Button>
          </div>
          <div className="space-y-2">
            <Button className="w-full justify-start" variant="ghost">
              <Folder className="mr-2 h-4 w-4" />
              Collection 1
            </Button>
            <Button className="w-full justify-start" variant="ghost">
              <Folder className="mr-2 h-4 w-4" />
              Collection 2
            </Button>
          </div>
        </aside>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Tabs defaultValue="body" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="body">Body</TabsTrigger>
              <TabsTrigger value="headers">Headers</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
            </TabsList>
            <TabsContent value="body" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Request Body</CardTitle>
                  <CardDescription>Enter the request body in JSON format.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea className="font-mono" placeholder="{}" rows={10} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="headers" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Request Headers</CardTitle>
                  <CardDescription>Add or modify request headers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Input placeholder="Header name" className="flex-1" />
                      <Input placeholder="Header value" className="flex-1" />
                      <Button size="icon" variant="outline" className="w-full sm:w-auto">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add header</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="response" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Response</CardTitle>
                  <CardDescription>View the response from the server.</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="whitespace-pre-wrap rounded-lg bg-muted p-4 text-sm">
                    {JSON.stringify({ message: "Response will appear here" }, null, 2)}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}