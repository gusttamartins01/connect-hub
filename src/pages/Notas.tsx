import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, TrendingUp, Award } from "lucide-react";
import { disciplinas } from "@/data/mockData";

interface Nota {
  av: string;
  nota: number;
  peso: number;
}

const notasPorDisciplina: Record<string, Nota[]> = {
  "1": [
    { av: "AV1", nota: 8.5, peso: 3 },
    { av: "AV2", nota: 7.0, peso: 4 },
    { av: "AV3", nota: 9.0, peso: 3 },
  ],
  "2": [
    { av: "AV1", nota: 7.5, peso: 3 },
    { av: "AV2", nota: 8.0, peso: 4 },
    { av: "AV3", nota: 8.5, peso: 3 },
  ],
  "3": [
    { av: "AV1", nota: 9.0, peso: 3 },
    { av: "AV2", nota: 8.5, peso: 4 },
    { av: "AV3", nota: 9.5, peso: 3 },
  ],
  "4": [
    { av: "AV1", nota: 7.0, peso: 3 },
    { av: "AV2", nota: 7.5, peso: 4 },
    { av: "AV3", nota: 8.0, peso: 3 },
  ],
};

const calcularMedia = (notas: Nota[]): number => {
  const somaNotas = notas.reduce((acc, n) => acc + n.nota * n.peso, 0);
  const somaPesos = notas.reduce((acc, n) => acc + n.peso, 0);
  return somaNotas / somaPesos;
};

const getStatusColor = (media: number): string => {
  if (media >= 7) return "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30";
  if (media >= 5) return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30";
  return "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30";
};

const getStatus = (media: number): string => {
  if (media >= 7) return "Aprovado";
  if (media >= 5) return "Recuperação";
  return "Reprovado";
};

export default function Notas() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <ClipboardList className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Minhas Notas
            </h1>
          </div>
          <p className="text-muted-foreground">
            Acompanhe seu desempenho acadêmico em todas as disciplinas
          </p>
        </div>

        <div className="grid gap-6">
          {disciplinas.map((disciplina) => {
            const notas = notasPorDisciplina[disciplina.id] || [];
            const media = calcularMedia(notas);
            const status = getStatus(media);

            return (
              <Card key={disciplina.id} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2">
                        {disciplina.nome}
                        <Badge variant="outline" className="text-xs">
                          {disciplina.codigo}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Professor: {disciplina.professor.nome}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        {media.toFixed(1)}
                      </div>
                      <Badge className={getStatusColor(media)}>
                        {status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {notas.map((nota, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-muted-foreground">
                            {nota.av}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            Peso {nota.peso}
                          </Badge>
                        </div>
                        <div className="text-3xl font-bold text-foreground">
                          {nota.nota.toFixed(1)}
                        </div>
                        <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                            style={{ width: `${(nota.nota / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="font-medium">Média Final:</span>
                      <span className="font-bold text-primary">{media.toFixed(2)}</span>
                      <span className="text-muted-foreground ml-2">
                        • {status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
