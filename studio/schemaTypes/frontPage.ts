import {BiHome} from 'react-icons/bi'
import {internalLinkRef} from './templates/linkObject'
import {logoCloudBlock} from './templates/logoCloudBlock'

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
      validation: (Rule: any) => Rule.required(),
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
          validation: (Rule: any) => Rule.required(),
        },
        {
          title: 'Tittel',
          name: 'title',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          title: 'Sub-tittel',
          name: 'subtitle',
          type: 'string',
        },
        {
          title: 'Intro-tekst',
          name: 'intro',
          type: 'text',
          rows: 3,
          validation: (Rule: any) => Rule.required(),
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
              title: 'Tekst på knapp',
              name: 'linkText',
              type: 'string',
            },
            {
              ...internalLinkRef,
              title: 'Lenke til',
              name: 'link',
            },
            {
              title: 'Plassering av bilde',
              name: 'imagePlacement',
              type: 'string',
              options: {
                layout: 'dropdown',
                list: ['left', 'right'],
              },
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
          validation: (Rule: any) => Rule.required(),
        },
        {
          title: "Tekst for 'se flere nyheter'-knapp",
          name: 'moreText',
          type: 'string',
        },
        {
          title: 'Antall',
          description: 'Velg hvor mange av de siste nyhetene som skal vises her på forsiden',
          name: 'count',
          type: 'number',
          options: {
            list: [3, 6, 9],
          },
        },
      ],
    },
    {
      title: 'Vær-seksjon',
      name: 'weatherSection',
      type: 'object',
      fields: [
        {
          title: 'Overskrift',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Vis vær og flo/fjære på forsiden',
          description:
              'Velg om du vil vise havnivåstatus fra Kartverket og værvarsel fra yr.no eller ikke',
          name: 'showWeather',
          type: 'boolean',
        },
      ],
    },
    {
      title: 'Kart-seksjon',
      name: 'mapSection',
      type: 'object',
      fields: [
        {
          title: 'Overskrift',
          name: 'title',
          type: 'string',
        },
        {
          title: "Tekst",
          name: "text",
          type: "text",
          rows: 4,
        }
      ],
    },
    {
      ...logoCloudBlock,
      title: 'Sponsorer',
      name: 'sponsorSection',
    },
  ],
}
