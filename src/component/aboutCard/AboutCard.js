import React from "react";
import classes from "./AboutCard.module.css";
import { motion } from "framer-motion";

const AboutCard = ({ image, heading, desc }) => {
  return (
    <motion.div
      className={classes.about_card}
      whileHover={{ scale: [1, 1.1] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <img src={image} alt='card-img' />
      <h1>{heading}</h1>
      <p>{desc}</p>
    </motion.div>
  );
};

export default AboutCard;
