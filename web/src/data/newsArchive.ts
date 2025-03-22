import { client } from "./_sanityClient.ts";

const query = `*[_type == "newsArchive"][0] {
    _id, 
    title, 
    intro,
    "fullSlug": "/" + slug.current
}`;

export async function getNewsArchiveData() {
  return await client.fetch(query);
}
