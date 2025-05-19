import {BiChevronDown, BiCog, BiDockBottom, BiDockTop, BiGlobe, BiLink, BiShare} from 'react-icons/bi'
import {externalLinkUrl, internalLinkRef} from './templates/linkObject'
import {richTextSimple} from './templates/richText'

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
      title: "Metabilde",
      name: "metaImage",
      type: "image",
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
              validation: (Rule: any) => Rule.required(),
            },
            {
              ...internalLinkRef,
              validation: (Rule: any) => Rule.required()
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
              validation: (Rule: any) => Rule.required(),
            },
            {
              ...externalLinkUrl,
              validation: (Rule: any) => Rule.required()
            },
          ],
        },
        {
          title: 'Rullegardin-meny',
          icon: BiChevronDown,
          name: 'dropdown',
          type: 'object',
          fields: [
            {
              title: 'Tekst',
              name: 'title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
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
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      ...internalLinkRef,
                      validation: (Rule: any) => Rule.required()
                    },
                  ],
                },
                {
                  title: 'Ekstern lenke',
                  type: 'object',
                  name: 'externalLink',
                  icon: BiGlobe,
                  fields: [
                    {
                      title: 'Tekst',
                      name: 'title',
                      type: 'string',
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      ...externalLinkUrl,
                      validation: (Rule: any) => Rule.required()
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Informasjon i footer',
      type: 'array',
      name: 'footer',
      group: 'footerGroup',
      of: [
        {
          name: 'group',
          title: 'Gruppe',
          type: 'object',
          fields: [
            {
              title: 'Overskrift',
              name: 'title',
              type: 'string',
            },
            {
              ...richTextSimple,
              name: 'text',
            },
          ],
        },
      ],
    },
    {
      title: "Lenker til sosiale medier",
      type: "array",
      name: "socialMedia",
      group: "footerGroup",
      of: [
        {
          title: "Lenke",
          name: "someLink",
          type: "object",
          fields: [
            {
              title: "Tekst",
              name: "title",
              type: "string",
            },
            {
              ...externalLinkUrl
            },
            {
              title: "Ikon",
              name: "icon",
              type: "string",
              options: {
                layout: "dropdown",
                list: [
                  {
                    title: "Facebook",
                    value: "fb"
                  },
                  {
                    title: "TikTok",
                    value: "tiktok"
                  },
                  {
                    title: "X/Twitter",
                    value: "x"
                  },
                  {
                    title: "LinkedIn",
                    value: "linkedin"
                  },
                  {
                    title: "Instagram",
                    value: "instagram"
                  },
                  {
                    title: "Flickr",
                    value: "flickr"
                  },
                  {
                    title: "Youtube",
                    value: "youtube"
                  },
                  {
                    title: "Snapchat",
                    value: "snapchat"
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ],
}
