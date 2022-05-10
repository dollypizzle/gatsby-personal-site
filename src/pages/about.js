import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>
            Hello, I am Dollypizzle and I am a web developer. I live and work in
            Los Angeles, CA. I spend most of my day, experimenting with HTML,
            CSS and JavaScript (and its endless list of frameworks). I enjoy
            coding and the challenge of learning something new everyday. You can
            also find me at youtube channel
            <a href="https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA">
              Coding Addict.
            </a>
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default about
