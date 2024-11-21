import Image from "next/image"
import { Github, Globe, Code2 } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface ProjectCardProps {
  name: string
  description: string
  tech_stack: string[]
  github_url: string
  website_url: string
  images: string[]
}

export default function ProjectCard({
  name,
  description,
  tech_stack,
  github_url,
  website_url,
  images,
}: ProjectCardProps) {
  return (
    <Card className="w-full  overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%] w-full">
          <Carousel className="w-full" plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction  :false,
          stopOnMouseEnter : true
        }),
      ]}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                   <div>
        <Image
          src={`/assets/${image}`}
          alt={name}
          width={8000}
          height={8000}
          className="w-full  object-cover"
        />
        </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
          </Carousel>
        </div>
        <div className="md:w-3/5 flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
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
          <CardFooter className="flex justify-end gap-4 p-4">
            <Button variant="outline" asChild>
              <a href={github_url} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
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
        </div>
      </div>
    </Card>
  )
}

