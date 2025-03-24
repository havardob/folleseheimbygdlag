export const formcarryBlock = {
    title: "Skjema",
    name: "formcarryBlock",
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