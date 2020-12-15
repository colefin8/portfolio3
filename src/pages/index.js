import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Skills from "../components/Skills"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Home" />
    <section className="content" id="bigger">
      <div id="garage-door-img">
        <div className="hover-text">
          {
            "I'm a full stack web developer from Provo, UT with a background in "
          }
          <a
            style={{ color: "inherit" }}
            href="http://wasatchcarriagehousedoors.com/"
          >
            {"finish carpentry."}
          </a>
          <br />
          <br />
          {
            "Changing careers to web development lets me apply the skills I learned in that field"
          }
          <br />
          <br />
          {
            "to be able to provide custom high quality products that are tailored to the client"
          }
        </div>
      </div>
    </section>{" "}
    <section className="content">
      <h1>Skills</h1>
      <Skills />
    </section>{" "}
    <section className="content">
      <h1> Main Page</h1>
    </section>
  </Layout>
)

export default IndexPage
