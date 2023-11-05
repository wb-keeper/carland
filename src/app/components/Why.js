"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../variants";

function Why(props) {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <p className="max-w-[680px] text-center mx-auto mb-2">
          Our dedication to providing exceptional services sets up apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </p>
        <div className="hidden md:flex justify-center mb-6 xl:mb-2">
          <Image
            src={"/images/why/car.svg"}
            alt="car"
            width={1060}
            height={420}
          />
        </div>
        <div>grid</div>
      </div>
    </section>
  );
}

export default Why;
