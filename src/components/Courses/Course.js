import React from "react"
import styles from "../../css/single-course.module.css"
import Image from "gatsby-image"
const Course = ({ title, url, size, image, info }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="course-link"
    >
      <article className={styles.course}>
        <div className={styles.container}>
          <Image fluid={image.fluid} />
          <p>{size} hours</p>
        </div>
        <div className={styles.footer}>
          <h4>{title}</h4>
          <p>
            {(info && info.info) ||
              "Biodiesel humblebrag vinyl farm-to-table street art. Ugh kombuchatattooed kickstarter affogato squid franzen ramps hella viralintelligentsia pabst swag"}
          </p>
        </div>
      </article>
    </a>
  )
}

export default Course
