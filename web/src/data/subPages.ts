import { client } from "./_sanityClient.ts";
import {getSlug} from "./_query-helpers.ts";

const query = `*[_type == "subPage"] {
    _id, 
    "slug": slug.current,
    "parent": {
      "slug": *[_type == "page" && references(^._id)][0].slug.current,
      "title": *[_type == "page" && references(^._id)][0].title
    },
    "fullSlug": ${getSlug},
    title, 
    leading,
    body
}`;

export async function getSubPagesData() {
  return await client.fetch(query);
}
