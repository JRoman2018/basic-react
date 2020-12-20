import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  //Delay Counter
  const complexCounter = () => {
    setTimeout(() => {
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexCounter}>
          increase later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
