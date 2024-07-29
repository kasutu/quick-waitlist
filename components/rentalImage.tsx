"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

export default function RentalImage() {
  return (
    <motion.div
      className="scale-125 relative w-screen h-fit basis-1/2 pointer-events-none"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      viewport={{ once: true, amount: 0.35 }}
    >
      <Image
        src={"/phone1.png"}
        alt="phone1"
        height={500}
        width={500}
        className="-ml-16 sm:ml-10 md:ml-0 lg:ml-12 md:absolute md:top-3 md:-left-4"
        priority
      />
      <Image
        src={"/phone2.png"}
        alt="phone2"
        width={500}
        height={500}
        className="-ml-16 md:-ml-4 lg:ml-12 mt-60 hidden md:block"
        priority
      />
    </motion.div>
  );
}
