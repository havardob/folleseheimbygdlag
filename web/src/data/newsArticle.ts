import {client} from "./_sanityClient.ts";
import {groqGetBody} from "./_query-helpers.ts";

const query = `*[_type == "newsArticle"] {
    _id,
    title, 
    leading,     
    "parent": {
      "slug": *[_type == "newsArchive"][0].slug.current,
      "title": *[_type == "newsArchive"][0].title
    },
    "fullSlug": "/" + *[_type == "newsArchive"]{ "slug": slug.current }[0].slug + "/" + slug.current,
    publishedDate,
    "featuredImageUrl": featuredImage.asset->url,
    featuredImage,
    "body": ${groqGetBody('body')}
}`

export async function getNewsArticlesData() {
    return await client.fetch(query);
}