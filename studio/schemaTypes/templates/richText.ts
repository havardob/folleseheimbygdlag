import {
  BiFile,
  BiGlobe, BiGrid,
  BiImage,
  BiLink,
  BiLinkAlt,
  BiLinkExternal,
  BiMenu,
  BiPointer,
  BiQuestionMark,
} from 'react-icons/bi'
import {externalLinkUrl, internalLinkRef} from './linkObject'
import {formBlock} from './formBlock'
import {logoCloudBlock} from "./logoCloudBlock";

export const richTextMain = {
  title: 'Block Content',
  name: 'rteMain',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Overskrift 2', value: 'h2'},
        {title: 'Overskrift 3', value: 'h3'},
        {title: 'Overskrift 4', value: 'h4'},
        {title: 'Overskrift 5', value: 'h5'},
        {title: 'Blokksitat', value: 'blockquote'},
      ],
      lists: [
        {title: 'Punktliste', value: 'bullet'},
        {title: 'Nummerert liste', value: 'number'},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Fet tekst', value: 'strong'},
          {title: 'Kursiv tekst', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Intern lenke',
            name: 'internalLink',
            icon: BiLinkAlt,
            type: 'object',
            fields: [internalLinkRef],
          },
          {
            title: 'Ekstern lenke',
            name: 'externalLink',
            icon: BiLinkExternal,
            type: 'object',
            fields: [externalLinkUrl],
          }
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      title: 'Bilde',
      icon: BiImage,
      type: 'object',
      name: 'imageBlock',
      preview: {
        select: {
          title: "text",
          media: 'imageFile',
        },
        prepare({title, media }:any) {
          return {
            title: title ? title : "Bilde",
            media: media ? media : null,
          }
        },
      },
      fields: [
        {
          title: 'Bilde',
          name: 'imageFile',
          type: 'image',
          options: {hotspot: true},
        },
        {
          title: 'Bildetekst',
          name: 'text',
          type: 'text',
          rows: 3,
        },
        {
          title: 'Kreditering/Fotograf',
          name: 'credits',
          type: 'string',
        },
        {
          title: 'Alternativ tekst',
          name: 'alt',
          type: 'text',
          rows: 2,
        },
        {
          title: 'Vis ramme',
          name: 'hasBorder',
          type: 'boolean',
          options: {
            layout: 'checkbox',
          },
          initialValue: false,
        },
        {
          title: 'Størrelse',
          name: 'size',
          type: 'string',
          options: {
            list: [
              {title: 'Like bred som teksten', value: 'stretch'},
              {title: 'Bredere enn teksten', value: 'full-bleed'}
            ],
            layout: 'radio',
          },
          initialValue: 'stretch',
        },
      ],
    },
    {
      name: 'fileBlock',
      icon: BiFile,
      title: 'Fil',
      type: 'object',
      fields: [
        {
          title: 'Filnavn',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Fil',
          name: 'file',
          type: 'file',
        },
      ],
    },
    {
      name: 'linkCollectionBlock',
      title: 'Undermeny',
      icon: BiMenu,
      type: 'object',
      preview: {
        select: {
          links: 'links',
        },
        prepare({links}: any) {
          if (!links || links.length === 0) {
            return {title: 'Ingen lenker...'}
          }

          const titles = links
            .map((link: any) => link.title)
            .filter(Boolean) // Filter out any undefined titles
            .join(', ')

          return {
            title: titles,
          }
        },
      },
      fields: [
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
                },
              ],
            },
          ],
        },
      ],
    },
    {
      icon: BiPointer,
      ...formBlock,
    },
    {
      icon: BiGrid,
      ...logoCloudBlock
    },
  ],
}

export const richTextSimple = {
  title: 'Block Content',
  name: 'rteSimple',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Fet tekst', value: 'strong'},
          {title: 'Kursiv tekst', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Intern lenke',
            name: 'internalLink',
            icon: BiLinkAlt,
            type: 'object',
            fields: [internalLinkRef],
          },
          {
            title: 'Ekstern lenke',
            name: 'externalLink',
            icon: BiLinkExternal,
            type: 'object',
            fields: [externalLinkUrl],
          },
        ],
      },
    },
  ],
}
