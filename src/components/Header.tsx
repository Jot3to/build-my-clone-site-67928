import logo from "@/assets/logo-adios-deudas.png";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex justify-center items-center">
        <img 
          src={logo} 
          alt="Adiós Deudas" 
          className="h-8 md:h-10 w-auto"
        />
      </div>
    </header>
  );
};
