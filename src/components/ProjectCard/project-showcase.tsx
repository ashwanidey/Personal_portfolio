import ProjectCard from "./ProjectCard"



type ProjectType = {
  name: string;
  description: string;
  tech_stack: string[];
  github_url: string;
  website_url: string;
  image_path: string;
};

interface ProjectShowcaseProps {
  projectsData: ProjectType[];
}

export default function ProjectShowcase({ projectsData } : ProjectShowcaseProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {projectsData.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
      
    </div>
  )
}

