import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'Nosotros',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionLabel',
      title: 'Label de Sección',
      type: 'string',
      initialValue: 'Nuestra Historia',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      initialValue: 'Del Campo a Tu Mesa, con Amor y Tradición',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Párrafos',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        defineField({
          name: 'video',
          title: 'Video',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Título', type: 'string'}),
            defineField({name: 'url', title: 'URL del Video', type: 'url'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [
        defineField({
          name: 'feature',
          title: 'Característica',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Título', type: 'string'}),
            defineField({name: 'description', title: 'Descripción', type: 'text'}),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Nosotros'}
    },
  },
})
