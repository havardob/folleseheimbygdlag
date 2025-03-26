import { client } from "./_sanityClient.ts";
import {getSubpageSlug, groqGetBody} from "./_query-helpers.ts";

const query = `*[_type == "page"] {
    _id, 
    "fullSlug": ${getSubpageSlug},
    bannerImage,
    "bannerImageUrl": bannerImage.asset->url,
    title, 
    leading,
    "body": ${groqGetBody('body')}
}`;

export async function getPagesData() {
    const data = await client.fetch(query);
    return data;
}
