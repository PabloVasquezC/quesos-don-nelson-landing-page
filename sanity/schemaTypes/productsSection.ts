import {defineField, defineType} from 'sanity'

export const productsSection = defineType({
  name: 'productsSection',
  title: 'Sección de Productos',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Label de Sección',
      type: 'string',
      initialValue: 'Nuestros Productos',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      initialValue: 'Quesos con Sabor a Tradición',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      initialValue: 'Cada queso es elaborado a mano con leche fresca de nuestra región, siguiendo técnicas artesanales que garantizan la mejor calidad.',
    }),
    defineField({
      name: 'bottomNote',
      title: 'Nota Inferior',
      type: 'string',
      initialValue: 'Todos nuestros productos son elaborados diariamente para garantizar frescura y calidad.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Sección de Productos'}
    },
  },
})
