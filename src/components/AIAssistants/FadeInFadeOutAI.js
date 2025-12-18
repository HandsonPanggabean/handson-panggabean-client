import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useEffect, useState } from "react";

const STEP_DURATION = 1000; // ms per step

/**
 * phases:
 * 0 = Bot in
 * 1 = Bot out
 * 2 = AI in
 * 3 = AI out
 */
const ProgressAISpinner = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, STEP_DURATION);

    return () => clearInterval(timer);
  }, []);

  const isBot = phase === 0 || phase === 1;
  const isEntering = phase === 0 || phase === 2;

  return (
    <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden">
      <motion.div
        key={`${isBot}-${isEntering}`} // forces animation per phase
        initial={{ opacity: isEntering ? 0 : 1, scale: isEntering ? 0.8 : 1 }}
        animate={{ opacity: isEntering ? 1 : 0, scale: isEntering ? 1 : 0.8 }}
        transition={{
          duration: STEP_DURATION / 1000,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isBot ? (
          <Bot className="w-10 h-10 dark:text-black" />
        ) : (
          <span className="flex items-center justify-center w-10 h-10 text-xl font-extrabold dark:text-black">
            AI
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default ProgressAISpinner;
