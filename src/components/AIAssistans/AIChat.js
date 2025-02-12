import React, { useState } from "react";

// react lucide
import { MessageCircle } from "lucide-react";

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
          className="fixed bottom-8 right-8 md:bottom-16 md:right-16 dark:bg-blue-600 bg-blue-900 text-white p-4 rounded-full shadow-lg focus:outline-none transition-opacity duration-300 cursor-pointer"
          onClick={() => setIsOpenModalChat(!isOpenModalChat)}
        >
          <MessageCircle className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default AIChat;
