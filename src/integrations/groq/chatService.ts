// src/integrations/groq/chatService.ts
export async function sendChatToGroq(messages: { role: string; content: string }[]) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer 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`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-70b-versatile", // modelo mais estável da Groq
      messages,
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro na Groq API: ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Sem resposta da IA.";
}
