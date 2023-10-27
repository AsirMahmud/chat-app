import React, { useState } from "react";

const SendMessage = () => {
  const [chat, setChat] = useState("");
  const onChangeChat = (event) => {
    setChat(event.target.value);
  };
  const handleChat = (event) => {
    event.preventDefault();
    if (chat) {
      onChangeChat(), setChat("");
    }
  };
  return (
    <>
      <div
        onSubmit={(event) => {
          event.preventDefault;
        }}
        className="navbar bg-primary text-primary-content mx-auto flex justify-between"
      >
        <a className="btn btn-ghost normal-case text-xl">Redstone Chat</a>
        <button className="btn bg-accent-content ">Log Out</button>
      </div>
      <form className="bottom-0 fixed w-full p-4 flex bg-base-300 m-2 rounded-xl justify-evenly container mx-auto ">
        <input type="text" className="input  w-full border-primary "></input>
        <button type="submit" className="btn-primary btn   w-36 ml-1 ">
          Send
        </button>
      </form>
    </>
  );
};

export default SendMessage;
