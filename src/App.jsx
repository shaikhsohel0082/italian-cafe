import Home from "./Home/Home";
import styles from "./App.module.css";
import Menu from "./Menu/Menu";
import Service from "./Offer/Offer";
import SpecialMenu from "./SpecialMenu/SpecialMenu";
import Highlights from "./Highlights/Highlights";
import Guest from "./Guest/Guest";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import frame from "./assets/Frame.png";
function App() {
   function scrollToMenu() {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className={styles.app}>
      <Home />
      <Menu />
      <Service />
      <SpecialMenu />
      <Highlights />
      <Guest />
      <Contact />
      <Footer />
      <div className={styles.menu}  onClick={scrollToMenu}>
       <div className={styles.menuBtn}>
         <div><img src={frame} alt="menu" /></div>
        <p>View <br /> menu</p>
       </div>
      </div>
    </div>
  );
}

export default App;
