"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";

const testimonialData = [
  {
    message:
      "They truly exceeded my exectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truly exceeded my exectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
];
function TestimonialSlider(props) {
  return (
    <div>
      <Swiper>
        {testimonialData.map((person, index) => {
          return <SwiperSlide>slide</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
