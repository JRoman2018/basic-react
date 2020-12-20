import React, { useState } from 'react';
//useState - function
//use
//component name must be uppercase
//must be in function/component body
//cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState('hello World'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [title, setTitle] = useState('Random Title');
  const [cl, setCl] = useState('');

  const handleClick = () => {
    if (title === 'Random Title') {
      setTitle('Hello World');
      setCl('colorR');
    } else {
      setTitle('Random Title');
      setCl('');
    }
  };

  return (
    <React.Fragment>
      <h1 className={cl}>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
