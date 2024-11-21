import Image from "next/image"
import {  Globe, Code2, Github } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  name: string
  description: string
  tech_stack: string[]
  github_url: string
  website_url: string
  image_path: string
}

export default function ProjectCard({
  name,
  description,
  tech_stack,
  github_url,
  website_url,
  image_path,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md overflow-hidden" >
      
      <CardHeader className="p-0">
        <div>
        <Image
          src={`/assets/${image_path}`}
          alt={name}
          width={400}
          height={200}
          className="w-full object-cover"
        />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-bold mb-2">{name}</CardTitle>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech_stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              <Code2 className="w-3 h-3 mr-1" />
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button variant="outline" asChild>
          <a href={github_url} target="_blank" rel="noopener noreferrer">
          <Github className="w-4 h-4 mr-2"/>
            GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={website_url} target="_blank" rel="noopener noreferrer">
            <Globe className="w-4 h-4 mr-2" />
            Website
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

