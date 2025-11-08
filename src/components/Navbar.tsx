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
  FileText,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { LibrasToggle } from "./LibrasToggle";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userMatricula");
    navigate("/login");
  };

  const menuItems = [
    { label: "Início", icon: Home, path: "/" },
    {
      label: "Acadêmico",
      icon: BookOpen,
      subItems: [
        { name: "Disciplinas", icon: BookOpen, path: "/disciplinas" },
        { name: "Professores", icon: Users, path: "/professores" },
      ],
    },
    {
      label: "Recursos",
      icon: FileText,
      subItems: [
        { name: "Calendário", icon: Calendar, path: "/calendario" },
        { name: "Grade Curricular", icon: FileText, path: "/grade-curricular" },
        { name: "Chat IA", icon: MessageSquare, path: "/chat" },
        { name: "Comunidade", icon: Users, path: "/comunidade" },
      ],
    },
  ];

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2 group">
            <GraduationCap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              UniConnect
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
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
                          <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
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
                          <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
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
                          <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
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
                          <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
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
                          <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
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
                          <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
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

            {/* BOTÕES DE AÇÃO DESKTOP */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LibrasToggle />
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

          {/* MENU MOBILE */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LibrasToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col space-y-3">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      <Link
                        to={item.path || "#"}
                        className="flex items-center gap-3 text-foreground font-medium hover:text-primary"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <div className="ml-6 mt-2 flex flex-col space-y-2">
                          {item.subItems.map((sub, idx) => (
                            <Link
                              key={idx}
                              to={sub.path}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              <sub.icon className="h-3 w-3" />
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* BOTÃO SAIR MOBILE */}
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="flex items-center gap-2 mt-4 text-muted-foreground hover:text-foreground"
                  >
                    <LogOut className="h-4 w-4" />
                    Sair
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
