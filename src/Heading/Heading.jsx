import React from 'react'
import styles from "./Heading.module.css"
const Heading = ({heading1,heading2,highlightText}) => {
  return (
   <div className={styles.offerHeading}>
        <p className={styles.heading1}>{heading1}</p>
        <h1 className={styles.heading2}>
          {heading2} &nbsp;
          <span className={styles.highlightText}>{highlightText}</span>
        </h1>
      </div>
  )
}

export default Heading
