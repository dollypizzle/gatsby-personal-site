import React from "react"
import styles from "../../css/input.module.css"
export default function SelectInput({ type, handleChange, projects }) {
  let types = [...new Set(projects.map(item => item.technology))]
  types = ["all", ...types]

  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="type">choose technology</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={handleChange}
          className={styles.formControl}
        >
          {types.map((item, index) => {
            return (
              <option key={index} value={item} className={styles.type}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
    </form>
  )
}
