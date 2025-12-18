import React from "react";
import { useDispatch, useSelector } from "react-redux";

// framer-motion
import { motion, AnimatePresence } from "framer-motion";

// react-responsive
import { useMediaQuery } from "react-responsive";

// Components
import Conversation from "./Conversation";
import SpinningAI from "./SpinningAI";

const AIChat = (props) => {
  const { showError, initialConversation } = props || {};
  const smallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const dispatch = useDispatch();
  const is_open_ai_modal_chat = useSelector(
    (state) => state.is_open_ai_modal_chat
  );
  const is_server_sleep = useSelector((state) => state.is_server_sleep);

  return (
    <div className="relative z-20 h-full">
      <AnimatePresence>
        {is_open_ai_modal_chat && (
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
              showError={showError}
              initialConversation={initialConversation}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      {!is_open_ai_modal_chat && !is_server_sleep && (
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed p-4 text-white transition-opacity duration-300 bg-blue-900 rounded-full shadow-lg cursor-pointer bottom-8 right-8 md:bottom-16 md:right-16 dark:bg-yellow-400 focus:outline-none"
          onClick={() =>
            dispatch({
              type: "SET_AI_MODAL_CHAT",
              is_open_ai_modal_chat: true,
            })
          }
        >
          <SpinningAI />
        </motion.div>
      )}
    </div>
  );
};

export default AIChat;
