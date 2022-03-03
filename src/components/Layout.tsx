import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './Layout.module.css'

type LayoutProps = {
  pageTitle: string
  children: React.ReactNode
}

type DocumentQuery = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const { site } = useStaticQuery<DocumentQuery>(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>
        {pageTitle} | {site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to='/' className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/about' className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to='/blog' className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
