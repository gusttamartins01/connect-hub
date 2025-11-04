import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  GraduationCap, 
  LogOut, 
  Home, 
  Calendar, 
  BookOpen, 
  Users, 
  MessageSquare, 
  FileText 
} from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userMatricula");
    navigate("/login");
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect-hub
            </span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      location.pathname === "/" && "bg-primary/10",
                      "flex items-center gap-2"
                    )}
                  >
                    <Home className="h-4 w-4" />
                    Início
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    location.pathname.includes("/disciplinas") ||
                    location.pathname.includes("/professores")
                      ? "bg-primary/10"
                      : "",
                    "flex items-center gap-2"
                  )}
                >
                  <BookOpen className="h-4 w-4" />
                  Acadêmico
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-2 p-2">
                    <li>
                      <Link to="/disciplinas">
                        <NavigationMenuLink className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Disciplinas</div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Horários e informações
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/professores">
                        <NavigationMenuLink className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Professores</div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Contatos e perfis
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    location.pathname.includes("/calendario") ||
                    location.pathname.includes("/grade-curricular") ||
                    location.pathname.includes("/chat") ||
                    location.pathname.includes("/comunidade")
                      ? "bg-primary/10"
                      : "",
                    "flex items-center gap-2"
                  )}
                >
                  <FileText className="h-4 w-4" />
                  Recursos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-2 p-2">
                    <li>
                      <Link to="/calendario">
                        <NavigationMenuLink className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Calendário</div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Calendário acadêmico 2025
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/grade-curricular">
                        <NavigationMenuLink className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <FileText className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Grade Curricular</div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Curso completo
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/chat">
                        <NavigationMenuLink className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <MessageSquare className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Chat IA</div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Tire dúvidas com IA
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link to="/comunidade">
                        <NavigationMenuLink className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-sm font-medium">Comunidade</div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Discord dos alunos ADS
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>
    </nav>
  );
};
