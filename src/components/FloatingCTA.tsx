import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Solo aplicar en mobile
      if (window.innerWidth < 768) {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const clientHeight = window.innerHeight;
        
        // Ocultar cuando estamos a 300px del final
        const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
        setIsVisible(distanceFromBottom > 300);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll(); // Check inicial
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a
        href="https://mieunacom.cl"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <span className="hidden sm:inline">Consulta tu situación</span>
        <span className="sm:hidden">Consultar</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};
