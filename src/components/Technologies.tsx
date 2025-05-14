
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon: string;
  description: string;
  level: number;
}

const techCategories = [
  {
    id: "front-end",
    label: "Front-End",
    items: [
      { name: "React", icon: "⚛️", description: "Component-based UI library", level: 90 },
      { name: "NextJS", icon: "⚛️", description: "Component-based UI library", level: 90 },
      { name: "JavaScript", icon: "📜", description: "Dynamic scripting language", level: 85 },
      { name: "TypeScript", icon: "🔷", description: "Strongly typed JavaScript", level: 80 },
      { name: "HTML/CSS", icon: "🎨", description: "Web markup & styling", level: 95 }
    ]
  },
  {
    id: "back-end",
    label: "Back-End",
    items: [
      { name: "NextJS", icon: "⚛️", description: "Python web framework", level: 75 },
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime", level: 80 },
      { name: "Supabase", icon: "🔥", description: "Backend-as-a-service", level: 85 },
      { name: "MongoDB", icon: "🍃", description: "NoSQL database", level: 70 }
    ]
  },
  {
    id: "ui-ux",
    label: "UI/UX",
    items: [
      { name: "Figma", icon: "🖌️", description: "Design & prototyping", level: 80 },
      { name: "TailwindCSS", icon: "🌊", description: "Utility-first CSS framework", level: 90 },
      { name: "Responsive Design", icon: "📱", description: "Multi-device layouts", level: 85 },
      { name: "Animations", icon: "✨", description: "Motion design", level: 75 }
    ]
  }
];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState(techCategories[0].id);

  return (
    <section id="technologies" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold inline-block gradient-text">Technologies</h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world. From Back-end to Design
          </p>
          <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
        </div>
        
        <Tabs 
          value={activeCategory} 
          onValueChange={setActiveCategory}
          className="w-full max-w-3xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-12 bg-secondary/30 rounded-full p-1 backdrop-blur-sm">
            {techCategories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {techCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="bg-secondary/20 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:border-primary/30 transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{tech.icon}</span>
                      <h3 className="text-xl font-medium">{tech.name}</h3>
                    </div>
                    
                    <p className="text-foreground/70 text-sm mb-4">{tech.description}</p>
                    
                    <div className="w-full bg-secondary/50 rounded-full h-2.5">
                      <div 
                        className={cn(
                          "h-2.5 rounded-full bg-gradient-to-r",
                          tech.level >= 90 ? "from-primary to-green-500" : 
                          tech.level >= 80 ? "from-primary to-accent" : 
                          "from-primary to-primary/60"
                        )}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Technologies;
