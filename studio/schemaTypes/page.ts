import {BiLayout} from 'react-icons/bi'
import {slug} from './templates/slug'
import {richTextMain} from './templates/richText'

export default {
  name: 'page',
  title: 'Sider',
  type: 'document',
  icon: BiLayout,
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'text',
      rows: 2,
    },
    {
      ...slug,
    },
    {
      title: 'Undersider under denne',
      description: 'Opprett sider under denne',
      name: 'children',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'subPage'}],
        },
      ],
    },
    {
      title: 'Ingress',
      name: 'leading',
      type: 'text',
      rows: 3,
    },
    {
      ...richTextMain,
      title: 'Brødtekst',
      name: 'body',
    },
  ],
}
