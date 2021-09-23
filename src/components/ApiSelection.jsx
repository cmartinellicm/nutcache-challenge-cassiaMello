import React, { useContext, useState } from "react";
import { ApiContext } from "../App";

export default function ApiSelection() {
  const { setApiURL } = useContext(ApiContext);
  const [chosenEndpoint, setChosenEndpoint] = useState("");

  const handleClick = () => {
    setApiURL(chosenEndpoint);
    setChosenEndpoint("");
  };
  // INACTIVE  https://crudcrud.com/api/d06ae6a21a5640b99a09e1f8935bc6db
  // ACTIVE  https://crudcrud.com/api/ad878d661ce9443089c31906b5d1e4f0

  return (
    <div className="endpoint-input">
      <input
        className="modalInput"
        type="text"
        name="apiEndpoint"
        placeholder="Please enter API endpoint here"
        size="70"
        value={chosenEndpoint}
        onChange={(e) => {
          setChosenEndpoint(e.target.value);
        }}
      />
      <button type="submit" onClick={handleClick}>
        Show
      </button>
    </div>
  );
}
