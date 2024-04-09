import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  let playerName = useRef();
  const [name, setName] = useState("");

  function handleClick() {
    setName(playerName.current.value);
    playerName.current.reset();
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? name : "unknowValue entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
