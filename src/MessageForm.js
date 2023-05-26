import React, { useState } from 'react';

function MessageForm({ name, sendMessage }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      sendMessage(text);
      setText('');
    }
  };
