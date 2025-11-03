import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Microsoft_Logo_1.png";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center h-[95vh] bg-image">
      <motion.div  initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} className="relative card w-[320px] lg:w-[450px] shadow-xl px-5 lg:px-12 py-10 bg-white">

        <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden rounded-t-md">
          <motion.div
            className="h-full bg-[#1080db]"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>

        <img className="w-20 lg:w-28 pb-1" src={logo} alt="Microsoft Logo" />
        <h1 className="text-[14px] lg:text-[20px] font-semibold py-1">
          Trying to sign you in
        </h1>
        <p className="text-[#1080db] text-[12px] lg:text-[14px] hover:underline cursor-pointer">Cancel</p>
      </motion.div>
    </div>
  );
}
