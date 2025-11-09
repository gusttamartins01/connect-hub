import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function LibrasToggle() {
  const { toast } = useToast();

  const handleActivate = () => {
    const accessButton = document.querySelector('[vw-access-button]') as HTMLElement;
    
    if (accessButton) {
      // Força a exibição do botão do VLibras
      accessButton.style.display = 'block';
      accessButton.style.visibility = 'visible';
      accessButton.style.opacity = '1';
      
      // Clica no botão para ativar o widget
      accessButton.click();
      
      // Garante que o plugin wrapper esteja visível
      setTimeout(() => {
        const pluginWrapper = document.querySelector('[vw-plugin-wrapper]') as HTMLElement;
        if (pluginWrapper) {
          pluginWrapper.style.display = 'block';
          pluginWrapper.style.visibility = 'visible';
        }
        
        const accessButtonAgain = document.querySelector('[vw-access-button]') as HTMLElement;
        if (accessButtonAgain) {
          accessButtonAgain.style.display = 'block';
          accessButtonAgain.style.visibility = 'visible';
          accessButtonAgain.style.opacity = '1';
        }
      }, 500);
      
      toast({
        title: "VLibras ativado",
        description: "O avatar de Libras deve aparecer no canto inferior direito da tela.",
      });
    } else {
      toast({
        title: "VLibras não está disponível",
        description: "Aguarde alguns segundos e recarregue a página.",
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
