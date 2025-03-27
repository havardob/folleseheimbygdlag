export const slug = {
    name: "slug",
    title: "Slug (snegle)",
    description: "Slug (eller snegle) er det som skal stå etter '/' i nettadressen, f.eks. 'underside' i 'https://vg.no/underside'. Denne kan du generere basert på tittelen på denne siden, men du kan også skrive den manuelt. Hvis du skriver den manuelt er det viktig å huske på at den ikke kan inneholde æ,ø,å, spesialtegn (bortsett fra bindestrek) eller mellomrom",
    type: "slug",
    options: {
        source: "title"
    },
    validation: (Rule: any) => Rule.required()
}