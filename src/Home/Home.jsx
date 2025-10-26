import React from "react";
import styles from "./Home.module.css";
import logo from "../assets/logo.png";
import YellowBtn from "./YellowBtn";
const Home = () => {
  function scrollToMenu() {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div id="home">
      {/* Home header */}
      <div className={styles.homeHeader}>
        {/* left section */}
        <div className={styles.leftHeader}>
          <p>
            <i className={`${styles.headerIcon} fa-solid fa-location-dot`}></i>2
            Bury Old Road, Manchester, M8 9JN
          </p>

          <p>
            <i className={`${styles.headerIcon} fa-solid fa-clock`}></i> Mon-Sat
            11am - 11:30pm, Sun 12pm - 11pm
          </p>
        </div>
        {/* right section */}
        <div className={styles.rightHeader}>
          <p>
            {" "}
            <i className={`${styles.headerIcon} fa-solid fa-phone`}></i>0161 795
            5502
          </p>
          <p>
            <i className={`${styles.headerIcon} fa-solid fa-envelope`}></i>
            reservations@istanbulrestaurantmanchester.co.uk
          </p>
        </div>
      </div>
      {/* Home content */}
      <div className={styles.home}>
        {/* nav section */}
        <div className={styles.homeFirst}>
          <div className={styles.navWrapper}>
            <ul className={styles.nav} type="none">
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#menu">MENU</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="logo" height={101} width={177} />
          </div>
          <div style={{ width: "35%", textAlign: "end", marginRight: "30px" }}>
            <YellowBtn handleClick={scrollToMenu} label={"BOOK TABLE"} />
          </div>
        </div>
        <div className={styles.homeMain}>
          <div className={styles.cafeName}>
            {" "}
            Welcome To <br /> Cafe Italia
          </div>
          <YellowBtn handleClick={scrollToMenu} label={"VIEW MENU"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
