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
      title: 'Bilde i toppen',
      name: 'bannerImage',
      type: 'image',
    },
    {
      title: 'Tittel',
      name: 'title',
      type: 'text',
      rows: 2,
      validation: (Rule: any) => Rule.required(),
    },
    {
      ...slug,
    },
    {
      title: 'Undersider under denne',
      description: 'Opprett sider under denne',
      name: 'children',
      type: 'array',
      options: {
        sortable: false,
      },
      of: [
        {
          type: 'reference',
          to: [{type: 'subPage'}],
          options: {
            filter: '!(_id in *[_type == "page"].children[]._ref)',
          },
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
