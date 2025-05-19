import { client } from "./_sanityClient.ts";
import { getSubpageSlug, groqGetBody } from "./_query-helpers.ts";

const query = `*[_type == "subPage"] {
    _id, 
    "slug": slug.current,
    "parent": {
      "slug": parentPage -> slug.current,
      "title": parentPage -> title
    },
    "fullSlug": ${getSubpageSlug},
    bannerImage,
    bannerImageCreditation,
    "bannerImageUrl": bannerImage.asset->url,
    title, 
    leading,
    "body": ${groqGetBody("body")}
}`;

export async function getSubPagesData() {
  return await client.fetch(query);
}
