import * as React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import useSiteAllPosts from '../hooks/useSiteAllPosts';

const BlogPage = () => {
    const data = useSiteAllPosts();
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.map(node => (
            <li key={node.name}>
                {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage