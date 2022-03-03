import React from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'

import Layout from '../components/Layout'

type DataProps = {
  allFile: {
    nodes: {
      name: string
    }[]
  }
}

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allFile.nodes.map(node => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
