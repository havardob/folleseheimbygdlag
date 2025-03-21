export const getSubpageSlug = `
    coalesce(
      *[_type == "page" && references(^._id)][0].slug.current + "/" + slug.current, 
      slug.current
    )
`;

export function groqGetBody(key: string) {
  return `${key}[] {
        ...,
        _type == "imageBlock" => {
            "imageFile": imageFile.asset->url,
        },
        _type == "fileBlock" => {
            title,
            "meta": file.asset->,
        },
        markDefs[] {
          ...,
          _type == "internalLink" => {
            "link": internalDocument->{
              "href": ${getSubpageSlug}
            },
          },
          _type == "externalLink" => {
            "link": {
              "href": href
            },
          }
        }
    }`;
}
