import { Heart } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Heart className="w-8 h-8 text-primary fill-primary" />
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Lista de Novios
          </h1>
        </div>
      </div>
    </header>
  );
};
