import React from "react";
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from 'gatsby-link';

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
    {data ? data.allMarkdownRemark.edges.map(post => {
      return (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read more</Link>
        <br />
        <br />
        <hr />
      </div>
    )}) : null}
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
