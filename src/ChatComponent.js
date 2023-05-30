import React, { useEffect, useState } from "react";
import { fetchMessages, sendMessage } from "./api";

function ChatComponent() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages
    fetchMessages()
      .then((data) => setMessages(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSendMessage = (message) => {

    sendMessage(message)
      .then((newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Chat Component</h1>
      {/* Render */}
      {messages.map((message) => (
        <div key={message.id}>{message.text}</div>
      ))}
      {/* Send  */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const message = e.target.elements.message.value;
          handleSendMessage(message);
          e.target.reset();
        }}
      >
        <input type='text' name='message' placeholder='Wpisz swoją wiadomość' />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default ChatComponent;
