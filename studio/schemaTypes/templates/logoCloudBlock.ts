import {externalLinkUrl} from "./linkObject";

export const logoCloudBlock = {
    title: "Logo-sky",
    name: "logoCloudBlock",
    type: "object",
    fields: [
        {
            title: "Overskrift",
            name: "title",
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Intro",
            name: "intro",
            type: "text",
            rows: 2
        },
        {
            title: "Logoer",
            name: "images",
            type: "array",
            of: [
                {
                    title: "Logo",
                    name: "logo",
                    type: "object",
                    preview: {
                        select: {
                            title: "href",
                            media: "imageFile"
                        }
                    },
                    fields: [
                        {
                            ...externalLinkUrl,
                            title: "Lenke til bedriftens nettside",
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            title: "Logo",
                            name: "imageFile",
                            type: "image",
                            validation: (Rule: any) => Rule.required()
                        }
                    ]
                }
            ]
        }
    ]
}