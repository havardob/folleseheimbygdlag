import {client} from "./_sanityClient.ts";
import {getSubpageSlug} from "./_query-helpers.ts";

const query = `*[_id == "frontPage"][0] {
    _id, 
    title, 
    banner {
       ...
    }, 
    blocks[] {
       ...,
       link->{
          "href": ${getSubpageSlug}
       },
    },
    newsSection {
       ...
    },
    weatherSection {
        ...
    },
    mapSection {
        ...
    },
    sponsorSection {
      title,
      intro,
      images[] {
        ...,
        logo {
          ...,
          _type == "externalLink" => {
           "link": {
              "href": href
           },
          }
        } 
      }
    }
}`

export async function getFrontPageData() {
    const data  = await client.fetch(query);
    return data;
}