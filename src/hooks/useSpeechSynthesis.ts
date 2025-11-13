export function useSpeechSynthesis() {
  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    utterance.rate = 1; // velocidade normal
    speechSynthesis.speak(utterance);
  };

  return { speak };
}
