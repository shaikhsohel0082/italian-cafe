import React from 'react'
import styles from "./Menu.module.css"
import YellowBtn from '../Home/YellowBtn'
import italian from "../assets/italian dishes.jpg";
import pastry from  "../assets/pastry.jpg";
import coffee from  "../assets/coffee.png";
import MenuCard from './MenuCard';
const Menu = () => {
  const menuList=[
    {
      name:"Italian dishes",
      image:italian
    },
    {
      name:"Pastry",
      image:pastry
    },
    {
      name:"Coffee",
      image:coffee
    }
  ]
  return (
    <div className={styles.menuWrapper} id="menu">
      {/* menu heading */}
      <div className={styles.headingWrapper}>
        <h6 className={styles.heading1}>Explore menu</h6>
        <h2 className={styles.heading2}>Our Menu</h2>
      </div>
      {/* menu images */}
      <div style={{display:"flex"}}>
        {menuList?.map((item,index)=>(
          <MenuCard image={item.image} label={item.name} key={index}/>
        ))}
      </div>
      {/* view menu */}
      <div style={{marginTop:"50px"}}>
        <YellowBtn handleClick={()=>{}} label={"VIEW MENU"}/>
      </div>
    </div>
  )
}

export default Menu
