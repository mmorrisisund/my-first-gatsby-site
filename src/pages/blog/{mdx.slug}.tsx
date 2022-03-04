import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import type { PageProps } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'

import Layout from '../../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

type DataProps = {
  mdx: {
    frontmatter: {
      date: string
      title: string
      hero_image_alt: string
      hero_image_credit_text: string
      hero_image_credit_link: string
      hero_image: ImageDataLike
    }
    body: string
  }
}

const BlogPost = ({ data }: PageProps<DataProps>) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image!} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{' '}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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
        hero_image_credit_text
        hero_image_credit_link
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost
