import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../App";
import EmployeeRow from "./EmployeeRow";
import AddEditModal from "./AddEditModal";

export default function EmployeesTable() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const listEmployees = () => {
    axios
      .get(`${apiURL}/nutemployee`)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    listEmployees();
  }, []);

  return (
    <>
      <button type="button" className="actionButton" onClick={() => handleShowModal()}>
        Add Employee
      </button>
      {showModal && <AddEditModal visible={showModal} handleVisible={setShowModal} action="add" updateTable={listEmployees} />}
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
        <tbody>{employees && employees.map((employee) => <EmployeeRow key={employee._id} employee={employee} updateTable={listEmployees} />)}</tbody>
      </table>
    </>
  );
}
