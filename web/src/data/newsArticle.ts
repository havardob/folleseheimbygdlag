import {client} from "./_sanityClient.ts";

const query = `*[_type == "newsArticle"] {
    _id,
    title, 
    leading,     
    "parent": {
      "slug": *[_type == "newsArchive"][0].slug.current,
      "title": *[_type == "newsArchive"][0].title
    },
    "fullSlug": *[_type == "newsArchive"]{ "slug": slug.current }[0].slug + "/" + slug.current,
    publishedDate
}`

export async function getNewsArticlesData() {
    return await client.fetch(query);
}