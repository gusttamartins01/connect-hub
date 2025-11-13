import { NavigateFunction } from "react-router-dom";

export function handleVoiceCommand(command: string, navigate: NavigateFunction) {
  if (command.includes("início") || command.includes("home")) {
    navigate("/");
  } else if (command.includes("notas")) {
    navigate("/notas");
  } else if (command.includes("professores")) {
    navigate("/professores");
  } else if (command.includes("disciplinas")) {
    navigate("/disciplinas");
  } else if (command.includes("calendário") || command.includes("agenda")) {
    navigate("/calendario");
  } else if (command.includes("comunidade")) {
    navigate("/comunidade");
  } else if (command.includes("login")) {
    navigate("/login");
  } else if (command.includes("requerimentos") || command.includes("requisitos")) {
    navigate("/requerimentos");
  } else if (command.includes("sair")) {
    navigate("/login");
  } else {
    console.log("❌ Comando não reconhecido:", command);
  }
}
