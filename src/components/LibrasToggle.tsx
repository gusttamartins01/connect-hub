import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function LibrasToggle() {
  const { toast } = useToast();

  const handleActivate = () => {
    const btn = document.querySelector("[vw-access-button]") as HTMLElement;

    if (!btn) {
      toast({
        title: "VLibras não carregou",
        description: "Recarregue a página.",
        variant: "destructive",
      });
      return;
    }

    // ✅ Apenas ativa o plugin — SEM FORÇAR CSS
    btn.click();

    toast({
      title: "VLibras ativado ✅",
      description: "O avatar deve aparecer no canto da tela.",
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleActivate}
      title="Acessibilidade em Libras (VLibras)"
    >
      <HandMetal className="h-5 w-5" />
      <span className="sr-only">Ativar VLibras</span>
    </Button>
  );
}
