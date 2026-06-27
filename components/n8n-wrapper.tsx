import { client, queries, tags } from "@/lib/sanity"
import { N8nChat } from "./N8n"

interface ChatSettings {
  enabled: boolean
  webhookUrl: string
  welcomeMessage: string
  title: string
  footer: string
}

interface SiteSettingsData {
  chatSettings?: ChatSettings
}

export async function N8nChatWrapper() {
  let data: SiteSettingsData | null = null

  try {
    data = await client.fetch<SiteSettingsData>(queries.siteSettings, {}, { next: { tags: [tags.siteSettings] } })
  } catch {
    // Fallback
  }

  const chat = data?.chatSettings

  if (!chat?.enabled || !chat?.webhookUrl) {
    return null
  }

  return (
    <N8nChat
      webhookUrl={chat.webhookUrl}
      title={chat.title || "Quesos Don Nelson"}
      footer={chat.footer || "Quesos Don Nelson"}
      welcomeMessage={chat.welcomeMessage || "👋 Hola! Soy el asistente virtual de Quesos Don Nelson y estoy aqui para ayudarte."}
    />
  )
}
