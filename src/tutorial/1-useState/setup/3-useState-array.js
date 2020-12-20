import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const [check, setCheck] = useState();

  const removeItem = (id) => {
    setPeople((oldPeople) => {
      return oldPeople.filter((x) => x.id !== id);
    });
  };

  const checkClick = () => {
    if (!check) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const clearClick = () => {
    if (people.length > 0) {
      setPeople([]);
    } else {
      setPeople(data);
    }
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <div style={{ display: 'flex' }}>
              <input
                type="checkbox"
                checked={check}
                style={{ marginRight: '5px' }}
              />
              <h4>{name}</h4>
            </div>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <div className="item">
        {people.length > 0 && (
          <button className="btn" onClick={checkClick}>
            {check ? 'UnCheck' : 'Check All'}
          </button>
        )}
        <button className="btn" onClick={clearClick}>
          {people.length > 0 ? 'Clear Items' : 'Get All Items'}
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
