import {BiCalendar} from "react-icons/bi";
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

    return `${day}. ${monthNames[month]} ${year}`;
};

export default {
    name: 'eventPage',
    title: 'Arrangementer',
    type: 'document',
    icon: BiCalendar,
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
            ...slug,
        },
        {
            title: "Dato",
            name: "eventDate",
            description: "Sett datoen for arrangementet",
            type: "date",
            options: {
                dateFormat: "DD-MM-YYYY"
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Sted",
            name: "location",
            type: "string"
        },
        {
            title: "Tidspunkt",
            description: "f.eks. kl. 19.00",
            name: "time",
            type: "string"
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
