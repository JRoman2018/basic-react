import React, { useState } from 'react';

const UseStateObject = () => {
  //Object
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'Random Message',
  });

  const [name, setName] = useState(person.name);
  const [age, setAge] = useState(person.age);
  const [message, setMessage] = useState(person.message);

  const changeMessage = () => {
    // setPerson({ ...person, message: 'Hello World' });
    setMessage('HeloWorld');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
