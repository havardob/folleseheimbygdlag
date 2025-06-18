import {client} from "./_sanityClient.ts";
import {groqGetBody} from "./_query-helpers.ts";

const query = `*[_type == "eventPage"] {
    _id,
    title, 
    leading,     
    "parent": {
      "slug": *[_type == "eventArchive"][0].slug.current,
      "title": *[_type == "eventArchive"][0].title
    },
    "fullSlug": "/" + *[_type == "eventArchive"]{ "slug": slug.current }[0].slug + "/" + slug.current,
    "sortableDate": eventDate,
    "eventDate": eventDate,
    eventTime,
    eventLocation,
    "body": ${groqGetBody('body')}
}`

export async function getEventPagesData() {
    return await client.fetch(query);
}