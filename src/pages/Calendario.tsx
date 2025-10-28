import { FileText, Download, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Calendario() {
  const { toast } = useToast();

  const handleViewCalendar = () => {
    toast({
      title: "Calendário Acadêmico",
      description: "Abrindo visualização do calendário...",
    });
    // Aqui você pode abrir um modal ou redirecionar para visualizar o PDF
  };

  const handleDownloadCalendar = () => {
    toast({
      title: "Download iniciado",
      description: "O calendário acadêmico está sendo baixado...",
    });
    // Implementar download do PDF
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Calendário Acadêmico
          </h1>
          <p className="text-muted-foreground">
            Consulte as datas importantes do semestre letivo
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border bg-card hover:shadow-lg transition-shadow col-span-full md:col-span-2 lg:col-span-3">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">Calendário Acadêmico 2025</CardTitle>
                  <CardDescription className="mt-1">
                    Documento completo com todas as datas importantes do ano letivo
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleViewCalendar} className="gap-2">
                  <Eye className="h-4 w-4" />
                  Visualizar Calendário
                </Button>
                <Button onClick={handleDownloadCalendar} variant="secondary" className="gap-2">
                  <Download className="h-4 w-4" />
                  Baixar PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Próximos Eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Início das Aulas</p>
                  <p className="text-sm text-muted-foreground">05 de Fevereiro, 2025</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-semibold">Período de Provas P1</p>
                  <p className="text-sm text-muted-foreground">15 a 20 de Abril, 2025</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Recesso Acadêmico</p>
                  <p className="text-sm text-muted-foreground">15 a 20 de Julho, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Prazos Importantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">Matrícula 2º Semestre</p>
                  <p className="text-sm text-muted-foreground">01 a 10 de Julho, 2025</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">Entrega de TCC</p>
                  <p className="text-sm text-muted-foreground">30 de Novembro, 2025</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold">Período de Colação de Grau</p>
                  <p className="text-sm text-muted-foreground">15 a 20 de Dezembro, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Feriados e Recessos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-muted pl-4">
                  <p className="font-semibold">Carnaval</p>
                  <p className="text-sm text-muted-foreground">03 a 05 de Março, 2025</p>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <p className="font-semibold">Semana Santa</p>
                  <p className="text-sm text-muted-foreground">17 a 20 de Abril, 2025</p>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <p className="font-semibold">Recesso de Fim de Ano</p>
                  <p className="text-sm text-muted-foreground">20 de Dezembro a 05 de Janeiro</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
