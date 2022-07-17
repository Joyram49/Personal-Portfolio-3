import React, { useState, useEffect } from "react";
import classes from "./About.module.css";
import { AboutCard } from "../../component";

import { client, urlFor } from "../../client";
import { Wrapper } from "../../hocWrapper";

const About = () => {
  const [abouts, setabout] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'abouts']";
    client.fetch(query).then((data) => setabout(data));
  }, []);

  return (
    <div className={classes.about}>
      <div className={classes.about_info}>
        <h1>
          I know That <span>Good Design</span>
          <br />
          Means <span>Good Business</span>
        </h1>
      </div>
      <div className={classes.aCard_container}>
        {abouts.map((about, index) => (
          <AboutCard
            key={about.title + index}
            image={urlFor(about.imgUrl)}
            heading={about.title}
            desc={about.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Wrapper(About, "about");
