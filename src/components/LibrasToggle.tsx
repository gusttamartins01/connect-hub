import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function LibrasToggle() {
  const { toast } = useToast();

  const handleActivate = () => {
    const VLib = window.VLibras;

    if (VLib?.Widget) {
      new VLib.Widget("https://vlibras.gov.br/app");

      toast({
        title: "VLibras ativado",
        description: "O avatar de Libras foi iniciado com sucesso.",
      });
    } else {
      toast({
        title: "VLibras não carregado",
        description: "O script ainda não foi carregado. Aguarde alguns segundos.",
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
