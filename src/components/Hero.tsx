
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center pt-16 overflow-hidden animated-bg">
      <div className="absolute inset-0 grid-background"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Welcome To<br />
                <span className="gradient-text">My Personal Portfolio</span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-md">
                I am Abdul Rafay, an aspiring Full Stack Developer, currently mastering my command over Front End with React JS and broadening my skills through Django to build all-in-one full stack web applications for my freelance clients.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild className="bg-primary text-white hover:bg-primary/90">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-primary/50 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/20 hover:border-primary/50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
              <div className="relative bg-background p-6 rounded-lg border border-white/10">
                {/* Decorative code block */}
                <pre className="text-sm text-foreground/80 font-mono overflow-x-auto">
                  <code>
                    {`const developer = {
  name: "Abdul Rafay",
  role: "Full Stack Developer",
  skills: ["React", "NextJS", "TypeScript"],
  loves: ["Clean Code", "Problem Solving", "Innovative Challenges"],
  currentlyLearning: "ML/AI"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
