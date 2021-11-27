import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;


// import React, { createRef, useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
// import InsertEmoticonIcon from '@mui/material-ui/icons/InsertEmoticonIcon';
// import Emoji from '../emojis/emojis.component';


// import './Message.css';

// import ReactEmoji from 'react-emoji';

// const inputRef= createRef();
// const [showEmojis, setShowEmojis] = useState();
// const [cursorPosition, setCursorPosition] = useState();

// const pickEmoji = ( e, { emoji }) =>{
//   const ref = inputRef.current;
//   ref.focus();
//   setCursorPosition(start.length+emoji.length);
 
// }

// const handleShowEmojis = () =>{
//   inputRef.current.focus();
//   setShowEmojis(!showEmojis);
// };

// // useEffect(() =>{
// //   inputRef.current.selectionEnd = cursorPosition;

// // },{cursorPosition});

// const Message = ({ message: { text, user }, name }) => {
//   let isSentByCurrentUser = false;

//   const trimmedName = name.trim().toLowerCase();

//   if(user === trimmedName) {
//     isSentByCurrentUser = true;
//   }

//   return (
//     isSentByCurrentUser
//       ? (
//         <div className="messageContainer justifyEnd">
//           <p className="sentText pr-10">{trimmedName}</p>
//           <div className="messageBox backgroundBlue">
//             {/* <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p> */}
//             <div>
//               <InsertEmoticonIcon onClick={handleShowEmojis} />
//             </div>
//           </div>
//         </div>
//         )
//         : (
//           <div className="messageContainer justifyStart">
//             <div className="messageBox backgroundLight">
//               <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
//             </div>
//             <p className="sentText pl-10 ">{user}</p>
//           </div>
//         )
//   );
// }

// export default Message;