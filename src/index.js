import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    // <button onClick={props.reset}>
    //   {props.text}
    // </button>
    <button onClick={props.reset} value={props.children}>
    Reset
    </button>
  );
};

const Application = () => {

  const [name, setName] = useState('');

  const handleInputUser = (event) => setName(event.target.value);

  const reset = () => {
    setName('');
  };

  return (
    <main>
      <input value={name} onChange={handleInputUser} placeholder='Please type in your name'></input>
      {/* <Button reset={reset} text="reset"/> */}
      <Button reset={reset} name={setName} />
      {name && <h1> Hi {name}! 🌞</h1>}
      {!name && ""}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
