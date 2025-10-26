import React from "react";
import styles from "./Offer.module.css";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import ServiceCard from "./ServiceCard";
import Heading from "../Heading/Heading";
const Service = () => {
  const serviceList = [
    {
      name: "Food",
      image: offer3,
      desc: "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our ",
    },
    {
      name: "Drinks",
      image: offer2,
      desc: "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our ",
    },
    {
      name: "Atmosphere",
      image: offer1,
      desc: "Bavette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality. Every dish is a labor of love, crafted by our ",
    },
  ];
  return (
    <div className={styles.offerWrapper}>
      {/* heading */}
      <Heading
        heading1={"WE OFFER"}
        heading2={"Unforgettable Dining"}
        highlightText={"Experience"}
      />
      {/* images */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        {serviceList?.map((item, index) => (
          <ServiceCard
            image={item.image}
            name={item.name}
            desc={item.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
