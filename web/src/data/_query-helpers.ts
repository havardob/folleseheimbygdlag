export const getSlug = `
    _type == "subPage" => {
        coalesce(
          *[_type == "page" && references(^._id)][0].slug.current + "/" + slug.current, 
          slug.current
        )
    }
`