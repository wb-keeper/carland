"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <div className="container mx-auto">
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
              alt="ford"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/audi.svg"}
              alt="ford"
              width={85}
              height={50}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/bmw.svg"}
              alt="ford"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/vw.svg"}
              alt="ford"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/scoda.svg"}
              alt="ford"
              width={60}
              height={60}
            />
          </div>
          <div>
            <Image
              src={"icons/brands/mazda.svg"}
              alt="ford"
              width={62}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
