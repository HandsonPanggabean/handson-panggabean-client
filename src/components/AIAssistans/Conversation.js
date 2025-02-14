import React, { useEffect, useRef, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// react lucide
import { X, SendHorizontal } from "lucide-react";

// Apis
import { initiateAssistant, talkToAssistant } from "../../apis/assistants";

// Components
import LoadingAnimation from "../LoadingAnimation";
import ChatMessage from "./ChatMessage";

const Conversation = (props) => {
  const { setIsOpenModalChat } = props || {};
  const dispatch = useDispatch();

  const hasInitiatedRef = useRef(false);

  const messages = useSelector((state) => state.messages);

  const [userMsg, setUserMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingMessage, setPendingMessage] = useState(null);
  const [isLoadingTyping, setLoadingTyping] = useState(false);

  const handleInitiateAssistant = async () => {
    if (hasInitiatedRef.current) return; // Prevent multiple executions
    hasInitiatedRef.current = true;

    try {
      if (messages && Array.isArray(messages) && messages.length === 0) {
        setLoading(true);
        const result = await initiateAssistant();
        if (result && result.data) {
          setLoading(false);
          setLoadingTyping(true);
          setPendingMessage(result.data.text);
        }
      }
    } catch (error) {
      console.log(error, "error <<<");
    }
  };

  const handleSendMessageToAssistant = async () => {
    try {
      setLoading(true);
      let finalMessages = [...messages];
      finalMessages.push({ role: "user", content: userMsg });
      dispatch({
        type: "SET_MESSAGES",
        messages: finalMessages,
      });
      setUserMsg("");

      const result = await talkToAssistant({ message: userMsg });
      if (result && result.data) {
        setLoading(false);
        setLoadingTyping(true);
        setPendingMessage(result.data.text);
      }
    } catch (error) {
      console.log(error, "error <<");
    }
  };

  const handleTypewriterComplete = () => {
    let finalMessages = [...messages];
    finalMessages.push({ role: "assistant", content: pendingMessage });
    dispatch({
      type: "SET_MESSAGES",
      messages: finalMessages,
    });
    setPendingMessage(null);
    setLoadingTyping(false);
  };

  const TypewriterText = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const messageEndRef = useRef(null); // Ref to track the message container

    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        }, 10);

        if (index + 1 === text.length && onComplete) {
          onComplete();
        }

        return () => clearTimeout(timeout);
      }
    }, [index, text, onComplete]);

    useEffect(() => {
      if (messageEndRef.current) {
        messageEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [displayedText]);

    return (
      <div>
        <ChatMessage message={displayedText} />
        {/* Invisible div to keep the scroll at the bottom */}
        <div ref={messageEndRef} />
      </div>
    );
  };

  useEffect(() => {
    handleInitiateAssistant(); // eslint-disable-next-line
  }, []);

  return (
    <div className="fixed bottom-5 right-2 md:bottom-16 md:right-16 flex flex-col h-96 w-96 md:w-2/5 border dark:border-yellow-400 border-blue-900 rounded-2xl shadow-lg overflow-y p-4 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-2xl">
      <div className="flex justify-end items-center mb-2">
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpenModalChat(false)}
        >
          <X className="w-5 h-5 dark:text-yellow-400 text-blue-900" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 md:p-2">
        <div className="p-1 space-y-4">
          {messages && Array.isArray(messages) && messages.length > 0
            ? messages.map((msg, idx) => {
                return (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-full md:max-w-xl p-3 rounded-2xl shadow-md text-sm ${
                        msg.role === "user"
                          ? "dark:bg-yellow-400 bg-blue-900 text-white rounded-br-none text-left dark:text-black"
                          : "bg-white dark:bg-gray-700 dark:text-white text-gray-800 rounded-bl-none text-left"
                      }`}
                    >
                      <div>
                        <div className="font-bold mb-1">
                          {msg.role === "user" ? "You" : "AI Assistant"}
                        </div>
                        <ChatMessage message={msg.content} />
                        {/* <div>{msg.content}</div> */}
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
          {loading ? (
            <div className="flex space-x-1 py-2 px-3">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
            </div>
          ) : null}

          {pendingMessage ? (
            <div className="flex justify-start">
              <div className="max-w-full md:max-w-xl p-3 rounded-2xl shadow-md text-sm bg-white dark:bg-gray-700 dark:text-white text-gray-800 rounded-bl-none text-left">
                <div className="font-bold mb-1">AI Assistant</div>
                <TypewriterText
                  text={pendingMessage}
                  onComplete={handleTypewriterComplete}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={userMsg}
          onChange={(e) => setUserMsg(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border dark:border-gray-600 rounded-l-xl focus:outline-none text-black dark:text-white dark:bg-gray-700 border border-blue-900 dark:border-blue-600"
        />
        <div
          className={`dark:bg-yellow-400 bg-blue-900 text-white px-4 py-2 rounded-r-xl  cursor-${
            loading || isLoadingTyping ? "not-allowed" : "pointer"
          } flex items-center`}
          onClick={() =>
            !loading && !isLoadingTyping ? handleSendMessageToAssistant() : null
          }
        >
          {loading || isLoadingTyping ? (
            <LoadingAnimation />
          ) : (
            <SendHorizontal className="w-6 h-6 dark:text-black" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
