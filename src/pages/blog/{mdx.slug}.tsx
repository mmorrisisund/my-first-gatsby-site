import React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

type DataProps = {
  mdx: {
    frontmatter: {
      date: string
      title: string
    }
    body: string
  }
}

const BlogPost = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query blogQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
    }
  }
`

export default BlogPost
