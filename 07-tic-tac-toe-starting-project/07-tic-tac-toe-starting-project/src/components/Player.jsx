import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onSelectLog }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  function handleEditingClick() {
    setIsEditing((prevValue) => !prevValue);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text " required value={playerName} onChange={handleChange} />
    );
  }

  let btnCaption = "save";
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditingClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
