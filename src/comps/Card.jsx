import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Microsoft_Logo_1.png";
import { GrKey } from "react-icons/gr";
import { useNavigate } from "react-router"

export default function EmailSignIn() {
  const Navigate = useNavigate()

  const handleSignIn= (e)=>{
    e.preventDefault();
    Navigate("/pass")
  }
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex flex-col items-center"
    >
      <div className="card w-[320px] lg:w-[480px] shadow-xl px-5 lg:px-12 py-10 my-1">
        <img className="w-20 lg:w-30 pb-1" src={logo} alt="logo" />
        <h1 className="text-[25px] font-semibold py-1">Sign in</h1>

        <form action="">
          <input
            className="py-2 my-2 border-b w-full outline-0"
            type="text"
            placeholder="Email, phone, or Skype"
          />
        </form>

        <p className="py-2 text-[13px]">
          No account?{" "}
          <span className="text-[#1080db] hover:underline hover:cursor-pointer hover:text-gray-600">
            Create one!
          </span>
        </p>
        <p className="text-[#1080db] text-[13px] pb-2 hover:underline hover:cursor-pointer hover:text-gray-600">
          Can’t access your account?
        </p>

        <div className="flex justify-end">
          <button onClick={handleSignIn} className="bg-[#1080db] text-white border-2 border-[#69b5f3] hover:bg-[#0c66b0] w-[80px] lg:w-[100px] py-1">
            Next
          </button>
        </div>
      </div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        className="flex gap-2 items-center mt-7 card w-[320px] lg:w-[480px] shadow-xl px-5 lg:px-12 py-3 hover:bg-neutral-300 hover:cursor-pointer"
      >
        <GrKey size={22} /> Sign-in options
      </motion.div>
    </motion.div>
  );
}
