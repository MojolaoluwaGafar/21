import React from "react";
import { motion } from "framer-motion";

export default function EnvelopeAnimation() {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ rotateX: 0 }}
        animate={{ rotateX: 180 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-32 h-20 bg-blue-300 relative rounded-b-md overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-500 clip-path-triangle"></div>
      </motion.div>
      
    </div>
  );
}
