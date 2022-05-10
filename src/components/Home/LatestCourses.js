import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Course from "../Courses/Course"
import styles from "../../css/courses.module.css"
import Title from "../Title"
const query = graphql`
  {
    allContentfulCourses(sort: { fields: published, order: DESC }, limit: 6) {
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
      <Title title="latest courses"></Title>
      <div className="center">
        {courses.map(item => {
          return <Course key={item.id} {...item}></Course>
        })}
      </div>
      <div className="center-div">
        <Link to="/courses" className="btn">
          all courses
        </Link>
      </div>
    </section>
  )
}

export default Courses
