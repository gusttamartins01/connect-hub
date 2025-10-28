import { BookOpen, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gradeCurricular } from "@/data/mockData";

export default function GradeCurricular() {
  const totalCargaHoraria = gradeCurricular.reduce(
    (total, sem) =>
      total + sem.disciplinas.reduce((sum, disc) => sum + disc.cargaHoraria, 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Grade Curricular
          </h1>
          <p className="text-muted-foreground">
            Estrutura completa do curso com todas as disciplinas por semestre
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Semestres</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{gradeCurricular.length}</div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Disciplinas</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {gradeCurricular.reduce((sum, sem) => sum + sem.disciplinas.length, 0)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Carga Horária Total</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCargaHoraria}h</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {gradeCurricular.map((semestre) => {
            const cargaHorariaSemestre = semestre.disciplinas.reduce(
              (sum, disc) => sum + disc.cargaHoraria,
              0
            );

            return (
              <Card key={semestre.semestre} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">
                        {semestre.semestre}º Semestre
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {semestre.disciplinas.length} disciplinas • {cargaHorariaSemestre}h total
                      </CardDescription>
                    </div>
                    <Badge className="text-lg px-4 py-2">
                      {semestre.semestre}º
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {semestre.disciplinas.map((disciplina, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border hover:bg-muted transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                            <BookOpen className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{disciplina.nome}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {disciplina.cargaHoraria}h
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
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
