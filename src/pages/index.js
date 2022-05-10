import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Courses from "../components/Home/LatestCourses"
import Projects from "../components/Home/Projects"
import SEO from "../components/seo"
const IndexPage = () => (
  <Layout>
    <SEO title="Home"></SEO>
    <HomeBanner></HomeBanner>
    <Courses></Courses>
    <Projects></Projects>
  </Layout>
)

export default IndexPage
