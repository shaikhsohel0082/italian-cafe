import React from "react";
import Heading from "../Heading/Heading";
import styles from "./Contact.module.css"
const Contact = () => {
  return (
    <div id="contact">
      <Heading heading1={"Connect with us"} heading2={"Contact Us"} />
      <div className={styles.contactWrapper}>
        <div className={styles.booking}>
          <p className={styles.heading}>Booking request</p>
          <p className={styles.phone}>0161 795 5502</p>
        </div>
        <div  className={styles.location}>
          <p className={styles.heading}>Location</p>
          <p className={styles.add} >2 Bury Old Road,Manchester, M8 9JN</p>
        </div>
        <div className={styles.hours}>
          <p className={styles.heading}>Opening Hours</p>
          <p className={styles.add} >Monday to Saturday 11:00am - 11:30pm Sunday 12:00pm - 11:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
