import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Queseria Don Nelson"
                width={60}
                height={60}
                className="w-14 h-14 object-contain rounded-lg"
              />
              <div>
                <p className="font-serif font-bold text-white text-lg">Don Nelson</p>
                <p className="text-xs text-white/70 tracking-wider uppercase">Queseria Artesanal</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Quesos artesanales elaborados con tradicion y pasion. 
              Del campo a tu mesa con el mejor sabor chileno.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Enlaces</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#inicio" className="text-white/80 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="#productos" className="text-white/80 hover:text-white transition-colors">
                Productos
              </Link>
              <Link href="#nosotros" className="text-white/80 hover:text-white transition-colors">
                Nosotros
              </Link>
              <Link href="#contacto" className="text-white/80 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Redes Sociales</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.instagram.com/quesosdonnelson/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Seguir en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/quesosdonnelson/" 
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
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            {new Date().getFullYear()} Queseria Don Nelson. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
