import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <header id="contact-header">
      <h1 className="header-grid-item">{"Cole Finlayson"}</h1>
      <h2 className="header-grid-item">{"cole.fin8@gmail.com"}</h2>
      <h2 className="header-grid-item">
        <a
          style={{ color: "inherit" }}
          href="https://www.linkedin.com/in/cole-m-finlayson/"
        >
          {"LinkedIn"}
        </a>
      </h2>
      <h2 className="header-grid-item">
        <a style={{ color: "inherit" }} href="https://github.com/colefin8/">
          {"Github"}
        </a>
      </h2>
      <h2 className="header-grid-item">
        <a style={{ color: "inherit" }} href="/assets/Resume.pdf">
          {"Résumé"}
        </a>
      </h2>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
