import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Definimos o tipo de dado que esperamos do objeto VLibras, para usarmos localmente.
type VLibrasType = {
  Widget?: new (url: string) => void;
};


export function LibrasToggle() {
  const { toast } = useToast();

  const handleActivate = () => {
    
    // ✅ CORREÇÃO: Removemos o '(window as any)' e acessamos diretamente,
    // forçando a tipagem do resultado para VLibrasType.
    // Isso evita o erro de linter 'Unexpected any'.
    
    const VLib = (window as Window & { VLibras?: VLibrasType | undefined }).VLibras;

    // Verificamos a existência do objeto e da propriedade Widget
    if (VLib?.Widget) {
      
      // A inicialização real ocorre no index.html. 
      // Este botão apenas confirma a ativação e fornece feedback.
      toast({
        title: "VLibras ativado",
        description: "O avatar de Libras foi iniciado com sucesso.",
      });

    } else {
      // Script ainda não carregou
      toast({
        title: "VLibras não carregado",
        description: "O script VLibras ainda não foi carregado. Tente novamente em alguns segundos.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleActivate}
      className="border-border bg-background hover:bg-accent"
      title="Acessibilidade em Libras (VLibras)"
    >
      <HandMetal className="h-5 w-5" />
      <span className="sr-only">Ativar VLibras</span>
    </Button>
  );
}