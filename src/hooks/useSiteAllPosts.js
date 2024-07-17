import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const useSiteAllPosts = () => {
  const data = useStaticQuery(graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
                name
            }
        }
    }
  `);
  return data.allFile.nodes;
};

export default useSiteAllPosts;
