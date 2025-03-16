import {client} from "./_sanityClient";
import {getSlug} from "./_query-helpers.ts";

const query = `*[_id == "siteSettings"][0]{
    _id,
    metaTitle,
    metaDescription,
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
        "link": internalDocument->{"href": ${getSlug}}
      },
      _type == "dropdown" => {
        "type": "dropdown",
        "title": title,
        "link": internalDocument->{"href": ${getSlug}},
        links[] {
          _type == "external" => {
            "type": "external",
            "title": title,
            "link": { "href": href }
          },
          _type == "internal" => {
            "type": "internal",
            "title": title,
            "link": internalDocument->{"href": ${getSlug}}
          },
        }
      }
    }
}`

export async function getSiteSettingsData() {
  return await client.fetch(query);
}