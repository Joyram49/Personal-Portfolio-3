import React from "react";
import classes from "./navigationDots.module.css";

const NavigationDots = ({ active }) => {
  return (
    <div className={classes.navigationDots}>
      {["home", "about", "work", "skills", "testimonial", "contact"].map(
        (item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            href={`#${item}`}
            key={item + index}
            className={classes.navigationDots_item}
            style={active === item ? { backgroundColor: "#313bac" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
