import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { client, queries, urlFor } from "@/lib/sanity"

interface Product {
  name: string
  description: string
  image?: { asset?: { _ref: string } }
}

const fallbackProducts = [
  {
    name: "Queso de Mano",
    description: "El clasico queso de mano, suave y cremoso. Perfecto para arepas y cachapas.",
    image: null,
  },
  {
    name: "Queso Llanero",
    description: "Queso semiduro con sabor intenso, ideal para rallar o disfrutar solo.",
    image: null,
  },
  {
    name: "Queso Fresco",
    description: "Suave, fresco y versatil. El acompanante perfecto para cualquier comida.",
    image: null,
  },
]

const fallbackImages = ["/images/queso-fresco.jpg", "/images/artisan-production.jpg", "/images/hero-cheese.jpg"]

export async function Products() {
  let products: Product[] = []

  try {
    products = await client.fetch<Product[]>(queries.products)
  } catch {
    // Fallback
  }

  const displayProducts = products.length > 0 ? products : fallbackProducts

  return (
    <section id="productos" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Nuestros Productos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 text-balance">
            Quesos con Sabor a Tradicion
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada queso es elaborado a mano con leche fresca de nuestra region, 
            siguiendo tecnicas artesanales que garantizan la mejor calidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => {
            const imageUrl = product.image
              ? urlFor(product.image).url()
              : fallbackImages[index] || "/placeholder.svg"

            return (
              <Card 
                key={product.name} 
                className="group overflow-hidden border-border bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic">
            Todos nuestros productos son elaborados diariamente para garantizar frescura y calidad.
          </p>
        </div>
      </div>
    </section>
  )
}
