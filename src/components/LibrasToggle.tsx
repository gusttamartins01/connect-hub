import { useState } from "react";
import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function LibrasToggle() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleActivate = () => {
    setOpen(true);
    toast({
      title: "Recurso de Libras",
      description: "Este é um recurso de acessibilidade em desenvolvimento.",
    });
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={handleActivate}
        className="border-border bg-background hover:bg-accent"
        title="Acessibilidade em Libras"
      >
        <HandMetal className="h-5 w-5" />
        <span className="sr-only">Ativar Libras</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <HandMetal className="h-5 w-5 text-primary" />
              Acessibilidade em Libras
            </DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <p>
                Este recurso está em desenvolvimento e oferecerá tradução em Libras (Língua Brasileira de Sinais)
                para todo o conteúdo da plataforma.
              </p>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-semibold mb-2">Funcionalidades previstas:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Interpretação em vídeo de textos importantes</li>
                  <li>Avatar virtual para tradução em tempo real</li>
                  <li>Glossário de termos técnicos em Libras</li>
                  <li>Suporte completo à navegação</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Para mais informações sobre acessibilidade, entre em contato com a coordenação do curso.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
