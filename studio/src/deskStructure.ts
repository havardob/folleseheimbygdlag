import { BiCog, BiHome } from "react-icons/bi";

export default (S: any) =>
    S.list()
        .title("Innhold")
        .items([
            S.listItem()
                .title("Front Page")
                .icon(BiHome)
                .child(S.document().schemaType("frontPage").documentId("frontPage")),
            S.divider(),
            S.listItem()
                .title("Innstillinger")
                .icon(BiCog)
                .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
        ]);