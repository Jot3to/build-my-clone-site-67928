import { Link } from "react-router-dom";
import logo from "@/assets/logo-adios-deudas-new.png";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex justify-center items-center">
        <Link to="/" className="cursor-pointer">
          <img 
            src={logo} 
            alt="Adiós Deudas" 
            className="h-16 md:h-20 w-auto hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
    </header>
  );
};
