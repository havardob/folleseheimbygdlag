import {BiCog, BiDockBottom, BiDockTop, BiShare} from "react-icons/bi";

export default {
    name: "siteSettings",
    title: "Innstillinger",
    icon: BiCog,
    type: "document",
    groups: [
        {
            title: "Header",
            name: "headerGroup",
            icon: BiDockTop,
            default: true,
        },
        {
            title: "Footer",
            name: "footerGroup",
            icon: BiDockBottom
        },
        {
            title: "Metadata",
            name: "metaGroup",
            icon: BiShare
        },
    ],
    fields: [
        {
            title: "Tittel for nettsted",
            name: "metaTitle",
            description: "Det nettsiden vil hete i toppen av fanen i nettleseren",
            type: "string",
            group: "metaGroup"
        },
        {
            title: "Metabeskrivelse",
            name: "metaDescription",
            description: "Teksten som vil vises under tittelen til nettsiden i f.eks. et Google-søk",
            type: "text",
            group: "metaGroup"
        },
        {
            title: "Nettstedsadresse",
            name: "metaUrl",
            description: "Hele URL-en til nettsiden, med 'https://', f.eks. 'https://vg.no'",
            type: "string",
            group: "metaGroup"
        }
    ]
}