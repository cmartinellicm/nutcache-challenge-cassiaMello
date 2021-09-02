import React, { useEffect, useState } from "react";
import Row from "./Row";
import ModalForm from "./ModalForm";
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

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    listEmployees();
  }, []);

  return (
    <>
      <button className="actionButton" id="myBtn" onClick={() => handleShowModal()}>
        Add Employee
      </button>
      {showModal && <ModalForm visible={showModal} handleVisible={setShowModal} action="add" update={listEmployees} />}
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
