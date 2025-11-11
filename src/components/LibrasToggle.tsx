import { HandMetal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

const VLIBRAS_BUTTON_SELECTOR = '[vw-access-button]';

export function LibrasToggle() {
  const { toast } = useToast();
  const [isVlibrasLoading, setIsVlibrasLoading] = useState(false);

  // Função central para forçar a ativação e visibilidade
  const forceActivateVlibras = (btnElement: Element) => {
    if (isVlibrasLoading) return;
    setIsVlibrasLoading(true);

    const btn = btnElement as HTMLElement;

    // 1. Força a visibilidade inicial do botão de acesso
    btn.style.display = "block";
    btn.style.visibility = "visible";
    btn.style.opacity = "1";

    // 2. Simula o clique
    btn.click();

    // 3. Força a visibilidade do WRAPPER do plugin após o clique
    window.setTimeout(() => {
      const wrapper = document.querySelector('[vw-plugin-wrapper]') as HTMLElement;
      
      if (wrapper) {
        wrapper.style.display = "block";
        wrapper.style.visibility = "visible";
        wrapper.style.opacity = "1";
        
        // Removido: deixar o plugin controlar a visibilidade do container


        toast({
          title: "VLibras ativado ✅",
          description: "O avatar deve aparecer no canto da tela.",
        });
      } else {
         toast({
          title: "Erro ao mostrar avatar",
          description: "O wrapper do VLibras não foi encontrado. Verifique o console.",
          variant: "destructive",
        });
      }
      setIsVlibrasLoading(false);
    }, 750);
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