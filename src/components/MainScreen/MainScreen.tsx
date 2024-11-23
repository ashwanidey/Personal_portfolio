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
import ProjectShowcase from '../ProjectCard/project-showcase'
import { projects } from '../../../data/projects'
import SingleProjectCard from '../SingleProjectCard/SingleProjectCard'
import ModernAboutMe from '../AboutSection/modern-about-me'
import SkillsSection from '../SkillsSection/SkillsSection'





const MainScreen = ({mainEndpoint, setMainEndpoint,
  subDomain, setSubDomain} : TopBarProps) => {
  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        
          <Tabs defaultValue="visualize" className="w-full relative">
            {/* <TabsList className="grid w-full grid-cols-2 md:w-[50%] ">
              <TabsTrigger value="visualize">Visualize</TabsTrigger>
              <TabsTrigger value="raw">Raw</TabsTrigger>
              
              
            </TabsList> */}
            <TabsContent value="visualize" className="mt-4">


  {mainEndpoint === "projects" && (
    subDomain === "all" ? (
      <ProjectShowcase projectsData={projects} />
    ) : (
      <SingleProjectCard {...projects.find(project => project.value === subDomain) || projects[0] } />
    )
  )}
  {(mainEndpoint === "about-me" || mainEndpoint == "") && <ModernAboutMe/>}
  {mainEndpoint === "skills" && <SkillsSection/>}
  
</TabsContent>
            <TabsContent value="raw" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Response</CardTitle>
                  <CardDescription>View the response from the server.</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10">
                  <pre className="whitespace-pre-wrap rounded-lg bg-muted p-4  text-xs sm:text-sm lg:text-base overflow-auto">
                    {JSON.stringify(projects, null, 2)}
                  </pre>
                </CardContent>

              </Card>
            </TabsContent>
            
          </Tabs>
        </main>
  )
}

export default MainScreen