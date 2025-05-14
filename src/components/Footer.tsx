
import { Github, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold gradient-text">Portfolio</h2>
            <p className="text-foreground/60 text-sm mt-2">Crafting digital experiences</p>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
            <a href="#technologies" className="text-foreground/70 hover:text-primary transition-colors">Technologies</a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4 mt-6 md:mt-0">
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
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
