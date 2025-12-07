import React, { useState } from "react";

// react lucide
import { Bot } from "lucide-react";

// framer-motion
import { motion, AnimatePresence } from "framer-motion";

// react-responsive
import { useMediaQuery } from "react-responsive";

// Components
import Conversation from "./Conversation";

const AIChat = (props) => {
  const { is_server_sleep, handleWakeServer, showError, initialConversation } =
    props || {};
  const smallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const [isOpenModalChat, setIsOpenModalChat] = useState(false);

  return (
    <div className="relative z-20 h-full">
      <AnimatePresence>
        {isOpenModalChat && (
          <motion.div
            key="modal"
            initial={{
              opacity: 0,
              scale: 0.5,
              x: smallScreen ? 100 : 400,
              y: smallScreen ? 100 : 150,
            }} // Start from bottom-right
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} // Expand to center
            exit={{
              opacity: 0,
              scale: 0.5,
              x: smallScreen ? 100 : 400,
              y: smallScreen ? 100 : 150,
            }} // Shrink towards top-left
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-30 flex items-center justify-center"
          >
            <Conversation
              setIsOpenModalChat={setIsOpenModalChat}
              is_server_sleep={is_server_sleep}
              handleWakeServer={handleWakeServer}
              showError={showError}
              initialConversation={initialConversation}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      {!isOpenModalChat && (
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed p-4 text-white transition-opacity duration-300 bg-blue-900 rounded-full shadow-lg cursor-pointer bottom-8 right-8 md:bottom-16 md:right-16 dark:bg-yellow-400 focus:outline-none"
          onClick={() => setIsOpenModalChat(true)}
        >
          <Bot className="w-10 h-10 dark:text-black" />
        </motion.div>
      )}
    </div>
  );
};

export default AIChat;
