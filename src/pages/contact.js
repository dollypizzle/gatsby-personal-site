import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/contact.module.css"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className={styles.contact}>
        <Title title="contact"></Title>
        <article className={styles.text}>
          <p>
            If you are looking to get ahold of me, you can send me an email at{" "}
            <a href="mailto:johnsmilga@gmail.com">johnsmilga@gmail.com</a>
          </p>
          <p>
            You can also reach me on Twitter at{" "}
            <a href="https://twitter.com/john_smilga?lang=en">@john_smilga</a>
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default contact
