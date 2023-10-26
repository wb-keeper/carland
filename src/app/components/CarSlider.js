"use client";

import "swiper/swiper.css";

import { motion } from "framer-motion";

const cars = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/casSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/casSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/casSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/casSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/casSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/casSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/casSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/casSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/casSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/casSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.7,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/casSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/casSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/casSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/casSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/casSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];
const CarSlider = () => {
  return <div></div>;
};

export default CarSlider;
