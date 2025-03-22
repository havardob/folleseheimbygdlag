import {BiLayout} from "react-icons/bi";
import {slug} from "./templates/slug";
import {richTextMain} from "./templates/richText";

export default {
  name: 'subPage',
  title: 'Undersider',
  type: 'document',
  icon: BiLayout,
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    {
      title: "Bilde i toppen",
      name: "bannerImage",
      type: "image",
    },
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
