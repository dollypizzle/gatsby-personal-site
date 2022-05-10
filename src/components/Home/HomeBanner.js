import React from "react"
import Background from "./Background"
import styles from "../../css/banner.module.css"

const HomeBanner = () => {
  return (
    <Background>
      <div className={styles.banner}>
        <h1>
          project based
          <br />
          web development
          <br />
          courses
        </h1>
      </div>
    </Background>
  )
}

export default HomeBanner
