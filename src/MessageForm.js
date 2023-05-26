import React, { useState } from "react";

function MessageForm({ name, sendMessage }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      sendMessage(text);
      setText("");
    }
  };

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Type your message'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
}

export default MessageForm;
