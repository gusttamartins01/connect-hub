import { Clock, MapPin, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { disciplinas } from "@/data/mockData";

export default function Disciplinas() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Minhas Disciplinas
          </h1>
          <p className="text-muted-foreground">
            Todas as disciplinas do semestre atual com horários e professores
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {disciplinas.map((disciplina) => (
            <Card key={disciplina.id} className="border-border bg-card hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{disciplina.nome}</CardTitle>
                    <CardDescription>{disciplina.codigo}</CardDescription>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={disciplina.professor.foto} alt={disciplina.professor.nome} />
                    <AvatarFallback>
                      {disciplina.professor.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{disciplina.professor.nome}</p>
                    <p className="text-sm text-muted-foreground">{disciplina.professor.email}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{disciplina.horario}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{disciplina.sala}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
