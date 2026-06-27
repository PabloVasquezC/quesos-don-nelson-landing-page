import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      initialValue: 'Haz Tu Pedido',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      initialValue: 'Estamos listos para atenderte. Contactanos para hacer tu pedido o resolver cualquier duda sobre nuestros productos.',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
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
  ],
  preview: {
    prepare() {
      return {title: 'Contacto'}
    },
  },
})
