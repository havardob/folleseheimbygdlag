import {client} from "./_sanityClient.ts";

const query = `*[_type in ["frontPage", "page", "subPage", "newsArchive", "newsArticle"]] {
  title,
  "fullSlug": coalesce(
      "/" + *[_type == "page" && references(^._id)][0].slug.current + "/" + slug.current, 
      "/" + slug.current
    ),
  _type == "frontPage" => {
    "fullSlug": "/"
  },
  _type == "newsArticle" => {
    "fullSlug":  "/" + *[_type == "newsArchive"]{ "slug": slug.current }[0].slug + "/" + slug.current
  },
} | order(fullSlug asc)`

export async function getSitemapData() {
    return await client.fetch(query);
}