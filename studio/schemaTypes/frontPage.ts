import {BiHome} from 'react-icons/bi'

export default {
  title: 'Forside',
  name: 'frontPage',
  type: 'document',
  icon: BiHome,
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      description:
        "Navnet på siden. Dette vil ikke stå noen plass, men må være med likevel. Kall den 'Forside' eller lignende",
      type: 'string',
    },
    {
      title: 'Banner',
      name: 'banner',
      type: 'object',
      fields: [
        {
          title: 'Bilde',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        },
        {
          title: 'Intro',
          name: 'intro',
          type: 'text',
        },
      ],
    },
    {
      title: 'Seksjoner',
      name: 'blocks',
      type: 'array',
      of: [
        {
          title: 'Bilde med tekst og knapp',
          name: 'teaserBlock',
          type: 'object',
          fields: [
            {
              title: 'Bilde',
              name: 'image',
              type: 'image',
            },
            {
              title: 'Overskrift',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Tekst',
              name: 'content',
              type: 'text',
              rows: 4,
            },
            {
              title: 'Lenke',
              name: 'link',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      title: 'Nyhets-seksjon',
      name: 'newsSection',
      type: 'object',
      fields: [
        {
          title: 'Overskrift over nyhetene',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Antall',
          description: "Velg hvor mange av de siste nyhetene som skal vises her på forsiden",
          name: 'count',
          type: 'number',
          options: {
            list: [3, 6, 9]
          }
        },
      ],
    },
  ],
}
