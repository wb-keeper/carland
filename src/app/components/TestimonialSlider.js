"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    message:
      "They truly exceeded my exectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Does",
    job: "Photographer and Videographer",
  },
  {
    message:
      "They truly exceeded my exectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer and Videographer",
  },
];
function TestimonialSlider(props) {
  return (
    <div>
      <Swiper>
        {testimonialData.map((person, index) => {
          const { message, avatar, mane, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-13 font-medium">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt="avatar"
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
