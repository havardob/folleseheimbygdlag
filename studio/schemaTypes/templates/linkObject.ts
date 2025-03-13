import {BiGlobe, BiLink} from "react-icons/bi";

export const externalLinkUrl = {
    title: "Nettsideadresse (URL)",
    icon: BiGlobe,
    description: "Lim inn eller skriv inn adressen til nettsiden du vil lenke til. Husk å legge til 'https://' i begynnelsen, f.eks. 'https://nasjonalbiblioteket.no'",
    name: "href",
    type: "url",
    validation: (Rule: any) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel', '#']
    })
}

export const internalLinkRef = {
    title: "Intern side",
    description: "Velg en side eller underside som er opprettet her i Sanity som du vil lenke til",
    name: "internalDocument",
    type: "reference",
    icon: BiLink,
    to: [
        { type: "frontPage" },
        { type: "page" },
        { type: "subPage" }
    ],
    options: {
        disableNew: true,
    }
}

