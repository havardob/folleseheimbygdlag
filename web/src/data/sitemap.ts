import {client} from "./_sanityClient.ts";
import {getSubpageSlug} from "./_query-helpers.ts";

const query = `*[_type in ["frontPage", "page", "subPage", "newsArchive", "newsArticle"]] {
  title,
  "fullSlug": ${getSubpageSlug},
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