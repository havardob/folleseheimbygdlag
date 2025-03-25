export const formBlock = {
    title: "Skjema",
    name: "formBlock",
    type: "object",
    preview: {
        select: {
            title: "endpoint"
        }
    },
    fields: [
        {
            title: "Kode til Formcarry",
            name: "endpoint",
            type: "string",
            validation: (Rule: any) => Rule.required()
        }
    ]
}