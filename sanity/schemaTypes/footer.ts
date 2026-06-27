import {defineField, defineType} from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Frase / Cita',
      type: 'string',
      initialValue: 'La pureza del campo en cada bocado, elaborada con paciencia y tradición caprina.',
    }),
    defineField({
      name: 'navLinks',
      title: 'Enlaces de Navegación',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          title: 'Enlace',
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
  ],
  preview: {
    prepare() {
      return {title: 'Footer'}
    },
  },
})
