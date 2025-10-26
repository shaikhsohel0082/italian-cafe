import React from "react";
import styles from "./Hightlight.module.css";
import Heading from "../Heading/Heading";
import highlight1 from "../assets/highlight1.png";
import highlight2 from "../assets/highlight2.png";
import highlight3 from "../assets/highlight3.png";
import highlight4 from "../assets/highlight4.png";
import dining from "../assets/privateDinning.png";
import YellowBtn from "../Home/YellowBtn";
const Highlights = () => {
  const imageList = [
    {
      image: highlight1,
      name: "Adana Kebab",
      price: "120",
    },
    {
      image: highlight2,
      name: "Meze Platter",
      price: "120",
    },
    {
      image: highlight3,
      name: "Baklava",
      price: "120",
    },
    {
      image: highlight4,
      name: "Kebab Platter",
      price: "120",
    },
  ];
  return (
    <div className={styles.highlightWrapper} id="about">
      <Heading
        heading1={"Our top picks this month"}
        heading2={"Monthly"}
        highlightText={"Highlights"}
      />
      <div className={styles.imgContainer}>
        {imageList?.map((item,index) => (
          <SingleImage image={item.image} name={item.name} price={item.price} key={index}/>
        ))}
      </div>
      <div
        className={styles.privateDinning}
        style={{
          backgroundImage: `url(${dining})`,
          backgroundSize: "cover",
          height: "90vh",
          width: "90%",
          alignSelf: "center",
        }}
      >
        <div className={styles.overlayDisplay}></div>
        <div className={styles.diningWrapper}>
          <h6 className={styles.heading1}>Booking</h6>
          <h1 className={styles.heading2}>Private & Group Dining </h1>
          <p className={styles.para} >
            At Bavette, we specialize in creating memorable dining experiences,
            whether you're seeking an intimate gathering or a grand celebration.
            Our private and group dining options are designed to meet your
            unique needs with personalized service, exceptional food, and a
            welcoming atmosphere.
          </p>
          <YellowBtn handleClick={()=>{}} label={"BOOK NOW"}/>
        </div>
      </div>
    </div>
  );
};
const SingleImage = ({ image, name, price }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} height={387} width={292} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <br />
        <span className={styles.price}>&euro; {price}</span>
      </div>
    </div>
  );
};
export default Highlights;
