import React, { useEffect, useState } from "react";
import Row from "./Row";
import { apiURL } from "../App";
import axios from "axios";

// import employees from "../employees";

const Table = () => {
  const [employees, setEmployees] = useState([]);

  const listEmployees = () => {
    axios
      .get(apiURL + "/nutemployee")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    listEmployees();
  }, []);

  return (
    <>
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
