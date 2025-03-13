import { BiCog, BiHome } from "react-icons/bi";

export default (S: any) =>
    S.list()
        .title("Innhold")
        .items([
            S.listItem()
                .title("Forside")
                .icon(BiHome)
                .child(S.document().schemaType("frontPage").documentId("frontPage")),
            S.divider(),
            ...S.documentTypeListItems()
                .filter((listItem: any) => ["page"].includes(listItem.getId())),
            ...S.documentTypeListItems()
                .filter((listItem: any) => ["subPage"].includes(listItem.getId())),
            S.divider(),
            ...S.documentTypeListItems()
                .filter((listItem: any) => ["newsArticle"].includes(listItem.getId())),
            S.divider(),
            S.listItem()
                .title("Innstillinger")
                .icon(BiCog)
                .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
        ]);