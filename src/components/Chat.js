import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// Apis
import { initiateAssistant, talkToAssistant } from "../apis/assistants";
import LoadingAnimation from "./LoadingAnimation";

const Chat = () => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.messages);

  const [userMsg, setUserMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInitiateAssistant = async () => {
    const result = await initiateAssistant();
    if (result && result.data) {
      let finalMessages = [...messages];
      finalMessages.push({ role: "assistant", content: result.data.text });
      dispatch({
        type: "SET_MESSAGES",
        messages: finalMessages,
      });
    }
  };

  const handleSendMessageToAssistant = async () => {
    setLoading(true)
    let finalMessages = [...messages];
    finalMessages.push({ role: "user", content: userMsg });
    dispatch({
      type: "SET_MESSAGES",
      messages: finalMessages,
    });
    setUserMsg("");

    const result = await talkToAssistant({ message: userMsg });
    if (result && result.data) {
      finalMessages.push({ role: "assistant", content: result.data.text });
      dispatch({
        type: "SET_MESSAGES",
        messages: finalMessages,
      });
      setLoading(false)
    }
  };

//   useEffect(() => {
//     handleInitiateAssistant();
//   }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-2xl">
      <div className="h-64 overflow-y-scroll p-2 border rounded">
        {messages && Array.isArray(messages) && messages.length > 0
          ? messages.map((msg, idx) => {
              return (
                <div
                  key={idx}
                  className={`p-2 ${
                    msg.role === "assistant"
                      ? "text-blue-500 text-left"
                      : "text-black text-right"
                  }`}
                >
                  {msg.content}
                </div>
              );
            })
          : null}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border rounded-l-xl focus:outline-none text-black"
        />
        <div
          className="bg-blue-500 text-white px-4 py-2 rounded-r-xl hover:bg-blue-600 cursor-pointer"
          onClick={() => handleSendMessageToAssistant()}
        >
          {loading ? <LoadingAnimation /> : "Send"}
        </div>
      </div>
    </div>
  );
};

export default Chat;
