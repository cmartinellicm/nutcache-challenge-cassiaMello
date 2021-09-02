import React, { useEffect, useState } from "react";
import Row from "./Row";
import { apiURL } from "../App";
import axios from "axios";

const Table = () => {
  const [employees, setEmployees] = useState([]);

  const listEmployees = () => {
    axios
      .get(apiURL + "/nutemployee")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listEmployees();
  }, []);

  function handlePut() {
    axios
      .put("https://crudcrud.com/api/d0908dbd110b402cb9e0140f09f1b506/unicorns/6130d20cdc46c203e8b3cd2b", { name: "piooo", age: 666, colour: "amarela" })
      .then((res) => {
        console.log("response: ", res.data);
      })
      .catch((err) => {});
  }

  return (
    <>
      <button onClick={handlePut}>PUT</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>Team</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{employees && employees.map((employee) => <Row key={employee._id} id={employee._id} name={employee.name} email={employee.email} startDate={employee.startDate} team={employee.team} listEmployees={listEmployees} />)}</tbody>
      </table>
    </>
  );
};

export default Table;
