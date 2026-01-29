import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cheese.jpg"
          alt="Quesos artesanales Don Nelson"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Logo in Hero */}
          <div className="mb-8">
            <Image
              src="/images/logo.jpg"
              alt="Queseria Don Nelson Logo"
              width={180}
              height={180}
              className="w-32 h-32 md:w-44 md:h-44 object-contain rounded-lg shadow-2xl"
            />
          </div>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Queseria Artesanal Chilena
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 text-balance">
            Queseria Don Nelson
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Quesos artesanales elaborados con la receta familiar que ha pasado de generacion en generacion. 
            Del campo a tu mesa, con el sabor autentico de nuestra tierra chilena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            >
              <Link href="#productos">Ver Productos</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-base px-8 bg-transparent"
            >
              <Link href="#nosotros">Nuestra Historia</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
