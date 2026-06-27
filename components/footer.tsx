import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"
import { client, queries } from "@/lib/sanity"

interface FooterData {
  quote: string
  navLinks: Array<{ label: string; href: string }>
}

interface SiteSettingsData {
  brandName: string
  tagline: string
  socialLinks?: {
    instagram: string
    facebook: string
  }
  footerCredit: string
  footerCreditUrl: string
}

export async function Footer() {
  let footerData: FooterData | null = null
  let settingsData: SiteSettingsData | null = null

  try {
    ;[footerData, settingsData] = await Promise.all([
      client.fetch<FooterData>(queries.footer),
      client.fetch<SiteSettingsData>(queries.siteSettings),
    ])
  } catch {
    // Fallback
  }

  const brandName = settingsData?.brandName || "Don Nelson"
  const tagline = settingsData?.tagline || "Queseria Artesanal"
  const quote = footerData?.quote || "Quesos artesanales elaborados con tradicion y pasion. Del campo a tu mesa con el mejor sabor chileno."
  const navLinks = footerData?.navLinks || [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ]
  const instagramUrl = settingsData?.socialLinks?.instagram || "https://www.instagram.com/quesosdonnelson/"
  const facebookUrl = settingsData?.socialLinks?.facebook || "https://www.facebook.com/quesosdonnelson/"
  const credit = settingsData?.footerCredit || "Desarrollado con ♥ por Fluxia"
  const creditUrl = settingsData?.footerCreditUrl || "https://fluxia.cl"

  return (
    <footer className="bg-[oklch(0.28_0.08_295)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt={`Queseria ${brandName}`}
                width={60}
                height={60}
                className="w-14 h-14 object-contain rounded-lg"
              />
              <div>
                <p className="font-serif font-bold text-white text-lg">{brandName}</p>
                <p className="text-xs text-white/70 tracking-wider uppercase">{tagline}</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              &ldquo;{quote}&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-white/80 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Redes Sociales</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Seguir en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Seguir en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              Siguenos para ver nuestros productos y ofertas especiales.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Queseria {brandName}. Todos los derechos reservados.
          </p>
          <p className="text-center text-white/60 text-sm flex items-center gap-1">
            {credit.split("♥").map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-red-500">♥</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
