"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import Image from "next/image";
import { MdOutlineDirectionsCar } from "react-icons/md";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="section flex items-center bg-pink-50"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div>
            <Image
              className="rounded-[20px]"
              src={"/images/about/car01.png"}
              alt="about"
              width={600}
              height={448}
            />
          </div>
          <div>
            <div>
              <h2>Car services simplified.</h2>
              <p>
                Rent, choose, and repair with ease. Out convenient locations,
                diverse car types, and reliable repair points ensure a seamless
                car experience.
              </p>
              <div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb22" />
                  <div className="text-5xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb22" />
                  <div className="text-5xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb22" />
                  <div className="text-5xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-secondary">
                    car <br /> types
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
