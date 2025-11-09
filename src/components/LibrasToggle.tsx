import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function LibrasToggle() {
  const { toast } = useToast();

  const handleActivate = () => {
    // Ativa programaticamente o VLibras simulando evento de clique
    const vlibrasDiv = document.querySelector('[vw]');
    const accessButton = document.querySelector('[vw-access-button]') as HTMLElement;
    
    if (vlibrasDiv && accessButton) {
      // Simula o clique no botão de acesso
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      accessButton.dispatchEvent(clickEvent);
      
      // Força a exibição do widget
      setTimeout(() => {
        const pluginWrapper = document.querySelector('[vw-plugin-wrapper]') as HTMLElement;
        if (pluginWrapper) {
          pluginWrapper.style.display = 'block';
        }
      }, 100);
      
      toast({
        title: "VLibras ativado",
        description: "O tradutor de Libras foi iniciado. Use o avatar no canto da tela.",
      });
    } else {
      toast({
        title: "VLibras não está disponível",
        description: "Aguarde alguns segundos e tente novamente.",
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
