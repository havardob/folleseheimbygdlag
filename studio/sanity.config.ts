import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import deskStructure from './src/deskStructure'

export default defineConfig([
  {
    name: 'development-workspace',
    basePath: '/development',
    title: 'Testing for utvikler',
    subtitle: 'Development',

    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: 'development',

    plugins: [
      structureTool({
        structure: deskStructure,
        title: 'Innhold',
      }),
      visionTool(),
    ],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'default',
    basePath: '/production',
    title: 'Nettside',
    subtitle: 'Production',

    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: 'production',

    plugins: [
      structureTool({
        structure: deskStructure,
      }),
    ],

    schema: {
      types: schemaTypes,
    },
  },
])
