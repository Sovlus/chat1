import React from "react";

function Message({ message }) {
  return (
    <div className='message'>
      <strong>{message.sender}:</strong> {message.text}
    </div>
  );
}

export default Message;
