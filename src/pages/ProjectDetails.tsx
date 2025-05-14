
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Calendar, User, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { Project } from "@/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample projects data - in a real app, this would be fetched from an API or database
const projects: Project[] = [
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

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProject = projects.find(p => p.id === parseInt(id || "0"));
    setProject(foundProject || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-16">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="mb-6"
        >
          <Link to="/#projects">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden bg-secondary/50 backdrop-blur-sm border-white/10">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full object-cover"
                />
              </div>
              
              {project.additionalImages && project.additionalImages.length > 0 && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Additional Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.additionalImages.map((img, index) => (
                      <div key={index} className="aspect-video overflow-hidden rounded-md border border-white/10">
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>
          
          <div>
            <Card className="p-6 bg-secondary/50 backdrop-blur-sm border-white/10">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <p className="text-muted-foreground mt-2">{project.client}</p>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground/70">Description</h3>
                  <p className="mt-1">{project.description}</p>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <div>
                    <h3 className="text-sm font-medium text-foreground/70">Date</h3>
                    <p className="mt-1">{project.date.month} {project.date.year}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <User className="w-4 h-4 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-foreground/70">Client/Institution</h3>
                    <p className="mt-1">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Code className="w-4 h-4 mr-2 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-foreground/70">Technologies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {project.feedback && (
                  <div>
                    <h3 className="text-sm font-medium text-foreground/70 mb-1">Feedback</h3>
                    <Card className="p-4 bg-background/50 border-white/5">
                      <p className="italic text-sm">{project.feedback}</p>
                    </Card>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
