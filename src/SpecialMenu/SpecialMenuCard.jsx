import React from "react";
import vector from "../assets/Vector.png";
import styles from "./SpecialMenu.module.css"
const SpecialMenuCard = ({ image, price, name }) => {
  return (
    <div className={styles.menuCardWrapper}>
      <div
        style={{
          backgroundImage: `url(${vector})`,
          height: "126px",
          width: "126px",
          alignSelf:"flex-end",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginBottom:"20px",
          color:"#000000"
        }}
      >
        <span className={styles.menuPrice}>&euro;{price}</span>
      </div>
      <div>
        <img src={image} alt={name} height={360} width={360}/>
      </div>
      <div className={styles.menuName}>{name}</div>
    </div>
  );
};

export default SpecialMenuCard;
