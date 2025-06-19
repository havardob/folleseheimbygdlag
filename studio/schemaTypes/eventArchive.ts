import {BiCalendarPlus} from "react-icons/bi";
import {slug} from "./templates/slug";

export default {
    title: "Arrangementsoversikt",
    icon: BiCalendarPlus,
    type: "document",
    name: "eventArchive",
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