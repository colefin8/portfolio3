import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Header from "../../components/header"

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
    <>
      <div
        style={{
          width: `100%`,
          height: `100vh`,
          backgroundImage: `url(/assets/background.jfif)`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          boxSizing: `border-box`,
        }}
      >
        {/* <Header siteTitle={data.site.siteMetadata.title} / */}
        <div
          style={{
            boxSizing: `border-box`,
            overflowY: "scroll",
            height: `100vh`,
          }}
        >
          <Header />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
