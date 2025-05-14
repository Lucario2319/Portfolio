
import { Link } from "react-router-dom";
import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="group relative overflow-hidden rounded-lg block"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>
      
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute bottom-0 left-0 w-full p-6 z-20">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-foreground/70 line-clamp-2 mb-3">
          {project.description}
        </p>
        
        <div className="flex items-center text-xs text-foreground/60">
          <Calendar className="w-3 h-3 mr-1" />
          <span>{project.date.month} {project.date.year}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
