import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Configuración del Sitio')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Hero')
        .child(S.document().schemaType('hero').documentId('hero')),
      S.listItem()
        .title('Nuestra Historia')
        .child(S.document().schemaType('history').documentId('history')),
      S.divider(),
      S.listItem()
        .title('Productos')
        .child(S.documentTypeList('product').title('Productos')),
      S.listItem()
        .title('Nosotros')
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Contacto')
        .child(S.document().schemaType('contact').documentId('contact')),
      S.listItem()
        .title('Footer')
        .child(S.document().schemaType('footer').documentId('footer')),
    ])
