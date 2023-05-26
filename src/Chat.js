import React from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import UserList from "./UserList";

function Chat({ name, messages, users, setName, sendMessage }) {
  return (
    <div className='chat'>
      <div className='user-list'>
        <h2>Users</h2>
        <UserList users={users} />
      </div>
      <div className='message-list'>
        <h2>Chat</h2>
        <MessageList messages={messages} />
        <MessageForm name={name} sendMessage={sendMessage} />
      </div>
      <div className='user-settings'>
        <h2>User Settings</h2>
        <input
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Chat;
