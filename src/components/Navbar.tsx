import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
            <span className="text-xl font-bold">Portal Acadêmico</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive("/") ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/calendario">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive("/calendario") ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    Calendário
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Disciplinas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4">
                    <li>
                      <Link to="/disciplinas">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">Todas as Disciplinas</div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/professores">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">Professores</div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/chat">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive("/chat") ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    Chat
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/grade-curricular">
                  <NavigationMenuLink
                    className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                      isActive("/grade-curricular") ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    Grade Curricular
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                isActive("/") ? "bg-accent" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/calendario"
              className={`block px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                isActive("/calendario") ? "bg-accent" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Calendário
            </Link>
            <Link
              to="/disciplinas"
              className={`block px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                isActive("/disciplinas") ? "bg-accent" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Disciplinas
            </Link>
            <Link
              to="/professores"
              className={`block px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                isActive("/professores") ? "bg-accent" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Professores
            </Link>
            <Link
              to="/chat"
              className={`block px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                isActive("/chat") ? "bg-accent" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Chat
            </Link>
            <Link
              to="/grade-curricular"
              className={`block px-4 py-2 rounded-md transition-colors hover:bg-accent ${
                isActive("/grade-curricular") ? "bg-accent" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Grade Curricular
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
