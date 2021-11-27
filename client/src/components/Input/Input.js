import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;


// https://github.com/YuriAntishev/LuxeChat

// https://tutorial101.blogspot.com/2021/09/reactjs-add-emoji-picker-emoji-picker.html

//https://github.com/abhishek305/emoji-picker-component/blob/master/src/index.js