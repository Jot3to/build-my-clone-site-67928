import { useState, useEffect } from "react";
import { Users } from "lucide-react";

export const LiveCounter = () => {
  const [count, setCount] = useState(55);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1); // Incrementa entre 1 y 3
    }, Math.random() * 8000 + 5000); // Cada 5-13 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-5 z-50">
      <Users className="w-5 h-5 animate-pulse" />
      <span className="font-semibold">
        Últimas 24 horas: <span className="text-lg">{count}</span> personas consultaron su situación
      </span>
    </div>
  );
};
