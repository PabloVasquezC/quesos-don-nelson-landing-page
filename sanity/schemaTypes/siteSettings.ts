import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Nombre de la Marca',
      type: 'string',
      initialValue: 'Quesos Don Nelson',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Quesos de Cabra Artesanales',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Meta Title', type: 'string'}),
        defineField({name: 'description', title: 'Meta Description', type: 'text'}),
        defineField({name: 'ogImage', title: 'OG Image', type: 'image', options: {hotspot: true}}),
      ],
    }),
    defineField({
      name: 'headerNav',
      title: 'Navegación del Header',
      type: 'array',
      of: [
        defineField({
          name: 'navItem',
          title: 'Item',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Texto', type: 'string'}),
            defineField({name: 'href', title: 'Enlace', type: 'string'}),
          ],
        }),
      ],
      initialValue: [
        {label: 'Inicio', href: '#inicio'},
        {label: 'Productos', href: '#productos'},
        {label: 'Nosotros', href: '#nosotros'},
        {label: 'Contacto', href: '#contacto'},
      ],
    }),
    defineField({
      name: 'headerCta',
      title: 'Botón CTA del Header',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Texto', type: 'string'}),
        defineField({name: 'href', title: 'Enlace', type: 'string'}),
      ],
      initialValue: {label: 'Hacer Pedido', href: '#contacto'},
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        defineField({name: 'instagram', title: 'Instagram URL', type: 'url'}),
        defineField({name: 'facebook', title: 'Facebook URL', type: 'url'}),
        defineField({name: 'whatsapp', title: 'WhatsApp URL', type: 'url'}),
      ],
    }),
    defineField({
      name: 'footerCredit',
      title: 'Crédito del Footer',
      type: 'string',
      initialValue: 'Desarrollado con ♥ por Fluxia',
    }),
    defineField({
      name: 'footerCreditUrl',
      title: 'URL del Crédito',
      type: 'url',
      initialValue: 'https://fluxia.cl',
    }),
    defineField({
      name: 'chatSettings',
      title: 'Configuración del Chat',
      type: 'object',
      fields: [
        defineField({name: 'enabled', title: 'Habilitado', type: 'boolean', initialValue: true}),
        defineField({name: 'webhookUrl', title: 'Webhook URL', type: 'url'}),
        defineField({name: 'welcomeMessage', title: 'Mensaje de Bienvenida', type: 'string'}),
        defineField({name: 'title', title: 'Título del Chat', type: 'string'}),
        defineField({name: 'footer', title: 'Footer del Chat', type: 'string'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Configuración del Sitio'}
    },
  },
})
