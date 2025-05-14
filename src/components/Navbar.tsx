
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold gradient-text">Portfolio</a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a 
                key={item.label} 
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative',
                  activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </a>
            ))}
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="text-foreground/80 hover:text-primary">
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

