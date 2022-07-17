import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { Wrapper } from "../../hocWrapper";
import { client, urlFor } from "../../client";
import { images } from "../../constants";
import classes from "./Testimonial.module.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'testimonials']";
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <div className={classes.testimonial}>
      <div className={classes.testimonial_heading}>
        <h1>Testimonial</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`MySwiper ${classes.swiper_container}`}
      >
        {testimonials.map((test) => (
          <SwiperSlide key={test.name} className={classes.test_content}>
            <div className={classes.test_img}>
              <img src={urlFor(test.imageurl)} alt={test.name} />
            </div>
            <div className={classes.test_info}>
              <p>{test.feedback}</p>
              <div className={classes.test_person}>
                <h3>{test.name}</h3>
                <p>{test.company}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ul className={classes.company_icons}>
        <li>
          <img src={images.amazon} alt='icons-img' />
        </li>
        <li>
          <img src={images.skype} alt='icons-img' />
        </li>
        <li>
          <img src={images.spotify} alt='icons-img' />
        </li>
        <li>
          <img src={images.adidas} alt='icons-img' />
        </li>
        <li>
          <img src={images.asus} alt='icons-img' />
        </li>
        <li>
          <img src={images.bolt} alt='icons-img' />
        </li>
      </ul>
    </div>
  );
};

export default Wrapper(Testimonial, "testimonial");
