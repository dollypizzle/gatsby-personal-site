import React from "react"
import styles from "../css/title.module.css"
const Title = ({ title, subtitle }) => {
  return (
    <div className={styles.banner}>
      <h2>{title}</h2>
      <div className={styles.underline}></div>
    </div>
  )
}

export default Title
