import Image from "next/image"
import { client, queries, urlFor } from "@/lib/sanity"

interface Feature {
  title: string
  description: string
}

interface AboutData {
  sectionLabel: string
  title: string
  paragraphs: string[]
  mainImage?: { asset?: { _ref: string } }
  videos?: Array<{ title: string; url: string }>
  features: Feature[]
}

const fallbackFeatures: Feature[] = [
  {
    title: "Tradicion Familiar",
    description: "Recetas heredadas de generacion en generacion que mantienen vivo el sabor autentico.",
  },
  {
    title: "Ingredientes Naturales",
    description: "Utilizamos solo leche fresca de la mejor calidad, sin aditivos ni conservantes.",
  },
  {
    title: "Elaboracion Artesanal",
    description: "Cada queso es hecho a mano con dedicacion y el cuidado que merece.",
  },
  {
    title: "Frescura Garantizada",
    description: "Produccion diaria para llevar a tu mesa productos siempre frescos.",
  },
]

export async function About() {
  let data: AboutData | null = null

  try {
    data = await client.fetch<AboutData>(queries.about)
  } catch {
    // Fallback
  }

  const sectionLabel = data?.sectionLabel || "Nuestra Historia"
  const title = data?.title || "Del Campo a Tu Mesa, con Amor y Tradicion"
  const paragraphs = data?.paragraphs || [
    "Queseria Don Nelson nacio del amor por las tradiciones de nuestra tierra chilena. Con anos de experiencia y el conocimiento transmitido por generaciones, nos dedicamos a elaborar quesos artesanales que llevan el sabor autentico del campo.",
    "Cada dia, con las primeras luces del amanecer, comenzamos nuestro trabajo utilizando las mejores tecnicas artesanales para crear productos que honran nuestra herencia culinaria chilena.",
  ]
  const features = data?.features?.length ? data.features : fallbackFeatures

  const mainImage = data?.mainImage
    ? urlFor(data.mainImage).url()
    : "/images/countryside.jpg"

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={mainImage}
                alt="Campo y tradicion de Queseria Don Nelson"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-lg -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              {sectionLabel}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-6 text-balance">
              {title}
            </h2>
            <div className="space-y-4 mb-10">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
