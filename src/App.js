import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Chat from "./Chat";

function App() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchMessages();
    fetchUsers();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("/api/messages");
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = async (text) => {
    const message = {
      text,
      sender: name,
    };

    try {
      await axios.post("/api/messages", message);
      fetchMessages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className='app'>
        <Route
          exact
          path='/'
          render={(props) => (
            <Chat
              {...props}
              name={name}
              messages={messages}
              users={users}
              setName={setName}
              sendMessage={sendMessage}
            />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
