
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from "../images/logo.png"
import PageBanner from "../layout/page-banner/PageBanner"

const IndexPage = () => {
  return (
    <Layout>
      <div className="bg-zinc-950">
         <img src={logo} className="max-w-full"/>
         {/* <StaticImage src={logo} className="max-w-full bg-zinc-950"/> */}
      </div>
    </Layout>

    // <Layout>
    //   <PageBanner/>
    // </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
