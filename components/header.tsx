import { client, queries, tags } from "@/lib/sanity"
import { HeaderClient } from "./header-client"

interface SiteSettingsData {
  brandName: string
  tagline: string
  logo?: { asset?: { _ref: string } }
  headerNav?: Array<{ label: string; href: string }>
  headerCta?: { label: string; href: string }
}

export async function Header() {
  let data: SiteSettingsData | null = null

  try {
    data = await client.fetch<SiteSettingsData>(queries.siteSettings, {}, { next: { tags: [tags.siteSettings] } })
  } catch {
    // Fallback
  }

  const brandName = data?.brandName || "Don Nelson"
  const tagline = data?.tagline || "Queseria Artesanal"
  const logo = data?.logo || null
  const navItems = data?.headerNav || [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ]
  const cta = data?.headerCta || { label: "Hacer Pedido", href: "#contacto" }

  return (
    <HeaderClient
      brandName={brandName}
      tagline={tagline}
      logo={logo}
      navItems={navItems}
      cta={cta}
    />
  )
}
