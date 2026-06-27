import {defineField, defineType} from 'sanity'

export const history = defineType({
  name: 'history',
  title: 'Nuestra Historia',
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
      title: 'Título Principal',
      type: 'string',
      initialValue: 'El Legado de Quesería Artesanal Don Nelson',
    }),
    defineField({
      name: 'intro',
      title: 'Introducción',
      type: 'text',
      initialValue: 'A solo 6,1 km de la carretera 5 Sur, en el sector Los Castaños de Los Niches, Curicó, se encuentra Quesería Artesanal Don Nelson. Más que una fábrica de productos lácteos, somos un refugio de tradición familiar donde la calidez del campo y la calidad de nuestros sabores se encuentran con una vista privilegiada.',
    }),
    defineField({
      name: 'sections',
      title: 'Secciones',
      type: 'array',
      of: [
        defineField({
          name: 'section',
          title: 'Sección',
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Título', type: 'string'}),
            defineField({name: 'content', title: 'Contenido', type: 'text'}),
            defineField({name: 'image', title: 'Imagen', type: 'image', options: {hotspot: true}}),
          ],
          preview: {
            select: {title: 'title', media: 'image'},
          },
        }),
      ],
      initialValue: [
        {
          title: 'Un Sueño que Trascendió Fronteras',
          content: 'Todo comenzó con Nelson Gutiérrez, un productor lechero empeñoso y trabajador, quien dedicó su vida a la producción de leche y a la elaboración de quesos frescos que se convirtieron en un sello de calidad en la comuna de Curicó. Su gran anhelo era construir una fábrica propia para trabajar junto a su familia, un sueño que no alcanzó a ver realizado debido a su repentino fallecimiento.\n\nSin embargo, el amor de una hija es capaz de mover montañas. Karen, quien en aquel entonces residía en la República Checa, decidió cambiar su vida allá para regresar a sus raíces y cumplir la promesa hecha a su padre. Junto a su marido checo, y con el apoyo incondicional de su madre, transformaron ese anhelo en una realidad que hoy integra a la tercera generación: sus dos pequeños hijos.',
        },
        {
          title: 'Tradición y Reconocimiento',
          content: 'Hoy, con perseverancia y trabajo duro, nuestra fábrica es una realidad que celebra el campo chileno. Nuestros productos artesanales han sido galardonados con el sello de calidad "Manos Campesinas" y formamos parte de la Selección Nacional de Pymes de Chile. Comercializamos en la Región del Maule y la Región Metropolitana, pero es en nuestra propia sala de ventas donde mejor se siente el cariño por la tierra, los animales y la herencia de Don Nelson. Y también donde recibimos durante todo el año a clientes y turistas que nos visitan para deleitarse con nuestros alimentos e historia.',
        },
        {
          title: 'Vive la Experiencia Don Nelson: Mucho más que Quesos',
          content: 'Queremos que seas parte de nuestra historia. Por eso, hemos abierto las puertas de nuestro campo para ofrecerte una experiencia de alojamiento única, diseñada para quienes buscan desconectarse y reconectar con la esencia de la vida rural en la Región del Maule.\n\n¿Por qué hospedarte con nosotros?\n\n• Conexión con el origen: Despierta con la vista directa a nuestros campos y animales, y termina el día con los más bellos atardeceres en donde la puesta de sol hacen un escenario imperdible cada tarde, rodeado de la paz que solo el sector Los Niches puede ofrecer.\n\n• Sabores Auténticos: Disfruta de una experiencia gastronómica completa, desayunando y degustando los productos lácteos artesanales directamente de nuestra fábrica.\n\n• Puerta de entrada al Maule: Somos el punto de partida perfecto para explorar la belleza de la región. Desde nuestra ubicación, puedes planificar rutas hacia la precordillera, viñas locales, parques nacionales y paisajes naturales inigualables.\n\n• Calidez Familiar: Al elegirnos, no solo reservas un alojamiento, te conviertes en parte de nuestra historia familiar, recibiendo el trato cercano y hospitalario que nos caracteriza.\n\nTe invitamos a visitarnos, a conocer nuestra fábrica y a descansar en un entorno donde el cariño por la tierra y el amor de una hija por su padre son los verdaderos protagonistas.',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Nuestra Historia'}
    },
  },
})
