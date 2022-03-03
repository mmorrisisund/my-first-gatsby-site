import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        src='../images/clifford.webp'
        alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
      />
    </Layout>
  )
}

export default IndexPage
