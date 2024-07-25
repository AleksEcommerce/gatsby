import { graphql, useStaticQuery } from "gatsby";

const useGetSlides = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { 
          extension: { regex: "/(jpg|jpeg|png|webp)/" }, 
          relativePath: { regex: "/slides/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            publicURL
          }
        }
      }
    }
  `);

  return data;
};

export default useGetSlides;
