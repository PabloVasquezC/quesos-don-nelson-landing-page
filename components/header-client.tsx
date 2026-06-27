"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { urlFor } from "@/lib/sanity"

interface NavItem {
  label: string
  href: string
}

interface HeaderClientProps {
  brandName: string
  tagline: string
  logo?: SanityImageSource | null
  navItems: NavItem[]
  cta: { label: string; href: string }
}

export function HeaderClient({ brandName, tagline, logo, navItems, cta }: HeaderClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", href)
    }
    setIsMenuOpen(false)
  }

  const logoSrc = logo ? urlFor(logo).url() : "/images/logo.jpg"

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image
                src={logoSrc}
                alt={`Quesería ${brandName}`}
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
            </motion.div>
            <div className="hidden sm:block">
              <p className="font-serif font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">{brandName}</p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">{tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="relative text-foreground hover:text-primary transition-colors font-medium group"
              >
                {item.label}
                <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={cta.href} onClick={(e) => handleScroll(e, cta.href)}>{cta.label}</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navItems.map((item, index) => (
                <motion.div key={item.label} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 }}>
                  <Link href={item.href} className="text-foreground hover:text-primary transition-colors font-medium py-2 block" onClick={(e) => handleScroll(e, item.href)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 w-full">
                  <Link href={cta.href} onClick={(e) => handleScroll(e, cta.href)}>{cta.label}</Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
