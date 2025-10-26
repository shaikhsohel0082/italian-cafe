import React, { useState } from "react";
import styles from "./Menu.module.css";
const MenuCard = ({ image, label }) => {
  const [isHoverd, setIshovered] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "598px",
        width: "444px",
        color: "white",
        backgroundSize: "cover",
        marginRight: "50px",
      }}
      className={styles.menuCard}
    >
      <div className={styles.overlayStyle}></div>
      <div className={styles.contentStyles}>
        <p className={styles.cardLabel}>{label}</p>
        <button
          className={styles.cardBtn}
          onMouseEnter={() => {
            setIshovered(true);
          }}
          onMouseLeave={() => {
            setIshovered(false);
          }}
        >
          View Menu
          <div style={{ visibility: `${isHoverd ? "visible" : "hidden"}` }} className={styles.hrContainer}>
            <hr />
            <hr />
          </div>
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
