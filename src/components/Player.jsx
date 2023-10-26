import { useState, useRef } from "react";

export default function Player() {
   const [userInput, setUserInput] = useState(null)
  let userText = useRef()

  const handlerUserSubmit = () => {
    setUserInput(userText.current.value)
    userText.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome { userInput ?? 'unknown entity' }</h2>
      <p>
        <input ref={userText} type="text"/>
        <button onClick={handlerUserSubmit}>Set Name</button>
      </p>
    </section>
  );
}
