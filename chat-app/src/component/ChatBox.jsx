import React from "react";
import SendMessage from "./SendMessage";
import Message from "./Message";

const ChatBox = () => {
  const chats = [
    {
      id: 1,
      text: "Hello",
    },
    {
      id: 2,
      text: "I am Asir",
    },
  ];
  return (
    <div className="h-screen">
      <div className="navbar bg-primary text-primary-content mx-auto flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Redstone Chat</a>
        <button className="btn bg-accent-content ">Log Out</button>
      </div>
      <div className="flex justify-center h-2/3 items-center m-20 container mx-auto  ">
        <div className="w-full h-full  m-4 p-4  bg-base-300 mb-10 rounded-xl">
          {chats.map((i) => (
            <Message text={i} key={i.id}></Message>
          ))}
        </div>
      </div>
      <SendMessage></SendMessage>
    </div>
  );
};

export default ChatBox;
