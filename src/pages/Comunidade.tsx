import { MessageCircle, Users, Hash, Send, Pin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

export default function Comunidade() {
  const { toast } = useToast();

  const canais = [
    { id: 1, nome: "📢 Avisos Gerais", tipo: "anúncios", descricao: "Comunicados importantes do curso" },
    { id: 2, nome: "💬 Geral", tipo: "chat", descricao: "Conversa livre entre todos os alunos" },
    { id: 3, nome: "📚 Estudos", tipo: "chat", descricao: "Discussões sobre matérias e estudos" },
    { id: 4, nome: "💻 Projetos", tipo: "chat", descricao: "Compartilhe seus projetos e ideias" },
    { id: 5, nome: "🎯 Dúvidas", tipo: "chat", descricao: "Tire dúvidas com colegas" },
    { id: 6, nome: "🌅 Turma Manhã", tipo: "turma", descricao: "Canal exclusivo da turma da manhã" },
    { id: 7, nome: "🌙 Turma Noite", tipo: "turma", descricao: "Canal exclusivo da turma da noite" },
  ];

  const semestres = [
    { semestre: "1º Semestre", cor: "bg-blue-500", alunos: 45 },
    { semestre: "2º Semestre", cor: "bg-green-500", alunos: 38 },
    { semestre: "3º Semestre", cor: "bg-yellow-500", alunos: 42 },
    { semestre: "4º Semestre", cor: "bg-orange-500", alunos: 35 },
    { semestre: "5º Semestre", cor: "bg-red-500", alunos: 40 },
  ];

  const handleJoinDiscord = () => {
    toast({
      title: "Abrindo Discord",
      description: "Você será redirecionado para o servidor do Discord...",
    });
    // Aqui você colocaria o link real do Discord
    window.open("https://discord.gg/seu-servidor-ads", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Comunidade ADS
            </h1>
          </div>
          <p className="text-muted-foreground">
            Conecte-se com seus colegas de todos os semestres, manhã e noite
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <Card className="lg:col-span-2 border-border bg-card shadow-glow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Servidor Discord - Comunidade ADS
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Nossa comunidade oficial no Discord para interação em tempo real
                  </CardDescription>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">200 online</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <p className="text-2xl font-bold">200+</p>
                  <p className="text-sm text-muted-foreground">Membros Ativos</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                  <Hash className="h-8 w-8 text-accent mb-2" />
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-muted-foreground">Canais Disponíveis</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Hash className="h-4 w-4 text-primary" />
                  Canais da Comunidade
                </h3>
                <div className="space-y-2">
                  {canais.map((canal) => (
                    <div
                      key={canal.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {canal.tipo === "anúncios" && <Pin className="h-4 w-4 text-yellow-500" />}
                        {canal.tipo === "chat" && <MessageCircle className="h-4 w-4 text-primary" />}
                        {canal.tipo === "turma" && <Users className="h-4 w-4 text-accent" />}
                        <div>
                          <p className="font-medium">{canal.nome}</p>
                          <p className="text-xs text-muted-foreground">{canal.descricao}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">{canal.tipo}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <Button onClick={handleJoinDiscord} className="flex-1 gap-2" size="lg">
                  <Send className="h-4 w-4" />
                  Entrar no Discord
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Alunos por Semestre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {semestres.map((item) => (
                    <div key={item.semestre} className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-lg ${item.cor} flex items-center justify-center text-white font-bold`}>
                        {item.semestre.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.semestre}</p>
                        <p className="text-xs text-muted-foreground">{item.alunos} alunos</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Regras da Comunidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <p className="text-muted-foreground">Respeite todos os membros</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <p className="text-muted-foreground">Mantenha as conversas relevantes</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">3.</span>
                    <p className="text-muted-foreground">Ajude seus colegas</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">4.</span>
                    <p className="text-muted-foreground">Não compartilhe conteúdo inapropriado</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary font-bold">5.</span>
                    <p className="text-muted-foreground">Use os canais adequados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle>Benefícios da Comunidade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Networking</h3>
                  <p className="text-sm text-muted-foreground">
                    Conecte-se com alunos de todos os semestres e turnos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Grupos de Estudo</h3>
                  <p className="text-sm text-muted-foreground">
                    Forme grupos de estudo e compartilhe conhecimento
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Suporte Rápido</h3>
                  <p className="text-sm text-muted-foreground">
                    Tire dúvidas rapidamente com colegas e veteranos
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
