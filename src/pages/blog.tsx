import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import type { PageProps } from 'gatsby'

import Layout from '../components/Layout'

type DataProps = {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string
        title: string
      }
      id: string
      body: string
    }[]
  }
}

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage
