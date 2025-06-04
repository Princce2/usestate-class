/* eslint-disable no-unused-vars */
import { useState } from 'react';
const State = () => {
  const [name, setName] = useState("John Doe");
  const [nameInput, setNameInput] = useState("")
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(25);
  const [address, setAddress] = useState("");


  const updateName = () => {
    setName(nameInput);
  }
  return (
    <div>
      <h1>useState class</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setNameInput(e.target.value)}
      />
      {/* <h4>{nameInput}</h4> */}
      <button onClick={updateName}>Update data</button>
      {/* User data */}
      <h3>My name is: {name}</h3>
      <h3>My email is: {email}</h3>
      <h3>My age is: {age}</h3>
      <h3>My address is: {address}</h3>
    </div>
  );
}

export default State;


// change my username

// function changemyusername
// camelCase - changeMyUsername

