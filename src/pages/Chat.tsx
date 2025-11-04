import { useState, useRef, useEffect } from "react";
import { Send, Bot, User as UserIcon, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { disciplinas } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const disciplineContext: Record<string, string> = {
  "1": `Você é o Prof. Dr. Ricardo Amorim, especialista em Fundamentos de Análise e Projeto de Sistemas. 
  Responda dúvidas sobre: modelagem UML, diagramas de classes, casos de uso, análise de requisitos, 
  metodologias ágeis, padrões de projeto, e boas práticas de desenvolvimento de software.`,
  
  "2": `Você é a Profa. Reivel Vieira, especialista em Redes de Computadores.
  Responda dúvidas sobre: protocolos TCP/IP, arquitetura de redes, topologias, segurança de rede,
  configuração de switches e roteadores, modelo OSI, endereçamento IP, e redes sem fio.`,
  
  "3": `Você é o Prof. Reivel Vieira, especialista em Sistemas Operacionais.
  Responda dúvidas sobre: gerenciamento de processos, memória, sistemas de arquivos, escalonamento,
  concorrência, sincronização, deadlock, virtualização, Linux, Windows e conceitos de kernel.`,
  
  "4": `Você é o Prof. Julião Eduardo Maximos, especialista em Interface Homem Máquina.
  Responda dúvidas sobre: design de interfaces, usabilidade, experiência do usuário (UX/UI),
  acessibilidade, prototipação, testes de usabilidade, design responsivo, e heurísticas de Nielsen.`,
};

export default function ChatImproved() {
  const [selectedDisciplina, setSelectedDisciplina] = useState(disciplinas[0].id);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedDisciplina]: [...(prev[selectedDisciplina] || []), userMessage],
    }));

    setNewMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-professor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: disciplineContext[selectedDisciplina],
            },
            ...(messages[selectedDisciplina] || []).map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            {
              role: "user",
              content: newMessage,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao conectar com a IA");
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => ({
        ...prev,
        [selectedDisciplina]: [...(prev[selectedDisciplina] || []), userMessage, assistantMessage],
      }));
    } catch (error) {
      console.error("Erro:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Não foi possível conectar com o professor virtual. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const currentMessages = messages[selectedDisciplina] || [];
  const currentDisciplina = disciplinas.find((d) => d.id === selectedDisciplina);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [currentMessages]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/20">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Chat com IA - Professor Virtual
            </h1>
          </div>
          <p className="text-muted-foreground">
            Tire suas dúvidas com inteligência artificial especializada em cada disciplina
          </p>
        </div>

        <Card className="border-border bg-card shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Assistente por Disciplina
            </CardTitle>
            <CardDescription>
              Selecione uma disciplina e converse com o professor virtual
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedDisciplina} onValueChange={setSelectedDisciplina}>
              <TabsList className="w-full flex-wrap h-auto gap-2 bg-muted/50">
                {disciplinas.map((disc) => (
                  <TabsTrigger
                    key={disc.id}
                    value={disc.id}
                    className="flex-1 min-w-[150px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {disc.codigo}
                  </TabsTrigger>
                ))}
              </TabsList>

              {disciplinas.map((disc) => (
                <TabsContent key={disc.id} value={disc.id} className="mt-4">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Bot className="h-5 w-5 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg">{disc.nome}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Professor Virtual: {disc.professor.nome}
                          </p>
                          <Badge variant="secondary" className="mt-2">
                            Powered by IA
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <ScrollArea 
                      ref={scrollAreaRef}
                      className="h-[450px] w-full rounded-lg border border-border bg-card/50 p-4"
                    >
                      <div className="space-y-4">
                        {currentMessages.length === 0 ? (
                          <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="p-4 rounded-full bg-primary/10 mb-4">
                              <Bot className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                              Olá! Sou seu professor virtual
                            </h3>
                            <p className="text-sm text-muted-foreground max-w-md">
                              Estou aqui para ajudar com suas dúvidas sobre {disc.nome}. 
                              Pergunte qualquer coisa sobre a disciplina!
                            </p>
                          </div>
                        ) : (
                          currentMessages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex gap-3 ${
                                message.role === "user" ? "flex-row-reverse" : ""
                              }`}
                            >
                              <Avatar className="h-8 w-8 border-2 border-border">
                                <AvatarFallback
                                  className={
                                    message.role === "assistant"
                                      ? "bg-primary/20 text-primary"
                                      : "bg-accent/20 text-accent"
                                  }
                                >
                                  {message.role === "assistant" ? (
                                    <Bot className="h-4 w-4" />
                                  ) : (
                                    <UserIcon className="h-4 w-4" />
                                  )}
                                </AvatarFallback>
                              </Avatar>
                              <div
                                className={`flex-1 max-w-[80%] ${
                                  message.role === "user" ? "items-end" : ""
                                }`}
                              >
                                <div
                                  className={`rounded-lg p-4 ${
                                    message.role === "user"
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted border border-border"
                                  }`}
                                >
                                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                                    {message.content}
                                  </p>
                                  <p className="text-xs opacity-70 mt-2">
                                    {message.timestamp}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                        {isLoading && (
                          <div className="flex gap-3">
                            <Avatar className="h-8 w-8 border-2 border-border">
                              <AvatarFallback className="bg-primary/20 text-primary">
                                <Bot className="h-4 w-4 animate-pulse" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 max-w-[80%]">
                              <div className="rounded-lg p-4 bg-muted border border-border">
                                <div className="flex gap-1">
                                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                                  <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </ScrollArea>

                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Digite sua dúvida sobre a disciplina..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        className="min-h-[60px] resize-none"
                        disabled={isLoading}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim() || isLoading}
                        className="h-[60px] px-6"
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      Pressione Enter para enviar, Shift+Enter para nova linha
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
