import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const LiveCounter = () => {
  const [count, setCount] = useState(55);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1); // Incrementa entre 1 y 3
    }, Math.random() * 8000 + 5000); // Cada 5-13 segundos

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (location.pathname === '/') {
      // Si está en el landing principal, hace scroll al formulario
      const formElement = document.getElementById('formulario');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Si está en otra página, navega al landing y luego al formulario
      navigate('/');
      setTimeout(() => {
        const formElement = document.getElementById('formulario');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 left-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-5 z-50 hover:scale-105 transition-transform cursor-pointer"
    >
      <Users className="w-5 h-5 animate-pulse" />
      <span className="font-semibold">
        Últimas 24 horas: <span className="text-lg">{count}</span> personas consultaron su situación
      </span>
    </button>
  );
};
