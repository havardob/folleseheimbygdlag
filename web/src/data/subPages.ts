import { client } from "./_sanityClient.ts";
import {getSubpageSlug, groqGetBody} from "./_query-helpers.ts";

const query = `*[_type == "subPage"] {
    _id, 
    "slug": slug.current,
    "parent": {
      "slug": *[_type == "page" && references(^._id)][0].slug.current,
      "title": *[_type == "page" && references(^._id)][0].title
    },
    "fullSlug": ${getSubpageSlug},
    "bannerImage": bannerImage.asset->url,
    title, 
    leading,
    "body": ${groqGetBody('body')}
}`;

export async function getSubPagesData() {
  const data = await client.fetch(query);
  return data;
}
