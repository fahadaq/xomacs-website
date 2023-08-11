
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../images/logo.png"
import robot from "../images/robot.png"
// import PageBanner from "../layout/page-banner/PageBanner"
import Home from "../components/self/home"

const IndexPage = () => {
  return (
    <Layout>
      <Home/>
    </Layout>

    // <Layout>
    //   <PageBanner/>
    // </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
