import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";
import { useEffect, useState } from "react";

const SpinningAI = ({ interval = 2000 }) => {
  const [showBot, setShowBot] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowBot((prev) => !prev);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="relative flex items-center justify-center w-10 h-10">
      <AnimatePresence mode="wait">
        {showBot ? (
          <motion.div
            key="bot"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Bot className="w-10 h-10 dark:text-black" />
          </motion.div>
        ) : (
          <motion.div
            key="ai"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-extrabold tracking-widest dark:text-black"
          >
            AI
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpinningAI;
