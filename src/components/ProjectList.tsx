import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";

// Sample projects data
const initialProjects: Project[] = [
  {
    id: 1,
    title: "Kaam Ka Timetable",
    description: "This application allows university and college students to plan out their upcoming semester by inputting their desired courses along with backup sections which then creates a list of possible timetables the user can choose from along with filter options to pick the timetable that perfectly suits them.",
    date: { month: "June", year: 2022 },
    technologies: ["React", "TypeScript", "TailwindCSS"],
    client: "University Project",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    feedback: "This project received an A+ grade for its intuitive interface and powerful functionality that helped many students plan their semesters efficiently.",
    additionalImages: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Hangman - Animals",
    description: "This website was first a plain python code with no UI/UX as such and hence was improved using custom CSS, animations, drawings, sounds and so much more to provide a fun and aesthetic experience of a traditional game, now with modern vibes.",
    date: { month: "August", year: 2022 },
    technologies: ["JavaScript", "HTML", "CSS", "Python"],
    client: "Personal Project",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    feedback: "Users found this game both nostalgic and fresh with its modern take on the classic Hangman game.",
    additionalImages: [
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer insights with interactive visualizations and real-time data updates.",
    date: { month: "January", year: 2023 },
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    client: "Freelance Client",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    feedback: "The client reported a 30% increase in operational efficiency after implementing this dashboard.",
    additionalImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Weather Application",
    description: "A modern weather application that provides real-time weather forecasts, hourly predictions, and interactive maps to visualize weather patterns across different locations.",
    date: { month: "March", year: 2023 },
    technologies: ["React Native", "Redux", "API Integration"],
    client: "Self",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    feedback: "Featured in a local tech blog for its clean design and accurate forecasting.",
    additionalImages: [
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const ProjectList = () => {
  const [projects] = useState<Project[]>(initialProjects);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [showingAll, setShowingAll] = useState(false);
  
  useEffect(() => {
    // Initially show only first 2 projects on smaller screens, all on larger
    const initialCount = window.innerWidth < 768 ? 2 : projects.length;
    setVisibleProjects(projects.slice(0, initialCount));
    setShowingAll(initialCount === projects.length);
  }, [projects]);

  const showAllProjects = () => {
    setVisibleProjects(projects);
    setShowingAll(true);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold inline-block gradient-text">Projects</h2>
          <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div key={project.id} className="animate-fade-in-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        {!showingAll && (
          <div className="mt-12 flex justify-center">
            <Button onClick={showAllProjects} variant="outline">
              View More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
