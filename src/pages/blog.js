import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest  Posts</h1>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage;
