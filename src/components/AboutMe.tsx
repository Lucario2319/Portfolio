
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Timeline items
const timelineItems = [
  {
    year: 2020,
    title: "Started my journey",
    description: "Started my journey with HTML and CSS",
  },
  {
    year: 2021,
    title: "Completed CS50 and learned Javascript",
    description: "Completed CS50 and learned Javascript",
  },
  {
    year: 2022,
    title: "Learned React and made custom projects",
    description: "Learned React and made custom projects",
  },
  {
    year: 2023,
    title: "Shared my community projects with the world",
    description: "Shared my community projects with the world",
  }
];

const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold inline-block gradient-text">About Me</h2>
          <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-foreground/90">
              I'm a working student currently doing my Bachelors in CS from Habib University in Pakistan while simultaneously being involved in learning full stack web development. My goal is to take my development skills to the next level and build awesome apps.
            </p>
            
            <p className="text-lg text-foreground/90">
              I enjoy creating elegant solutions to complex problems and constantly learning new technologies. My expertise spans both frontend and backend development, allowing me to build complete applications from concept to deployment.
            </p>
            
            <p className="text-lg text-foreground/90">
              When I'm not coding, you can find me exploring new design trends, contributing to open source projects, or experimenting with new web technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-lg font-medium mb-3">Education</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>BSc in Computer Science, Habib University</li>
                  <li>Full Stack Web Development</li>
                  <li>Online Courses & Certifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Interests</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>SaaS</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold gradient-text">My Journey</h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-[15px] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-primary before:opacity-30">
              {timelineItems.map((item, index) => (
                <div key={item.year} className="relative grid grid-cols-[40px_1fr] gap-6 items-start">
                  <div className={cn(
                    "flex h-[30px] w-[30px] rounded-full border text-center text-xs font-bold leading-[28px]",
                    "bg-background border-primary text-primary z-10"
                  )}>
                    {item.year}
                  </div>
                  
                  <div>
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="text-sm text-foreground/60 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
