import {BiArchive} from "react-icons/bi";
import {slug} from "./templates/slug";

export default {
    title: "Nyhetsarkiv",
    icon: BiArchive,
    type: "document",
    name: "newsArchive",
    fields: [
        {
            title: "Overskrift",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            ...slug,
        },
        {
            title: "Intro",
            name: "intro",
            type: "text",
            rows: 4
        }
    ]
}