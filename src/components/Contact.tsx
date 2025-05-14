
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FormEvent, useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold inline-block gradient-text">Get In Touch</h2>
          <p className="text-foreground/70 mt-4 max-w-lg mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Contact Information</h3>
              <p className="text-foreground/70">
                Feel free to reach out through the form or directly via email or WhatsApp.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-2">WhatsApp</h4>
                <p className="text-foreground">+92317-0021690</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-foreground/50 mb-2">Email</h4>
                <a href="mailto:abdulrafay23190@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                  abdulrafay23190@gmail.com
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-foreground/60 italic">
                "Innovating one project at a time"
              </p>
            </div>
          </div>
          
          <div className="bg-secondary/20 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm mb-1 block text-foreground/70">Name</label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  required 
                  className="bg-background/50 border-white/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm mb-1 block text-foreground/70">Email</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required
                  className="bg-background/50 border-white/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm mb-1 block text-foreground/70">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="What would you like to discuss?" 
                  rows={4}
                  required
                  className="bg-background/50 border-white/20 focus:border-primary"
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
