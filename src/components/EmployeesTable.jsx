import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import EmployeeRow from "./EmployeeRow";
import AddEditModal from "./AddEditModal";
import { ApiContext } from "../App";

export default function EmployeesTable() {
  const { apiURL } = useContext(ApiContext);
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const listEmployees = () => {
    axios
      .get(`${apiURL}/nutemployee`)
      .then((response) => {
        setEmployees(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        if (typeof error.response === "undefined") {
          setErrorMessage("Please type a valid endpoint above.");
        } else {
          console.log(error);
        }
      });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    listEmployees();
  }, [apiURL]);

  return (
    <>
      <h5 className="error">{errorMessage}</h5>
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
