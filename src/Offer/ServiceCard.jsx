import React from "react";
import styles from "./Offer.module.css"
const ServiceCard = ({ image, name, desc }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        width: "75%",
        backgroundSize: "cover",
        height: "564px",
        marginBottom: "20px",
        position:"relative",
        display:"flex",
        alignItems:"end",
        padding:"0 0 50px 50px"
      }}
    >
      <div className={styles.overlayContent}></div>
      <div className={styles.actualContent}>
        <h1 className={styles.cardName}>{name}</h1>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
