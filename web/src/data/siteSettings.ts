import {client} from "./_sanityClient";

const query = `*[_id == "siteSettings"][0]{
    _id,
    metaTitle,
    metaDescription,
    metaUrl,
    mainNav
}`

export async function getSiteSettingsData() {
  const data = await client.fetch(query);
  console.log(data.mainNav)
  return data;
}