import logo from "@/assets/logo-mi-lista-de-novios.png";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex justify-center items-center">
        <img 
          src={logo} 
          alt="Mi Lista de Novios" 
          className="h-12 md:h-14 w-auto"
        />
      </div>
    </header>
  );
};
