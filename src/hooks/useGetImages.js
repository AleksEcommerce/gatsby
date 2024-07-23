import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const useGetImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg|jpeg|png|webp)/" }, sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  return data.allFile.edges;
};

export default useGetImages;