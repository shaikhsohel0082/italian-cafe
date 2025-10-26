import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import google from "../assets/Googel.png";
import eagle from "../assets/eagle.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* logo */}
      <div>
        <img src={logo} alt="logo" height={108} width={188} />
      </div>
      {/* Menu */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul type="none" className={styles.nav}>
          <li>
            <a href="#home" style={{ color: "#ababab" }}>
              HOME
            </a>
          </li>
          <li>
            <a href="#menu" style={{ color: "#ababab" }}>
              MENU
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: "#ababab" }}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: "#ababab" }}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      {/* social icons */}
      <div className={styles.iconWrapper}>
        <ul type="none" className={styles.social}>
          <li>
            <a
              href="https://www.linkedin.com/in/73405-sohel-shaikh/"
              target="_blank"
            >
              {" "}
              <img src={insta} alt={"inta"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/73405-sohel-shaikh/"
              target="_blank"
            >
              <img src={eagle} alt={""} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/73405-sohel-shaikh/"
              target="_blank"
            >
              <img src={google} alt={"google"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/73405-sohel-shaikh/"
              target="_blank"
            >
              <img src={facebook} alt={"facebook"} />
            </a>
          </li>
        </ul>
      </div>
      {/* copyright */}
      <div className={styles.watermark}>
        © 2024 Istanbul Restaurant Manchester. All Rights Reserved |
        <span className={styles.company}>Powered By Foodo</span>
      </div>
    </div>
  );
};

export default Footer;
