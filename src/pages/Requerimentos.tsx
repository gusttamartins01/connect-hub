import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Send, Clock, CheckCircle, AlertCircle, Inbox } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Requerimento {
  id: string;
  tipo: string;
  assunto: string;
  descricao: string;
  data: string;
  status: "pendente" | "em-analise" | "aprovado" | "negado";
}

const tiposRequerimento = [
  "Declaração de Matrícula",
  "Histórico Escolar",
  "Trancamento de Disciplina",
  "Revisão de Nota",
  "Solicitação de Certificado",
  "Outros",
];

const statusConfig = {
  pendente: {
    label: "Pendente",
    color: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30",
    icon: Clock,
  },
  "em-analise": {
    label: "Em Análise",
    color: "bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30",
    icon: AlertCircle,
  },
  aprovado: {
    label: "Aprovado",
    color: "bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30",
    icon: CheckCircle,
  },
  negado: {
    label: "Negado",
    color: "bg-red-500/20 text-red-700 dark:text-red-400 border-red-500/30",
    icon: AlertCircle,
  },
};

export default function Requerimentos() {
  const { toast } = useToast();
  const [requerimentos, setRequerimentos] = useState<Requerimento[]>([
    {
      id: "1",
      tipo: "Declaração de Matrícula",
      assunto: "Declaração para estágio",
      descricao: "Preciso de declaração de matrícula para apresentar na empresa.",
      data: "10/01/2025",
      status: "aprovado",
    },
    {
      id: "2",
      tipo: "Revisão de Nota",
      assunto: "Revisão AV2 - Redes",
      descricao: "Solicito revisão da nota da AV2 de Redes de Computadores.",
      data: "05/01/2025",
      status: "em-analise",
    },
  ]);

  const [novoRequerimento, setNovoRequerimento] = useState({
    tipo: "",
    assunto: "",
    descricao: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!novoRequerimento.tipo || !novoRequerimento.assunto || !novoRequerimento.descricao) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    const novo: Requerimento = {
      id: Date.now().toString(),
      tipo: novoRequerimento.tipo,
      assunto: novoRequerimento.assunto,
      descricao: novoRequerimento.descricao,
      data: new Date().toLocaleDateString("pt-BR"),
      status: "pendente",
    };

    setRequerimentos([novo, ...requerimentos]);
    setNovoRequerimento({ tipo: "", assunto: "", descricao: "" });

    toast({
      title: "Requerimento enviado!",
      description: "Seu requerimento foi registrado e está aguardando análise.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Requerimentos
            </h1>
          </div>
          <p className="text-muted-foreground">
            Solicite documentos e serviços acadêmicos
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* FORMULÁRIO */}
          <Card className="border-border bg-card h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Novo Requerimento
              </CardTitle>
              <CardDescription>
                Preencha os dados para solicitar um novo requerimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de Requerimento *</Label>
                  <Select
                    value={novoRequerimento.tipo}
                    onValueChange={(value) =>
                      setNovoRequerimento({ ...novoRequerimento, tipo: value })
                    }
                  >
                    <SelectTrigger id="tipo">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border border-border">
                      {tiposRequerimento.map((tipo) => (
                        <SelectItem key={tipo} value={tipo}>
                          {tipo}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto *</Label>
                  <Input
                    id="assunto"
                    placeholder="Digite o assunto do requerimento"
                    value={novoRequerimento.assunto}
                    onChange={(e) =>
                      setNovoRequerimento({ ...novoRequerimento, assunto: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição *</Label>
                  <Textarea
                    id="descricao"
                    placeholder="Descreva sua solicitação em detalhes"
                    className="min-h-[120px] resize-none"
                    value={novoRequerimento.descricao}
                    onChange={(e) =>
                      setNovoRequerimento({ ...novoRequerimento, descricao: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Requerimento
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* LISTA DE REQUERIMENTOS */}
          <div className="space-y-4">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Inbox className="h-5 w-5 text-primary" />
                  Meus Requerimentos
                </CardTitle>
                <CardDescription>
                  Acompanhe o status das suas solicitações
                </CardDescription>
              </CardHeader>
              <CardContent>
                {requerimentos.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Inbox className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Nenhum requerimento encontrado</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {requerimentos.map((req) => {
                      const statusInfo = statusConfig[req.status];
                      const StatusIcon = statusInfo.icon;

                      return (
                        <div
                          key={req.id}
                          className="p-4 rounded-lg border border-border bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{req.assunto}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{req.tipo}</p>
                            </div>
                            <Badge className={statusInfo.color}>
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {req.descricao}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            Solicitado em {req.data}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
