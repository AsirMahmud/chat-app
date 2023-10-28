import React from "react";

const Message = ({ text }) => {
  return (
    <div>
      {" "}
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img src="" />
          </div>
        </div>
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div class="chat-bubble">{text.text}</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default Message;
