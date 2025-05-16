import {BiCog, BiImage, BiLayout, BiText} from 'react-icons/bi'
import {slug} from './templates/slug'
import {richTextMain} from './templates/richText'

export default {
  name: 'subPage',
  title: 'Sider',
  type: 'document',
  icon: BiLayout,
  groups: [
    {name: 'contentTab', title: 'Tekst', icon: BiText, default: true},
    {name: 'bannerTab', title: 'Bannerbilde', icon: BiImage},
    {name: 'settingsTab', title: 'URL og innstillinger', icon: BiCog},
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      parentSlug: 'parentPage.slug.current',
      bannerImage: 'bannerImage',
    },
    prepare(selection: any) {
      const {title, slug, parentSlug, bannerImage} = selection
      return {
        title: title,
        subtitle: parentSlug ? `/${parentSlug}/${slug}` : `/${slug}`,
        media: bannerImage,
      }
    },
  },
  fields: [
    {
      title: 'Bilde i toppen',
      name: 'bannerImage',
      type: 'image',
      group: 'bannerTab',
      options: {hotspot: true},
    },
    {
      title: 'Bildekreditering',
      description: 'Hvem har tatt bilde/har eierskap til bildet?',
      name: 'bannerImageCreditation',
      type: 'text',
      rows: 2,
      group: 'bannerTab',
    },
    {
      title: 'Tittel',
      name: 'title',
      type: 'text',
      rows: 2,
      validation: (Rule: any) => Rule.required(),
      group: 'contentTab',
    },
    {
      ...slug,
      group: 'settingsTab',
    },
    {
      title: 'Foreldreside',
      description: 'Bestem hvilken side denne siden skal "bo under"',
      name: 'parentPage',
      type: 'reference',
      to: [{type: 'subPage'}],
      group: 'settingsTab',
      options: {
        disableNew: true,
        filter: '!defined(parentPage)'
      },
      validation: (Rule: any) =>
        Rule.custom((parentRef: any, context: any) => {
          if (parentRef && parentRef._ref === context.document._id) {
            return 'En side kan ikke være sin egen foreldreside.'
          }
          return true
        }),
    },
    {
      title: 'Ingress',
      name: 'leading',
      type: 'text',
      rows: 6,
      group: 'contentTab',
    },
    {
      ...richTextMain,
      title: 'Brødtekst',
      name: 'body',
      group: 'contentTab',
    },
  ],
}
