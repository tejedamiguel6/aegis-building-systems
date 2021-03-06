import { useStaticQuery, graphql } from 'gatsby'

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 115 }) {
        id
        content
        cta_homepage {
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1920
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
  `)
  return data
}
