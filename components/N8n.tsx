"use client"
import { useEffect } from "react"
import "@n8n/chat/style.css"

interface N8nChatProps {
  webhookUrl: string
  title: string
  footer: string
  welcomeMessage: string
}

export function N8nChat({ webhookUrl, title, footer, welcomeMessage }: N8nChatProps) {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl,
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        loadPreviousSession: true,
        showWelcomeScreen: false,
        initialMessages: [welcomeMessage],
        i18n: {
          en: {
            title,
            subtitle: "Asistencia Virtual",
            inputPlaceholder: "Escribe aqui..",
            footer,
            getStarted: "Comenzar",
            closeButtonTooltip: "Cerrar",
          },
        },
      })
    })
  }, [webhookUrl, title, footer, welcomeMessage])

  return null
}
