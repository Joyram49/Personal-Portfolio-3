import React, { useState, useEffect } from "react";
import { Wrapper } from "../../hocWrapper";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

import classes from "./Work.module.css";

const workCategory = ["UI/UX", "Web App", "Mobile App", "React JS", "All"];

const Work = () => {
  const [aciveFilter, setaciveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  const [works, setworks] = useState([]);
  const [filterWorks, setfilterWorks] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'works']";

    client.fetch(query).then((data) => {
      setworks(data);
      setfilterWorks(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setaciveFilter(item);
    setanimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setanimateCard({ y: 0, opacity: 1 });
      if (item === "All") {
        setfilterWorks(works);
      } else {
        setfilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className={classes.work}>
      <h1 className={classes.work_heading}>
        My Creative <span>Portfolio Section</span>
      </h1>
      <motion.div
        className={classes.work_category}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5, staggerChildren: 0.5 }}
      >
        {workCategory.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={
              aciveFilter === item
                ? `${classes.work_category_item} ${classes.work_category_active}`
                : classes.work_category_item
            }
          >
            <h2>{item}</h2>
          </div>
        ))}
      </motion.div>
      <motion.div className={classes.work_content} animate={animateCard}>
        {filterWorks.map((work, index) => (
          <motion.div className={classes.work_content_item} key={index}>
            <div className={classes.work_item_img}>
              <img src={urlFor(work.imgUrl)} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={classes.work_item_link}
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className={classes.work_info}>
              <h1>{work.title}</h1>
              <p>{work.description}</p>
            </div>
            <div className={classes.work_item_tag}>
              <p>{work.tags[0]}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Wrapper(Work, "work");
