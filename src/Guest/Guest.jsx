import React from "react";
import styles from "./Guest.module.css";
import Heading from "../Heading/Heading";
import guest1 from "../assets/guest1.jpg";
import guest2 from "../assets/guest2.jpg";
import guest3 from "../assets/guest3.jpg";
import insta1 from "../assets/insta1.png";
import insta2 from "../assets/insta2.png";
import insta3 from "../assets/insta3.png";
import insta4 from "../assets/insta4.png";
import insta5 from "../assets/insta5.png";
import insta6 from "../assets/insta6.png";
import insta7 from "../assets/insta7.png";
import insta8 from "../assets/insta8.png";
const GenerateStars = ({ count = 0 }) => {
  return (
    <div>
      {[...Array(count)].map((_, index) => (
        <i
          className="fa-solid fa-star"
          key={index}
          style={{ color: "#BC995D", marginRight: "3px" }}
        ></i>
      ))}
    </div>
  );
};
const Guest = () => {
  const guestList = [
    {
      name: "Anna Mathew",
      visit: "one day ago",
      profile: guest1,
      stars: 5,
      rating:
        "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our",
    },
    {
      name: "Gerrin Tom",
      visit: "one day ago",
      profile: guest2,
      stars: 5,
      rating:
        "We booked private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
    },
    {
      name: "Mery Elza",
      visit: "one day ago",
      profile: guest3,
      stars: 5,
      rating:
        "Best steak I’ve ever had! The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
    },
  ];

  const imageGallery = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
    insta7,
    insta8,
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Heading heading1={"Reviews"} heading2={"Hear Our Guests "} />
      {/* reviews  */}
      <div className={styles.guestWrapper}>
        {guestList?.map((guest, index) => (
          <Review guest={guest} key={index} />
        ))}
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
          }}
          onClick={() => {}}
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <button className={styles.cardBtn} style={{}} onClick={() => {}}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
      {/* instagram galary */}
      <div className={styles.instaGalary}>
        <div
          style={{
            display: "flex",
            maxWidth: "90%",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft:"80px"
          }}
        >
          <div>
            <p className={styles.gallery}>GALLERY</p>
            <h2 className={styles.follow}>follow us</h2>
          </div>
          <div>
            <span className={styles.icon}>
              <i className="fa-brands fa-instagram"></i>
            </span>

            <span className={styles.iconText}>Check out our instagram</span>
          </div>
        </div>
        <div style={{ marginLeft: "80px" }}>
          {imageGallery?.map((item,index) => (
            <img
              src={item}
              alt={item}
              height={338}
              width={338}
              style={{ margin: "0 2px 2px 0" }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Review = ({ guest }) => {
  return (
    <div className={styles.guestList}>
      <div className={styles.profileWrapper}>
        <div>
          <img
            className={styles.profile}
            src={guest.profile}
            alt={guest.name}
            height={48}
            width={48}
          />
        </div>
        <div>
          <span className={styles.name}>{guest.name}</span>
          <br />
          <span className={styles.visit}>{guest.visit}</span>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <GenerateStars count={guest.stars} />
        <p className={styles.rating}>{guest.rating}</p>
      </div>
    </div>
  );
};
export default Guest;
