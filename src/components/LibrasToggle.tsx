import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

const VLIBRAS_BUTTON_SELECTOR = '[vw-access-button]';

export function LibrasToggle() {
  const { toast } = useToast();
  const [isVlibrasLoading, setIsVlibrasLoading] = useState(false);

  // Função para ativar o VLibras clicando no botão nativo
  const forceActivateVlibras = (btnElement: Element) => {
    if (isVlibrasLoading) return;
    setIsVlibrasLoading(true);

    const btn = btnElement as HTMLElement;
    
    // Clica no botão nativo do VLibras
    btn.click();

    // Aguarda o plugin carregar
    window.setTimeout(() => {
      setIsVlibrasLoading(false);
      toast({
        title: "VLibras ativado ✅",
        description: "Clique no botão azul no canto da tela para abrir o avatar.",
      });
    }, 500);
  };

  // Função para lidar com o clique do usuário
  const handleUserClick = () => {
    const btn = document.querySelector(VLIBRAS_BUTTON_SELECTOR);

    if (btn) {
      forceActivateVlibras(btn);
    } else {
      toast({
        title: "Carregando VLibras...",
        description: "Aguarde, tentando localizar o widget no DOM.",
      });

      setIsVlibrasLoading(true);

      // ✅ AJUSTE FINAL: Usando 'const' e inicializando na mesma linha.
      // Isso elimina o warning do linter.
      const interval = window.setInterval(() => {
        const foundBtn = document.querySelector(VLIBRAS_BUTTON_SELECTOR);
        if (foundBtn) {
          window.clearInterval(interval);
          forceActivateVlibras(foundBtn);
        }
      }, 500);

      // Timeout final para o caso de falha total
      window.setTimeout(() => {
        const finalBtnCheck = document.querySelector(VLIBRAS_BUTTON_SELECTOR);
        if (!finalBtnCheck) {
          window.clearInterval(interval);
          setIsVlibrasLoading(false);
          toast({
            title: "Falha no Carregamento",
            description: "O script do VLibras não está no DOM. Verifique o `index.html`.",
            variant: "destructive",
          });
        }
      }, 5000);
    }
  }


  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleUserClick}
      title="Acessibilidade em Libras (VLibras)"
      disabled={isVlibrasLoading} 
    >
      <HandMetal className="h-5 w-5" />
      <span className="sr-only">Ativar VLibras</span>
    </Button>
  );
}