import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'Quesos Don Nelson',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '65cyxti5',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool({structure}),
  ],
})
