import React, { useState } from "react";

const SendMessage = () => {
  const [chat, setChat] = useState("");
  const onChangeChat = (event) => {
    setChat(event.target.value);
  };
  const handleChat = (event) => {
    event.preventDefault();
    if (chat) {
      console.log(chat);
      setChat("");
    }
  };
  return (
    <>
      <form
        onSubmit={handleChat}
        className="bottom-0 fixed w-full p-4 flex bg-base-300 m-2 rounded-xl justify-evenly container mx-auto "
      >
        <input
          value={chat}
          type="text"
          onChange={onChangeChat}
          className="input  w-full border-primary "
        ></input>
        <button
          onClick={handleChat}
          type="submit"
          className="btn-primary btn   w-36 ml-1 "
        >
          Send
        </button>
      </form>
    </>
  );
};

export default SendMessage;
