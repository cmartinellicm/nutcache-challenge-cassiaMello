import React, { createContext, useContext, useState } from "react";
import EmployeesTable from "./components/EmployeesTable";
import ApiSelection from "./components/ApiSelection";

export const ApiContext = createContext("");

export default function App() {
  // const [chosenEndpoint, setChosenEndpoint] = useState();
  const [apiURL, setApiURL] = useState("https://crudcrud.com/api/d06ae6a21a5640b99a09e1f8935bc6db");

  const handleChange = (e) => {
    console.log(e.target.value);
    setApiURL(e.target.value);
  };

  // const handleClick = () => {
  //   setApiURL(chosenEndpoint);
  // };

  return (
    <>
      <h1>Nutcache Employees</h1>
      {/* <ApiSelection /> */}

      <div>
        <label htmlFor="apiEndpoint">Enter API Endpoint:</label>
        {/* <input className="modalInput" type="text" name="apiEndpoint" value={apiURL} onChange={handleChange} /> */}
        {/* <button type="submit" onClick={handleClick}>
          OK
        </button> */}
        <h3>{apiURL}</h3>
      </div>
      <ApiContext.Provider value={apiURL}>
        <EmployeesTable />
      </ApiContext.Provider>
    </>
  );
}
