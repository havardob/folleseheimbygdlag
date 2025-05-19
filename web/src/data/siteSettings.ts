import { client } from "./_sanityClient";
import {getSubpageSlug, groqGetBody} from "./_query-helpers.ts";

const query = `*[_id == "siteSettings"][0]{
    _id,
    metaTitle,
    metaDescription,
    metaImage,
    metaUrl,
    mainNav[] {
      _type == "external" => {
        "type": "external",
        "title": title,
        "link": { "href": href }
      },
      _type == "internal" => {
        "type": "internal",
        "title": title,
        "link": internalDocument->{
          "href": ${getSubpageSlug}
        },
      },
      _type == "dropdown" => {
        "type": "dropdown",
        "title": title,
        "link": internalDocument->{
          "href": ${getSubpageSlug}
        },
        links[] {
          _type == "external" => {
            "type": "external",
            "title": title,
            "link": { "href": href }
          },
          _type == "internal" => {
            "type": "internal",
            "title": title,            
            "link": internalDocument->{
              "href": ${getSubpageSlug}
            },
          },
        }
      }
    },
    footer[] {
      title, 
      "text": ${groqGetBody('text')}
    },
    socialMedia[] {
      ...
    } 
}`;

export async function getSiteSettingsData() {
  return await client.fetch(query);
}
