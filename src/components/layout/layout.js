/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        position: `fixed`,
        top: 0,
        width: `100%`,
        height: `100vh`,
        backgroundImage: `url(/assets/stock-photo-298221891.jpg)`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        boxSizing: `border-box`,
      }}
    >
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          boxSizing: `border-box`,
          overflow: `scroll`,
          height: `100vh`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
