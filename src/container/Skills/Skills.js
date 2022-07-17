import React, { useState, useEffect } from "react";
import { Wrapper } from "../../hocWrapper";
import ReactTooltip from "react-tooltip";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import classes from "./Skills.module.css";

const randomNumber = Math.floor(Math.random() * 10000000);

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillQuery = "*[_type == 'skills']";
    const expQuery = "*[_type == 'experiences']";

    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });
    client.fetch(expQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <div className={classes.skills}>
      <motion.div
        className={classes.skills_heading}
        whileInView={{ y: [100, 0] }}
        transition={{ duration: 0.5, ease: "easeInOut", delayChildren: ".5" }}
      >
        <h1>
          skills <span> &amp; </span> Experience
        </h1>
      </motion.div>
      <motion.div
        className={classes.skills_container}
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut", delayChildren: ".5" }}
      >
        {/* Skill Content */}
        {/* {console.log(skills)} */}
        <div className={classes.skills_content}>
          {skills.map((skill, index) => (
            <div
              className={classes.skill_item}
              key={skill.name}
              style={
                skill.bgColor
                  ? { backgroundColor: skill.bgColor }
                  : { backgroundColor: "#9bafd4" }
              }
            >
              <div className={classes.skill_item_img}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Experience Content */}
        <div className={classes.experiences_content}>
          {/* {console.log(experiences)} */}
          {experiences.map((experience, index) => (
            <div className={classes.experience_item} key={index}>
              <h3>{experience.year} </h3>
              {experience.works.map((expWork) => (
                <>
                  <div
                    className={classes.exp_item_work}
                    key={expWork._id}
                    data-tip
                    data-for={expWork.name}
                  >
                    <h3>{expWork.name}</h3>
                    <p>{expWork.company}</p>
                  </div>
                  <ReactTooltip
                    key={randomNumber + expWork.name}
                    backgroundColor='#f5f5f5'
                    id={expWork.name}
                    effect='solid'
                    arrowColor='#fff'
                    textColor='#202201'
                    className={classes.exp_tooltip}
                  >
                    {expWork.desc}
                  </ReactTooltip>
                </>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Wrapper(Skills, "skills");
