import {BiCog, BiDockBottom, BiDockTop, BiGlobe, BiLink, BiShare} from 'react-icons/bi'
import {externalLinkUrl, internalLinkRef} from './templates/linkObject'
import {RiDropdownList} from 'react-icons/ri'

export default {
  name: 'siteSettings',
  title: 'Innstillinger',
  icon: BiCog,
  type: 'document',
  groups: [
    {
      title: 'Header',
      name: 'headerGroup',
      icon: BiDockTop,
      default: true,
    },
    {
      title: 'Footer',
      name: 'footerGroup',
      icon: BiDockBottom,
    },
    {
      title: 'Metadata',
      name: 'metaGroup',
      icon: BiShare,
    },
  ],
  fields: [
    {
      title: 'Tittel for nettsted',
      name: 'metaTitle',
      description: 'Det nettsiden vil hete i toppen av fanen i nettleseren',
      type: 'string',
      group: 'metaGroup',
    },
    {
      title: 'Metabeskrivelse',
      name: 'metaDescription',
      description: 'Teksten som vil vises under tittelen til nettsiden i f.eks. et Google-søk',
      type: 'text',
      group: 'metaGroup',
    },
    {
      title: 'Nettstedsadresse',
      name: 'metaUrl',
      description: "Hele URL-en til nettsiden, med 'https://', f.eks. 'https://vg.no'",
      type: 'string',
      group: 'metaGroup',
    },
    {
      title: 'Meny',
      name: 'mainNav',
      description: 'Menyen i toppen av nettsiden',
      type: 'array',
      group: 'headerGroup',
      of: [
        {
          title: 'Intern lenke',
          type: 'object',
          name: 'internal',
          icon: BiLink,
          fields: [
            {
              title: 'Tekst',
              name: 'title',
              type: 'string',
            },
            {
              ...internalLinkRef,
            },
          ],
        },
        {
          title: 'Ekstern lenke',
          type: 'object',
          name: 'external',
          icon: BiGlobe,
          fields: [
            {
              title: 'Tekst',
              name: 'title',
              type: 'string',
            },
            {
              ...externalLinkUrl,
            },
          ],
        },
        {
          title: 'Rullegardin-meny',
          icon: RiDropdownList,
          name: 'dropdown',
          type: 'object',
          fields: [
            {
              title: 'Tekst',
              name: 'title',
              type: 'string',
            },
            {
              ...internalLinkRef,
            },
            {
              title: 'Lenker',
              name: 'links',
              type: 'array',
              of: [
                {
                  title: 'Intern lenke',
                  type: 'object',
                  name: 'internal',
                  icon: BiLink,
                  fields: [
                    {
                      title: 'Tekst',
                      name: 'title',
                      type: 'string',
                    },
                    {
                      ...internalLinkRef,
                    },
                  ],
                },
                {
                  title: "Ekstern lenke",
                  type: 'object',
                  name: 'externalLink',
                  icon: BiGlobe,
                  fields: [
                    {
                      title: 'Tekst',
                      name: 'title',
                      type: 'string',
                    },
                    {
                      ...externalLinkUrl,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
