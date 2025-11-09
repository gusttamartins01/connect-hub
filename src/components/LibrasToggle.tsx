import { useEffect, useState } from "react";
import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function LibrasToggle() {
  const { toast } = useToast();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const checkButton = () => {
      const btn = document.querySelector("div[vw-access-button]");
      if (btn) {
        setReady(true);
      }
    };

    checkButton();

    const observer = new MutationObserver(() => {
      checkButton();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleActivate = () => {
    try {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
      console.log("VLibras ativado diretamente.");
    } catch (error) {
      toast({
        title: "Erro ao ativar Libras",
        description: "Não foi possível iniciar o VLibras. Verifique se o script foi carregado corretamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleActivate}
      disabled={!ready}
      className="border-border bg-background hover:bg-accent"
      title="Acessibilidade em Libras (VLibras)"
    >
      <HandMetal className="h-5 w-5" />
      <span className="sr-only">Ativar VLibras</span>
    </Button>
  );
}