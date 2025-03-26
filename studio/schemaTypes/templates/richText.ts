import {
  BiFile,
  BiGlobe,
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
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal Link',
            name: 'internalLink',
            icon: BiLinkAlt,
            type: 'object',
            fields: [internalLinkRef],
          },
          {
            title: 'External Link',
            name: 'externalLink',
            icon: BiLinkExternal,
            type: 'object',
            fields: [externalLinkUrl],
          },
          {
            title: 'Description tag',
            name: 'descriptionTag',
            icon: BiQuestionMark,
            type: 'object',
            fields: [
              {
                title: 'Text',
                name: 'text',
                type: 'text',
                rows: 4,
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      title: 'Image',
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
              {title: 'Fullbredde', value: 'full-bleed'},
              {title: 'Original størrelse', value: 'original'},
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
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal Link',
            name: 'internalLink',
            icon: BiLinkAlt,
            type: 'object',
            fields: [internalLinkRef],
          },
          {
            title: 'External Link',
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
