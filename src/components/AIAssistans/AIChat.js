import React, { useState } from "react";

// react lucide
import { Bot } from "lucide-react";

// Components
import Conversation from "./Conversation";

const AIChat = () => {
  const [isOpenModalChat, setIsOpenModalChat] = useState(false);
  return (
    <div className="relative h-full z-20">
      {isOpenModalChat ? (
        <Conversation setIsOpenModalChat={setIsOpenModalChat} />
      ) : (
        <div
          className="fixed bottom-8 right-8 md:bottom-16 md:right-16 dark:bg-yellow-400 bg-blue-900 text-white p-4 rounded-full shadow-lg focus:outline-none transition-opacity duration-300 cursor-pointer"
          onClick={() => setIsOpenModalChat(!isOpenModalChat)}
        >
          <Bot className="w-10 h-10 dark:text-black" />
        </div>
      )}
    </div>
  );
};

export default AIChat;
