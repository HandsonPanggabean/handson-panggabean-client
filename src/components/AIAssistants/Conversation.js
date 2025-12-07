import React, { useEffect, useRef, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// react lucide
import { X, SendHorizontal, Ellipsis, Bot } from "lucide-react";

// Apis
import { initiateAssistant, talkToAssistant } from "../../apis/assistants";

// Components
import LoadingAnimation from "../LoadingAnimation";
import ChatMessage from "./ChatMessage";

const Conversation = (props) => {
  const {
    setIsOpenModalChat,
    is_server_sleep,
    handleWakeServer,
    showError,
    initialConversation,
  } = props || {};

  const lang = useSelector((state) => state.lang);

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
        const result = await initiateAssistant({ lang });
        if (result && result.data) {
          setLoading(false);
          setLoadingTyping(true);
          setPendingMessage(result.data.text);
        }
      }
    } catch (error) {
      showError(error.response.data.message);
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
      showError(error.response.data.message);
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
    // const messageEndRef = useRef(null); // Ref to track the message container

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

    // useEffect(() => {
    //   if (messageEndRef.current) {
    //     messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    //   }
    // }, [displayedText]);

    return (
      <div>
        <ChatMessage message={displayedText} />
        {/* Invisible div to keep the scroll at the bottom */}
        {/* <div ref={messageEndRef} /> */}
      </div>
    );
  };

  useEffect(() => {
    if (!is_server_sleep) {
      handleInitiateAssistant();
    } else {
      if (!initialConversation.current) {
        setLoadingTyping(true);
        setPendingMessage(
          "I’m currently asleep. Please wake the server so I can assist you."
        );

        initialConversation.current = true;
      }
    } // eslint-disable-next-line
  }, [is_server_sleep]);

  return (
    <div className="fixed bottom-0 right-0 flex flex-col w-full h-screen overflow-y-auto bg-gray-100 shadow-lg md:border md:border-blue-900 md:bottom-16 md:right-16 md:h-[50%] md:w-2/5 md:dark:border-yellow-400 md:rounded-2xl dark:bg-gray-800">
      {is_server_sleep ? (
        <div className="flex items-center justify-end p-6 bg-blue-900 md:-p-4 md:p-4 dark:bg-yellow-400">
          <div className="flex-1 block">
            <Bot className="text-white w-7 h-7 dark:text-gray-900" />
          </div>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpenModalChat(false)}
          >
            <X className="text-white w-7 h-7 dark:text-gray-900" />
          </button>
        </div>
      ) : (
        <div className="grid items-center grid-cols-3 p-6 bg-blue-900 md:-p-4 md:p-4 dark:bg-yellow-400">
          <div className="justify-self-start">
            <Bot className="text-white w-7 h-7 dark:text-gray-900" />
          </div>

          <div className="text-center text-white dark:text-black">
            Powered by Google AI
          </div>

          <button
            className="text-gray-500 justify-self-end hover:text-gray-700"
            onClick={() => setIsOpenModalChat(false)}
          >
            <X className="text-white w-7 h-7 dark:text-gray-900" />
          </button>
        </div>
      )}

      <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 md:p-2">
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
                        <div
                          className={`mb-1 font-bold ${
                            msg.role === "user" ? "text-right" : "text-left"
                          }`}
                        >
                          {msg.role === "user" ? "" : "AI Assistant"}
                        </div>
                        <ChatMessage message={msg.content} />
                      </div>
                    </div>
                  </div>
                );
              })
            : null}

          {loading ? (
            <Ellipsis className="w-12 h-12 text-gray-500 dark:text-gray-200 animate-bounce" />
          ) : null}

          {pendingMessage ? (
            <div className="flex justify-start">
              <div className="max-w-full p-3 text-sm text-left text-gray-800 bg-white rounded-bl-none shadow-md md:max-w-xl rounded-2xl dark:bg-gray-700 dark:text-white">
                <div className="mb-1 font-bold">AI Assistant</div>
                <TypewriterText
                  text={pendingMessage}
                  onComplete={handleTypewriterComplete}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex p-4 border-t border-blue-900 rounded-xl md:rounded-none dark:border-yellow-400">
        {is_server_sleep ? (
          <div className="flex items-center justify-between w-full">
            <div className="text-gray-500 dark:text-white">
              Powered by Google AI
            </div>
            <div
              className="px-3 py-2 text-white bg-blue-900 border border-blue-900 cursor-pointer dark:bg-yellow-400 dark:border-yellow-400 rounded-xl dark:text-black"
              onClick={() => handleWakeServer()}
            >
              Wake server
            </div>
          </div>
        ) : (
          <>
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 text-black border border-blue-900 dark:border-gray-600 rounded-l-xl focus:outline-none dark:text-white dark:bg-gray-700 dark:border-blue-600"
              disabled={loading}
            />
            <div
              className={`dark:bg-yellow-400 bg-blue-900 text-white px-4 py-2 border border-blue-900 dark:border-yellow-400 rounded-r-xl cursor-${
                loading || isLoadingTyping ? "not-allowed" : "pointer"
              } flex items-center`}
              onClick={() =>
                !loading && !isLoadingTyping
                  ? handleSendMessageToAssistant()
                  : null
              }
            >
              {loading || isLoadingTyping ? (
                <LoadingAnimation />
              ) : (
                <SendHorizontal className="w-6 h-6 dark:text-black" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Conversation;
