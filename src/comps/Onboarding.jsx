import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import EnvelopeAnimation from "./EnvelopeAnimation";
import LoadingScreen from "./LoadingScreen";
import { motion, AnimatePresence } from "framer-motion";

export default function Onboarding() {
  const [stage, setStage] = useState("envelope");
  const navigate = useNavigate();

  useEffect(() => {
    if (stage === "envelope") {
      const timer = setTimeout(() => setStage("loading"), 3000);
      return () => clearTimeout(timer);
    } else if (stage === "loading") {
      const timer = setTimeout(() => {
        setStage("done");
        navigate("/signin");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [stage, navigate]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        {stage === "envelope" && (
          <motion.div
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <EnvelopeAnimation />
          </motion.div>
        )}

        {stage === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
