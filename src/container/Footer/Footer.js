import React from "react";
import classes from "./Footer.module.css";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { Wrapper } from "../../hocWrapper";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_heading}>
        <h1>
          Take a Coffe <span>&amp;</span> Chat With Me
        </h1>
      </div>
      <div className={classes.footer_content}>
        <motion.div
          className={classes.footer_left}
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{
            duration: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.5,
          }}
        >
          <div>
            <img src={images.email} alt='email-img' />
            <p>joyram2015@gmail.com</p>
          </div>
          <div>
            <img src={images.mobile} alt='mobile-img' />
            <p>+1(123) 456-789</p>
          </div>
        </motion.div>
        <form method='post' className={classes.footer_form}>
          <input type='text' placeholder='Enter Name' />
          <input type='email' placeholder='Enter Email' />
          <textarea type='text' placeholder='Enter Meassage' />
          <button type='button'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Wrapper(Footer, "contact");
