import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Solo aplicar en mobile
      if (window.innerWidth < 768) {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const clientHeight = window.innerHeight;
        
        // Ocultar cuando estamos a 150px del final
        const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
        setIsVisible(distanceFromBottom > 150);
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

  const handleClick = () => {
    if (location.pathname === '/') {
      // Si estamos en la página principal, hacer scroll al formulario
      const formulario = document.getElementById('formulario');
      if (formulario) {
        formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Si estamos en otra página, navegar a la principal y luego scroll
      navigate('/');
      setTimeout(() => {
        const formulario = document.getElementById('formulario');
        if (formulario) {
          formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <span className="hidden sm:inline">Consulta tu situación</span>
        <span className="sm:hidden">Consultar</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};
