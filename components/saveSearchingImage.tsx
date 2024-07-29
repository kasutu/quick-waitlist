"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

export default function saveSearchingImage() {
  return (
    <motion.div
      className="scale-125 xl:scale-150 relative w-screen h-fit basis-1/2 pointer-events-none"
      initial={{ opacity: 0.1 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src={"/screenshot.png"}
        alt="screenshot"
        height={500}
        width={500}
        className="-mr-16 sm:mr-10 mt-24 md:mr-0 md:-mt-56 lg:-mt-80 xl:-mt-48 lg:mr-12 float-right overflow-hidden"
        priority
      />
    </motion.div>
  );
}
