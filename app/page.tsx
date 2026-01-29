import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FadeIn direction="down" duration={0.8} once={true}>
          <Hero />
        </FadeIn>

        <FadeIn direction="up" delay={0.2} duration={0.8}>
          <Products />
        </FadeIn>

        <FadeIn direction="up" duration={0.8}>
          <About />
        </FadeIn>

        <FadeIn direction="up" duration={0.8}>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </>
  )
}
