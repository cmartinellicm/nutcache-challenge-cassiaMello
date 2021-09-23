import { useState } from "react";

export default function ApiSelection() {
  const [apiURL, setApiURL] = useState("");
  const [chosenEndpoint, setChosenEndpoint] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setApiURL(e.target.value);
  };

  const handleClick = () => {
    setChosenEndpoint(apiURL);
  };
  //   https://crudcrud.com/api/d06ae6a21a5640b99a09e1f8935bc6db

  return (
    <div>
      <label htmlFor="apiEndpoint">Enter API Endpoint:</label>
      <input className="modalInput" type="text" name="apiEndpoint" onChange={handleChange} value={apiURL} />
      <button type="submit" onClick={handleClick}>
        OK
      </button>
      <h3>{chosenEndpoint}</h3>
    </div>
  );
}
