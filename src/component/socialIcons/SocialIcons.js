import React from "react";
import classes from "./socialIcons.module.css";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className={classes.social_icons}>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialIcons;
