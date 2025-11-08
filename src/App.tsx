import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Calendario from "./pages/Calendario";
import Disciplinas from "./pages/Disciplinas";
import Professores from "./pages/Professores";
import Chat from "./pages/Chat";
import GradeCurricular from "./pages/GradeCurricular";
import Comunidade from "./pages/Comunidade";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/disciplinas" element={<Disciplinas />} />
                    <Route path="/professores" element={<Professores />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/grade-curricular" element={<GradeCurricular />} />
                    <Route path="/comunidade" element={<Comunidade />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
