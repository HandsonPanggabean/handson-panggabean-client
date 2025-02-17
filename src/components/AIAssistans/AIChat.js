import React, { useState } from "react";

// react lucide
import { Bot } from "lucide-react";

// Components
import Conversation from "./Conversation";

const AIChat = () => {
  const [isOpenModalChat, setIsOpenModalChat] = useState(false);
  return (
    <div className="relative z-20 h-full">
      {isOpenModalChat ? (
        <Conversation setIsOpenModalChat={setIsOpenModalChat} />
      ) : (
        <div
          className="fixed p-4 text-white bg-blue-900 rounded-full shadow-lg cursor-pointer bottom-8 right-8 md:bottom-16 md:right-16 dark:bg-yellow-400 focus:outline-none transition-opacity duration-300"
          onClick={() => setIsOpenModalChat(!isOpenModalChat)}
        >
          <Bot className="w-10 h-10 dark:text-black" />
        </div>
      )}
    </div>
  );
};

export default AIChat;
