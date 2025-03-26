import {BiNews} from "react-icons/bi";
import {slug} from "./templates/slug";
import {richTextMain} from "./templates/richText";

export const formatDate = function (date: any) {
  const tempDate = new Date(date);
  const day = tempDate.getDate();
  const month = tempDate.getMonth();
  const year = tempDate.getFullYear();

  const monthNames = [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const newDate = `${day}. ${monthNames[month]} ${year}`;

  return newDate;
};

export default {
  name: 'newsArticle',
  title: 'Nyhetsartikler',
  type: 'document',
  icon: BiNews,
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedDate',
      media: 'featuredImage'
    },
    prepare({title, subtitle, media}: any) {
      return {
        title: title,
        subtitle: formatDate(subtitle),
        media: media
      }
    }
  },
  orderings: [
    {
      title: "Publiseringsdato",
      name: "publishedDateDesc",
      by: [
        {
          field: "publishedDate",
          direction: "desc",
        }
      ]
    }
  ],
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
