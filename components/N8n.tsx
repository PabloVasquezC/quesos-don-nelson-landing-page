"use client"
import { useEffect } from "react"
import "@n8n/chat/style.css";


export function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://n8n.fluxia.cl/webhook/15a48a2f-3f5b-4f73-8378-75f8cd4f6a2e/chat",
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        loadPreviousSession: true,
        showWelcomeScreen: false,
        initialMessages: [
          "👋 Hola! Soy el asistente virtual de Quesos don Nelson para ayudarte."
        ],
        i18n: {
          en: {
            title: "Quesos Don Nelson",
            subtitle: "Asistencia Virtual",
            inputPlaceholder: "Escribe aqui..",
          },
        },
      });
    });
  }, []);

  return null;
}
