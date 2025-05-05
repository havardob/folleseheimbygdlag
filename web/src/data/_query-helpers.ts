export const getSubpageSlug = `
    coalesce(
        "/" + (parentPage -> slug.current) + "/" + slug.current, 
        "/" + slug.current
    )
`;

export function groqGetBody(key: string) {
  return `${key}[] {
        ...,
        _type == "imageBlock" => {
            ...,
        },
        _type == "fileBlock" => {
            title,
            "meta": file.asset->,
        },
        _type == "formBlock" => {
          ...,
        },
        _type == "logoCloudBlock" => {
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
        },
        _type == "linkCollectionBlock" => {
          ...,
          links[] {          
            _type == "internal" => {
              title,
              "link": internalDocument->{
                "href": ${getSubpageSlug}
              },
            },
            _type == "externalLink" => {
              title,
              "link": {
                "href": href
              },
            }
          }
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
