import { Clock, BookOpen, AlertCircle, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { disciplinas, atividades } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pendente":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/50";
      case "atrasada":
        return "bg-red-500/20 text-red-500 border-red-500/50";
      case "entregue":
        return "bg-green-500/20 text-green-500 border-green-500/50";
      default:
        return "";
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "atividade":
        return "bg-blue-500/20 text-blue-400 border-blue-500/50";
      case "trabalho":
        return "bg-purple-500/20 text-purple-400 border-purple-500/50";
      case "aps":
        return "bg-orange-500/20 text-orange-400 border-orange-500/50";
      default:
        return "";
    }
  };

  const handleWhatsAppNotification = () => {
    const atrasadas = atividades.filter((a) => a.status === "atrasada");
    const pendentes = atividades.filter((a) => a.status === "pendente");
    
    let message = "📚 *Resumo Acadêmico*\n\n";
    
    if (atrasadas.length > 0) {
      message += `⚠️ *Atividades Atrasadas: ${atrasadas.length}*\n`;
      atrasadas.forEach((a) => {
        const disc = disciplinas.find((d) => d.id === a.disciplinaId);
        message += `- ${a.titulo} (${disc?.nome})\n`;
      });
      message += "\n";
    }
    
    if (pendentes.length > 0) {
      message += `📝 *Atividades Pendentes: ${pendentes.length}*\n`;
      pendentes.forEach((a) => {
        const disc = disciplinas.find((d) => d.id === a.disciplinaId);
        message += `- ${a.titulo} (${disc?.nome}) - Entrega: ${new Date(a.dataEntrega).toLocaleDateString("pt-BR")}\n`;
      });
    }

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Notificação preparada",
      description: "Abrindo WhatsApp para enviar notificações...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Bem-vindo ao Connect Hub
          </h1>
          <p className="text-muted-foreground">
            Gerencie suas disciplinas, atividades e acompanhe seu progresso acadêmico
          </p>
        </div>

        {/* Resumo Rápido */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Disciplinas Ativas</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{disciplinas.length}</div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atividades Pendentes</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {atividades.filter((a) => a.status === "pendente").length}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atividades Atrasadas</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">
                {atividades.filter((a) => a.status === "atrasada").length}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <Button onClick={handleWhatsAppNotification} className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Enviar Resumo via WhatsApp
          </Button>
        </div>

        {/* Disciplinas do 2º Semestre */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Disciplinas do 2º Semestre</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {disciplinas.map((disciplina) => {
              const atividadesDisciplina = atividades.filter(
                (a) => a.disciplinaId === disciplina.id
              );

              return (
                <Card key={disciplina.id} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{disciplina.nome}</CardTitle>
                        <CardDescription className="mt-1">
                          {disciplina.codigo}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Professor:</span>
                        <span className="font-medium">{disciplina.professor.nome}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{disciplina.horario}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Sala:</span>
                        <span className="font-medium">{disciplina.sala}</span>
                      </div>
                    </div>

                    {atividadesDisciplina.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <h4 className="text-sm font-semibold mb-3">Atividades</h4>
                        <div className="space-y-3">
                          {atividadesDisciplina.map((atividade) => (
                            <div
                              key={atividade.id}
                              className="p-3 rounded-lg bg-muted/50 border border-border"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className={getTipoColor(atividade.tipo)}>
                                  {atividade.tipo.toUpperCase()}
                                </Badge>
                                <Badge className={getStatusColor(atividade.status)}>
                                  {atividade.status}
                                </Badge>
                              </div>
                              <p className="font-medium text-sm">{atividade.titulo}</p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {atividade.descricao}
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                Entrega: {new Date(atividade.dataEntrega).toLocaleDateString("pt-BR")}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
