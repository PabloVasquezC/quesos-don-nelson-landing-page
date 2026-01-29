"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const whatsappMessage = `Hola! Soy ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Contacto
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-6 text-balance">
            Haz Tu Pedido
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estamos listos para atenderte. Contactanos para hacer tu pedido 
            o resolver cualquier duda sobre nuestros productos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Envianos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Tu numero de telefono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje / Pedido
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe tu pedido o consulta..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                Enviar por WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Informacion de Contacto
            </h3>
            
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefono</p>
                  <p className="text-muted-foreground">Contactanos por WhatsApp</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">quesosdonnelson@email.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Ubicacion</p>
                  <p className="text-muted-foreground">Entregas a domicilio disponibles</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="font-medium text-foreground mb-4">Siguenos en Redes</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/quesosdonnelson/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Seguir en Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/quesosdonnelson/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                  aria-label="Seguir en Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
