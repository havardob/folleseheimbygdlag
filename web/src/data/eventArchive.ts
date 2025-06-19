import { client } from "./_sanityClient.ts";

const query = `*[_type == "eventArchive"][0] {
    _id, 
    title, 
    intro,
    "fullSlug": "/" + slug.current
}`;

export async function getEventArchiveData() {
    return await client.fetch(query);
}
