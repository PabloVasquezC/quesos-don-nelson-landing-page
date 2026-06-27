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
      name: 'socialLinks',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        defineField({name: 'instagram', title: 'Instagram URL', type: 'url'}),
        defineField({name: 'facebook', title: 'Facebook URL', type: 'url'}),
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
  ],
  preview: {
    prepare() {
      return {title: 'Configuración del Sitio'}
    },
  },
})
