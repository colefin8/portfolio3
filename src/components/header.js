import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: "fixed",
      backgroundColor: "white",
      top: '0',
      width: "100%",
      height: "10vh",
      marginBottom: `1.45rem`,
    }}
  >
    <h1 style={{ margin: 0 }}>
  {'Cole Finlayson'}
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
