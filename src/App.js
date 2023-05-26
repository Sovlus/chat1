import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

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

  return <div className='App'></div>;
}

export default App;
