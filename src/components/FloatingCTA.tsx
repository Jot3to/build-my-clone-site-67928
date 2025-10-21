import { ArrowRight } from "lucide-react";

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <a
        href="https://milistadenovios.cl"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <span className="hidden sm:inline">Conoce Mi Lista de Novios</span>
        <span className="sm:hidden">Crear mi lista</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};
