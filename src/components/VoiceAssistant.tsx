import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

export default function VoiceAssistant() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Desativado");
  const { listening, setListening } = useSpeechRecognition(handleCommand);

  // 🔊 Função para falar em voz alta
  function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  }

  // 🧠 Função que interpreta comandos falados
  function handleCommand(command: string) {
    console.log("🎤 Comando reconhecido:", command);
    setStatus(`Comando: ${command}`);

    const cmd = command.toLowerCase();

    if (cmd.includes("home") || cmd.includes("início") || cmd.includes("principal")) {
      navigate("/");
      speak("Indo para a página inicial.");
    } else if (cmd.includes("calendário") || cmd.includes("agenda") || cmd.includes("datas")) {
      navigate("/calendario");
      speak("Abrindo o calendário.");
    } else if (cmd.includes("disciplina") || cmd.includes("matéria") || cmd.includes("aulas")) {
      navigate("/disciplinas");
      speak("Abrindo as disciplinas.");
    } else if (cmd.includes("professor") || cmd.includes("docente") || cmd.includes("mestre")) {
      navigate("/professores");
      speak("Mostrando a lista de professores.");
    } else if (cmd.includes("chat") || cmd.includes("mensagem") || cmd.includes("conversa")) {
      navigate("/chat");
      speak("Abrindo o chat.");
    } else if (cmd.includes("grade") || cmd.includes("currículo") || cmd.includes("curso")) {
      navigate("/grade-curricular");
      speak("Mostrando a grade curricular.");
    } else if (cmd.includes("comunidade") || cmd.includes("grupo") || cmd.includes("rede")) {
      navigate("/comunidade");
      speak("Entrando na comunidade.");
    } else if (cmd.includes("notas") || cmd.includes("resultado") || cmd.includes("boletim")) {
      navigate("/notas");
      speak("Exibindo suas notas.");
    } else if (cmd.includes("requerimento") || cmd.includes("pedido") || cmd.includes("solicitação")) {
      navigate("/requerimentos");
      speak("Abrindo os requerimentos.");
    } else if (cmd.includes("baixo") || cmd.includes("rolar") || cmd.includes("descer")) {
      window.scrollBy({ top: 600, behavior: "smooth" });
      speak("Descendo a página.");
    } else if (cmd.includes("cima") || cmd.includes("subir")) {
      window.scrollBy({ top: -600, behavior: "smooth" });
      speak("Subindo a página.");
    } else if (cmd.includes("parar") || cmd.includes("desativar") || cmd.includes("silêncio")) {
      setListening(false);
      speak("Assistente de voz pausada.");
    } else {
      speak("Desculpe, não entendi o comando. Tente novamente.");
    }
  }

  // 🧩 Renderização do botão flutuante
  return (
    <button
      aria-label={listening ? "Desativar assistente de voz" : "Ativar assistente de voz"}
      style={{
        position: "fixed",
        bottom: "40px", // 🔼 subido um pouco (antes era 20px)
        right: "50px",
        zIndex: 9999,
        background: listening
          ? "linear-gradient(45deg, #4ade80, #22c55e)"
          : "linear-gradient(45deg, #64748b, #475569)",
        color: "white",
        borderRadius: "50%",
        width: "70px", 
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        cursor: "pointer",
        border: "none",
        transition: "transform 0.3s ease, background 0.3s ease",
        transform: listening ? "scale(1.05)" : "scale(1)",
      }}
      onClick={() => {
        setListening(!listening);
        if (!listening) speak("Assistente de voz ativada. Pode falar comigo.");
        else speak("Assistente de voz desativada.");
      }}
      title={status}
    >
      {listening ? <Mic size={32} /> : <MicOff size={32} />}
    </button>
  );
}
