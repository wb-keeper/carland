"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../../variants";

const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col sm:py-6 justify-center">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <Image
              src={"icons/brands/ford.svg"}
              alt="ford"
              width={85}
              height={32}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/mercedes.svg"}
              alt="mercedes"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/audi.svg"}
              alt="audi"
              width={85}
              height={50}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/bmw.svg"}
              alt="bmw"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/vw.svg"}
              alt="vw"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/skoda.svg"}
              alt="skoda"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/mazda.svg"}
              alt="mazda"
              width={62}
              height={50}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Brands;
