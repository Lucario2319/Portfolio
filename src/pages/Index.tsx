
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import Technologies from "@/components/Technologies";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <ProjectList />
          <Technologies />
          <AboutMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </ScrollArea>
  );
};

export default Index;

