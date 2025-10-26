import React, { useCallback, useState } from "react";
import Heading from "../Heading/Heading";
import styles from "./SpecialMenu.module.css";
import special1 from "../assets/special1.png";
import special2 from "../assets/special2.png";
import special3 from "../assets/special3.png";
import SpecialMenuCard from "./SpecialMenuCard";
const SpecialMenu = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menuList = [
    {
      image: special2,
      name: "Classic Ribeye Steak",
      price: "30",
    },
    {
      image: special3,
      name: "Classic Ribeye Steak",
      price: "50",
    },
    {
      image: special1,
      name: "Classic Ribeye Steak",
      price: "20",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1);
  const findImage = useCallback(
    (direction) => {
      if (direction === "left") {
        return menuList.find(
          (_, index) => index === Math.max(0, activeIndex - 1)
        ).image;
      } else if (direction === "right") {
        return menuList.find(
          (_, index) => index === Math.min(activeIndex + 1, menuList.length - 1)
        ).image;
      }
    },
    [activeIndex, menuList]
  );

  return (
    <div className={styles.specialMenuWrapper}>
      <Heading
        heading1={"OUR MENU"}
        heading2={"Our"}
        highlightText={"Specials"}
      />
      <div className={styles.menuCard}>
        <div style={{ marginTop: "300px", opacity: "0.2" }}>
          <img src={findImage("left")} alt="menu" height={320} width={320} />
        </div>
        {menuList?.map((item, index) => {
          if (index === activeIndex) {
            return (
              <SpecialMenuCard
                image={item.image}
                name={item.name}
                price={item.price}
                key={index}
              />
            );
          }
        })}
        <div style={{ marginTop: "300px", opacity: "0.2" }}>
          <img src={findImage("right")} alt="menu" height={320} width={320} />
        </div>
      </div>
      <div
        style={{
          margin: "20px 0 20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className={styles.cardBtn}
          style={{
            marginRight: "20px",
            opacity: `${activeIndex === 0 ? "0.4" : "1"}`,
          }}
          onClick={() => {
            setActiveIndex(Math.max(0, activeIndex - 1));
          }}
          disabled={activeIndex === 0}
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <button
          className={styles.cardBtn}
          style={{
            opacity: `${activeIndex === menuList.length - 1 ? "0.4" : "1"}`,
          }}
          onClick={() => {
            setActiveIndex(Math.min(activeIndex + 1, menuList.length - 1));
          }}
          disabled={activeIndex === menuList.length - 1}
        >
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
