import React from "react";
import classes from "./wrapper.module.css";

import { SocialIcons, NavigationDots } from "../../component";

const Wrapper = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`${classes.wrapper} ${classNames}`}>
        <SocialIcons />
        <div className={classes.wrapper_component}>
          <Component />
          <div className={classes.copyright}>
            <p>
              <span>&copy;</span> 2020 RD
            </p>
            <p>All Rights Reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
export default Wrapper;
