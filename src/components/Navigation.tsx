import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "PHYSICAL PRODUCTS", path: "/portfolio" },
    { name: "DIGITAL PRODUCTS", path: "/digital-product" },
    { name: "BAGS", path: "/bags" },
    { name: "SUSTAINABILITY", path: "/sustainability" },
    { name: "ACHIEVEMENTS", path: "/achievements" },
    { name: "ACADEMIA", path: "/academia" },
    { name: "PATENTS", path: "/patents" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between min-w-0">
          <Link 
            to="/" 
            className="text-2xl font-brand font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors lowercase flex-shrink-0"
          >
            designabel
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-8 xl:ml-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-foreground whitespace-nowrap",
                  location.pathname === item.path 
                    ? "text-foreground border-b border-foreground pb-1" 
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium tracking-wide transition-colors hover:text-foreground",
                      location.pathname === item.path 
                        ? "text-foreground border-l-2 border-foreground pl-4" 
                        : "text-muted-foreground pl-4"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;