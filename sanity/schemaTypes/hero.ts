import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Quesos de Cabra 100% Artesanales',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Quesos de Cabra Don Nelson',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      initialValue: 'Descubre la excelencia de nuestro queso de cabra artesanal, elaborado con pasión en el corazón de Curicó. Sabor puro, natural y 100% chileno.',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Video de Fondo (URL)',
      type: 'url',
      description: 'URL del video de fondo (dejar vacío para usar el video por defecto)',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagen de Fondo (fallback)',
      type: 'image',
      options: {hotspot: true},
      description: 'Imagen que se muestra si no hay video',
    }),
    defineField({
      name: 'ctaButtons',
      title: 'Botones de Acción',
      type: 'array',
      of: [
        defineField({
          name: 'ctaButton',
          title: 'Botón',
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Texto del Botón', type: 'string'}),
            defineField({name: 'href', title: 'Enlace', type: 'string'}),
            defineField({
              name: 'variant',
              title: 'Estilo',
              type: 'string',
              options: {
                list: [
                  {title: 'Primario', value: 'primary'},
                  {title: 'Outline', value: 'outline'},
                ],
              },
              initialValue: 'primary',
            }),
          ],
        }),
      ],
      initialValue: [
        {label: 'Ver Productos', href: '#productos', variant: 'primary'},
        {label: 'Nuestra Historia', href: '#historia', variant: 'outline'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Hero'}
    },
  },
})
