import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const navItemList = [
  "home",
  "about",
  "work",
  "skills",
  "testimonial",
  "contact",
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__brand}>
        <a href='#home'>
          <img src={images.logo} alt='logo-img' />
        </a>
      </div>
      <ul className={classes.nav__list}>
        {navItemList.map((item, index) => (
          <li className={classes.nav__listItem} key={`key-${index}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      {showMenu ? (
        <motion.div
          className={classes.mobile_navbar}
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className={classes.close__menu}>
            <HiX onClick={() => setShowMenu(false)} />
          </div>
          <ul className={classes.mobile_nav__list}>
            {navItemList.map((item, index) => (
              <li className={classes.nav__listItem} key={index}>
                <a href={`#${item}`} onClick={() => setShowMenu(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : (
        <div className={classes.show__menu}>
          <HiMenuAlt4 onClick={() => setShowMenu(true)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
