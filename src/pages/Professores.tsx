import { Mail, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { professores, disciplinas } from "@/data/mockData";

export default function Professores() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professores
          </h1>
          <p className="text-muted-foreground">
            Conheça os professores das suas disciplinas
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {professores.map((professor) => {
            const disciplinasProfessor = disciplinas.filter(
              (d) => d.professor.id === professor.id
            );

            return (
              <Card key={professor.id} className="border-border bg-card hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24 border-4 border-primary/20">
                      <AvatarImage src={professor.foto} alt={professor.nome} />
                      <AvatarFallback className="text-2xl">
                        {professor.nome
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{professor.nome}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={() => window.open(`mailto:${professor.email}`)}
                    >
                      <Mail className="h-4 w-4" />
                      <span className="truncate text-sm">{professor.email}</span>
                    </Button>
                  </div>

                  {disciplinasProfessor.length > 0 && (
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Disciplinas
                      </p>
                      <div className="space-y-1">
                        {disciplinasProfessor.map((disc) => (
                          <div
                            key={disc.id}
                            className="text-sm p-2 rounded bg-muted/50 border border-border"
                          >
                            <p className="font-medium">{disc.nome}</p>
                            <p className="text-xs text-muted-foreground">{disc.horario}</p>
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
  );
}
