import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "PHYSICAL PRODUCTS", path: "/portfolio" },
    { name: "DIGITAL PRODUCTS", path: "/digital-product" },
    { name: "BAGS", path: "/bags" },
    { name: "SUSTAINABILITY", path: "/sustainability" },
    { name: "ACHIEVEMENTS", path: "/achievements" },
    { name: "ACADEMIA", path: "/academia" },
    { name: "PATENTS", path: "/patents" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-medium tracking-wide text-foreground hover:text-muted-foreground transition-colors"
          >
            DESIGNABEL LLC - EVAN ABEL
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-foreground",
                  location.pathname === item.path 
                    ? "text-foreground border-b border-foreground pb-1" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;