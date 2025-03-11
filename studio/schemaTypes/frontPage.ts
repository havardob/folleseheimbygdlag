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
  ],
}
