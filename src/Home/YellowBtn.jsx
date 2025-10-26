import React from 'react'
import styles from "./Home.module.css"
const YellowBtn = ({label,handleClick}) => {
  return (
    <button onClick={handleClick} className={styles.yellowBtn}>
        {label} <span style={{marginLeft:"5px"}}><i className="fa-solid fa-arrow-right"></i></span>
    </button>
  )
}

export default YellowBtn
