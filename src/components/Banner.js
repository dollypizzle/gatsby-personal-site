import React from "react"
import styles from "../css/banner.module.css"
const Banner = ({ children }) => {
  return (
    <div className={styles.banner}>
      <h1>
        project based <br /> web development
        <br />
        courses
      </h1>
      {children}
    </div>
  )
}

export default Banner
