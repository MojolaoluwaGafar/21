import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function footer() {
  return (
    <motion.div  initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} className="flex flex-row gap-5 text-[12px] lg:text-[14px] justify-end h-[5vh]">
        <p className="hover:underline hover:cursor-pointer ">Terms of use</p>
        <p className="hover:underline hover:cursor-pointer">Privacy & cookies</p>
        <p>. . .</p>
    </motion.div>
  )
}
