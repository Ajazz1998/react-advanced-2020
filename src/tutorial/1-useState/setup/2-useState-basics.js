import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('rondom title');

  const handleClick = () => {
    if (text === 'random title'){
      setText('hello world');
    }else{
      setText('random title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>Change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
