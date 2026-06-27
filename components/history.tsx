import Image from "next/image"
import { client, queries, tags, urlFor } from "@/lib/sanity"

interface HistorySection {
  title: string
  content: string
  image?: { asset?: { _ref: string } }
}

interface HistoryData {
  sectionLabel: string
  title: string
  intro: string
  sections: HistorySection[]
}

const defaultSections: HistorySection[] = [
  {
    title: "Un Sueño que Trascendió Fronteras",
    content: "Todo comenzó con Nelson Gutiérrez, un productor lechero empeñoso y trabajador, quien dedicó su vida a la producción de leche y a la elaboración de quesos frescos que se convirtieron en un sello de calidad en la comuna de Curicó. Su gran anhelo era construir una fábrica propia para trabajar junto a su familia, un sueño que no alcanzó a ver realizado debido a su repentino fallecimiento.\n\nSin embargo, el amor de una hija es capaz de mover montañas. Karen, quien en aquel entonces residía en la República Checa, decidió cambiar su vida allá para regresar a sus raíces y cumplir la promesa hecha a su padre. Junto a su marido checo, y con el apoyo incondicional de su madre, transformaron ese anhelo en una realidad que hoy integra a la tercera generación: sus dos pequeños hijos.",
  },
  {
    title: "Tradición y Reconocimiento",
    content: "Hoy, con perseverancia y trabajo duro, nuestra fábrica es una realidad que celebra el campo chileno. Nuestros productos artesanales han sido galardonados con el sello de calidad \"Manos Campesinas\" y formamos parte de la Selección Nacional de Pymes de Chile.",
  },
  {
    title: "Vive la Experiencia Don Nelson: Mucho más que Quesos",
    content: "Queremos que seas parte de nuestra historia. Por eso, hemos abierto las puertas de nuestro campo para ofrecerte una experiencia de alojamiento única, diseñada para quienes buscan desconectarse y reconectar con la esencia de la vida rural en la Región del Maule.",
  },
]

function renderParagraphs(text: string) {
  return text.split("\n\n").map((paragraph, i) => {
    const lines = paragraph.split("\n")
    return (
      <div key={i} className="mb-4">
        {lines.map((line, j) => {
          if (line.startsWith("• ")) {
            const parts = line.slice(2).split(": ")
            return (
              <p key={j} className="ml-4 mb-2 text-muted-foreground/80 leading-relaxed">
                <span className="font-semibold text-foreground">{parts[0]}:</span>{" "}
                {parts.slice(1).join(": ")}
              </p>
            )
          }
          return (
            <p key={j} className="text-muted-foreground/80 leading-relaxed mb-2">
              {line}
            </p>
          )
        })}
      </div>
    )
  })
}

export async function History() {
  let data: HistoryData | null = null

  try {
    data = await client.fetch<HistoryData>(queries.history, {}, { next: { tags: [tags.history] } })
  } catch {
    // Fallback
  }

  const sectionLabel = data?.sectionLabel || "Nuestra Historia"
  const title = data?.title || "El Legado de Quesería Artesanal Don Nelson"
  const intro = data?.intro || "A solo 6,1 km de la carretera 5 Sur, en el sector Los Castaños de Los Niches, Curicó, se encuentra Quesería Artesanal Don Nelson."
  const sections = data?.sections?.length ? data.sections : defaultSections

  return (
    <section id="historia" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            {sectionLabel}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            {intro}
          </p>
        </div>

        {/* Story Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {section.image ? (
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={urlFor(section.image).url()}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary/30 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl">
                          {index === 0 ? "🥛" : index === 1 ? "🏆" : "🏡"}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm italic">
                        Imagen de {section.title.toLowerCase()}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 bg-primary rounded-full" />
                  <span className="text-primary font-bold tracking-widest uppercase text-xs">
                    {`0${index + 1}`}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {section.title}
                </h3>
                <div className="text-lg leading-relaxed">
                  {renderParagraphs(section.content)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
