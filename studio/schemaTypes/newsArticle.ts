import {BiNews} from "react-icons/bi";
import {slug} from "./templates/slug";
import {richTextMain} from "./templates/richText";

export default {
  name: 'newsArticle',
  title: 'Nyhetsartikler',
  type: 'document',
  icon: BiNews,
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'text',
      rows: 2,
      validation: (Rule: any) => Rule.required()
    },
    {
      title: "Fremhevet bilde",
      description: "Velg et bilde som skal vises på når denne nyheten forhåndsvises",
      name: "featuredImage",
      type: "image",
      validation: (Rule: any) => Rule.required()
    },
    {
      ...slug,
    },
    {
      title: "Publiseringsdato",
      name: "publishedDate",
      description: "Sett den datoen du ønsker at denne skal vises som publisert fra",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYYY"
      },
      validation: (Rule: any) => Rule.required()
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
