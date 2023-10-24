import { useState } from "react";

export default function Player() {
  const [userInput, setUserInput] = useState('')
  const [submit, setSubmit] = useState(false)

  const handlerUserTyping = (event) => {
    setUserInput(event.target.value)
    setSubmit(false)
  }

  const handlerUserSubmit = () => {
    setSubmit(true)
  }

  return (
    <section id="player">
      <h2>Welcome { submit && userInput.trim().length !== 0 ? userInput : 'unknown entity' }</h2>
      <p>
        <input type="text" onChange={handlerUserTyping} value={userInput}/>
        <button onClick={handlerUserSubmit}>Set Name</button>
      </p>
    </section>
  );
}
