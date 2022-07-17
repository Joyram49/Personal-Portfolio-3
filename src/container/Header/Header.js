import React from "react";
import classes from "./Header.module.css";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { Wrapper } from "../../hocWrapper";

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: -300,
  },
};

const circle = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
  hidden: {
    opacity: 0,
    x: 300,
  },
};

const circle_item = {
  visible: {
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  hidden: {
    scale: 0,
  },
};

const Header = () => {
  return (
    <div className={classes.header}>
      {/* header-info */}
      <motion.div
        className={classes.header_info}
        initial='hidden'
        animate='visible'
        variants={list}
      >
        <motion.div className={classes.introduction} variants={item}>
          <div className={classes.introduction_emoji}>
            <span>👋</span>
          </div>
          <div className={classes.introduction_name}>
            <p>Hello, I am</p>
            <h1>Joy</h1>
          </div>
        </motion.div>
        <motion.div className={classes.profession} variants={item}>
          <p>WEB DEVELOPER</p>
          <p>FREELANCER</p>
        </motion.div>
      </motion.div>

      {/* Header-image */}
      <div className={classes.header_img}>
        <div className={classes.hero_image}>
          <img src={images.profile} alt='hero-img' />
        </div>
        <motion.img
          whileInView={{ scale: [0, 1.2] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt='overlay-img'
          className={classes.image_overlay}
        />
      </div>

      {/* work-icons */}
      <motion.div
        className={classes.work_icons}
        variants={circle}
        initial='hidden'
        animate='visible'
      >
        {[images.flutter, images.redux, images.sass].map((image, index) => (
          <motion.div key={`circle-${index}`} variants={circle_item}>
            <img src={image} alt='work_icon' />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Wrapper(Header, "home");
