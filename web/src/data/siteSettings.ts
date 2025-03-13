import {client} from "./_sanityClient";

const query = `*[_id == "siteSettings"][0]{
    _id,
    metaTitle,
    metaDescription,
    metaUrl
}`

export async function getSiteSettingsData() {
  return await client.fetch(query);
}