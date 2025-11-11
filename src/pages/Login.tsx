import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { GraduationCap, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validar formato da matrícula (1-2025XXXXXX)
    const matriculaRegex = /^1-2025\d{6}$/;
    
    if (!matriculaRegex.test(matricula)) {
      toast({
        title: "Matrícula inválida",
        description: "O formato deve ser: 1-2025XXXXXX (ex: 1-2025134731)",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (senha !== "12345") {
      toast({
        title: "Senha incorreta",
        description: "A senha padrão é: 12345",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Salvar matrícula no localStorage
    localStorage.setItem("userMatricula", matricula);
    localStorage.setItem("isAuthenticated", "true");

    toast({
      title: "Login realizado!",
      description: "Bem-vindo à plataforma acadêmica.",
    });

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            Sistema Acadêmico
          </h1>
          <p className="text-muted-foreground">
            Análise e Desenvolvimento de Sistemas
          </p>
        </div>

        <Card className="border-border bg-card shadow-glow">
          <CardHeader>
            <CardTitle>Acesso de Alunos</CardTitle>
            <CardDescription>
              Entre com sua matrícula e senha padrão
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="matricula">Matrícula</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="matricula"
                    placeholder="1-2025134731"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Formato: 1-2025XXXXXX
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="senha"
                    type="password"
                    placeholder="Senha padrão"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Senha padrão: 12345
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
           <span className="text-primary font-semibold animation: animate-pulse">UniConnect - Desenvolvido por  Gustavo Martins</span>
        </p>
      </div>
    </div>
  );
}
