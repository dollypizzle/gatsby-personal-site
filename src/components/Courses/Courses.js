import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import Course from ./Course
import Course from "./Course"
import styles from "../../css/courses.module.css"
import Title from "../Title"
const query = graphql`
  {
    allContentfulCourses(sort: { fields: published, order: DESC }) {
      nodes {
        id
        size
        title
        url
        info {
          info
        }
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Courses = () => {
  const {
    allContentfulCourses: { nodes: courses },
  } = useStaticQuery(query)

  return (
    <section className={styles.courses}>
      <Title title="all courses"></Title>
      <div className="center">
        {courses.map(item => {
          return <Course key={item.id} {...item}></Course>
        })}
      </div>
    </section>
  )
}

export default Courses
