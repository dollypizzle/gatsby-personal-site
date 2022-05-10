import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/projects.module.css"
import Project from "./Project"
import Title from "../Title"
import SelectInput from "./SelectInput"
// projects center
const query = graphql`
  query MyQuery {
    allContentfulProjects(sort: { order: DESC, fields: updatedAt }) {
      nodes {
        completeProject
        starterFiles
        title
        url
        id
        info {
          info
        }
        technology
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        api
      }
    }
  }
`

const Projects = () => {
  const {
    allContentfulProjects: { nodes },
  } = useStaticQuery(query)
  const [projects, setProjects] = React.useState(nodes)
  const [type, setType] = React.useState("all")

  React.useEffect(() => {
    let tempProjects = [...nodes]
    if (type !== "all") {
      tempProjects = tempProjects.filter(item => {
        return item.technology === type
      })
    }
    setProjects(tempProjects)
  }, [type])
  const handleChange = e => {
    setType(e.target.value)
  }
  return (
    <section className={styles.projects}>
      <Title title="latest projects"></Title>
      <SelectInput type={type} handleChange={handleChange} projects={nodes} />
      <div className="center">
        {projects.map(item => {
          return <Project key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Projects
