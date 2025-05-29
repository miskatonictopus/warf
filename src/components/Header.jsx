import { ThemeToggle } from "./theme-toggle"
import logoLight from "@/assets/warf_logo_white_header.png";
import logoDark from "@/assets/warf_logo_black_header.png";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-background text-foreground shadow-sm">
        <div className="flex items-center space-x-4">
    <img
      src={logoLight}
      alt="WARF Logo Light"
      className="h-8 w-auto block dark:hidden"
    />
    <img
      src={logoDark}
      alt="WARF Logo Dark"
      className="h-8 w-auto hidden dark:block"
    />
  </div>
      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary">Dignidad</a>
          <a href="#" className="hover:text-primary">Transparencia</a>
          <a href="#" className="hover:text-primary">Compromiso</a>
          <a href="#" className="hover:text-primary">Acción real</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
