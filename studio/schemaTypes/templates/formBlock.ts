export const formBlock = {
    title: "Skjema",
    name: "formBlock",
    type: "object",
    preview: {
        select: {
            title: "source"
        }
    },
    fields: [
        {
            title: "URL til skjema",
            name: "source",
            type: "url",
            validation: (Rule: any) => Rule.required()
        }
    ]
}