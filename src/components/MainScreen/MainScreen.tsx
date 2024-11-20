import React from 'react'
import {  Plus} from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"


const MainScreen = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Tabs defaultValue="raw" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:w-[50%]">
              <TabsTrigger value="raw">Raw</TabsTrigger>
              <TabsTrigger value="visualize">Visualize</TabsTrigger>
              
            </TabsList>
            <TabsContent value="visualize" className="mt-4">
              <Card>
                <CardHeader>
                <CardTitle>Response</CardTitle>
                <CardDescription>View the response from the server.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea className="font-mono" placeholder="{}" rows={10} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="raw" className="mt-4">
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
  )
}

export default MainScreen