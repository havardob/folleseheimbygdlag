import { client } from "./_sanityClient.ts";

const query = `*[_type == "subPage"] {
    _id, 
    "slug": slug.current,
    "parent": {
      "slug": *[_type == "page" && references(^._id)][0].slug.current,
      "title": *[_type == "page" && references(^._id)][0].title
    },
    title, 
    leading,
    body
}`;

export async function getSubPagesData() {
  const subPages = await client.fetch(query);

  for (let subPage of subPages) {
    if (subPage.parent.slug) {
      subPage.slug = `${subPage.parent.slug}/${subPage.slug}`;
    }
  }

  return subPages;
}
