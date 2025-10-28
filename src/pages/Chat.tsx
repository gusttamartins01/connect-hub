import { useState } from "react";
import { Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { disciplinas } from "@/data/mockData";

interface Message {
  id: string;
  sender: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isMe: boolean;
}

const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      sender: "Prof. Dr. Carlos Silva",
      senderAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      content: "Pessoal, não esqueçam da lista de exercícios para segunda-feira!",
      timestamp: "10:30",
      isMe: false,
    },
    {
      id: "2",
      sender: "Você",
      senderAvatar: "",
      content: "Professor, poderia esclarecer a questão 5?",
      timestamp: "10:35",
      isMe: true,
    },
  ],
  "2": [
    {
      id: "1",
      sender: "Profa. Dra. Ana Santos",
      senderAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content: "Boa tarde! Lembrete: prazo para o projeto de modelagem é amanhã.",
      timestamp: "14:20",
      isMe: false,
    },
  ],
  "3": [
    {
      id: "1",
      sender: "Prof. Me. Roberto Lima",
      senderAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      content: "Material complementar disponível no portal.",
      timestamp: "09:15",
      isMe: false,
    },
  ],
  "4": [
    {
      id: "1",
      sender: "Profa. Dra. Maria Costa",
      senderAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content: "Pessoal, aula prática no laboratório amanhã!",
      timestamp: "16:45",
      isMe: false,
    },
  ],
  "5": [
    {
      id: "1",
      sender: "Prof. Dr. João Oliveira",
      senderAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content: "Slides da última aula já estão disponíveis.",
      timestamp: "11:20",
      isMe: false,
    },
  ],
};

export default function Chat() {
  const [selectedDisciplina, setSelectedDisciplina] = useState(disciplinas[0].id);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: "Você",
      senderAvatar: "",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      isMe: true,
    };

    setMessages((prev) => ({
      ...prev,
      [selectedDisciplina]: [...(prev[selectedDisciplina] || []), message],
    }));

    setNewMessage("");
  };

  const currentMessages = messages[selectedDisciplina] || [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Chat das Disciplinas
          </h1>
          <p className="text-muted-foreground">
            Tire suas dúvidas e interaja com professores e colegas
          </p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Chats por Disciplina</CardTitle>
            <CardDescription>Selecione uma disciplina para ver o chat</CardDescription>
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
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <h3 className="font-semibold text-lg">{disc.nome}</h3>
                      <p className="text-sm text-muted-foreground">
                        Professor: {disc.professor.nome}
                      </p>
                    </div>

                    <ScrollArea className="h-[400px] w-full rounded-lg border border-border p-4 bg-card">
                      <div className="space-y-4">
                        {currentMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex gap-3 ${message.isMe ? "flex-row-reverse" : ""}`}
                          >
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={message.senderAvatar} />
                              <AvatarFallback>
                                {message.sender
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div
                              className={`flex-1 max-w-[70%] ${message.isMe ? "items-end" : ""}`}
                            >
                              <div
                                className={`rounded-lg p-3 ${
                                  message.isMe
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted"
                                }`}
                              >
                                <p className="text-sm font-medium mb-1">{message.sender}</p>
                                <p className="text-sm">{message.content}</p>
                                <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>

                    <div className="flex gap-2">
                      <Input
                        placeholder="Digite sua mensagem..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
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
