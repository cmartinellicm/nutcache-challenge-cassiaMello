import React from "react";

export default function EmployeeModal({ visible, handleVisible, employee }) {
  const modalClass = visible ? "modal show-modal" : "modal hide-modal";

  const handleClose = () => {
    handleVisible(false);
  };

  return (
    <>
      <div className={modalClass}>
        <div className="modal-content">
          <span className="close" onClick={() => handleClose()}>
            &times;
          </span>

          <h1>Employee Information</h1>

          <table>
            <tbody>
              <tr>
                <td className="employeeModalLabel">Name</td>
                <td>{employee.name}</td>
              </tr>
              <tr>
                <td className="employeeModalLabel">Birth Date</td>
                <td>{employee.birthDate}</td>
              </tr>
              <tr>
                <td className="employeeModalLabel">Gender</td>
                <td>{employee.gender}</td>
              </tr>
              <tr>
                <td className="employeeModalLabel">Email</td>
                <td>{employee.email}</td>
              </tr>
              <tr>
                <td className="employeeModalLabel">CPF</td>
                <td>{employee.cpf}</td>
              </tr>
              <tr>
                <td className="employeeModalLabel">Start Date</td>
                <td>{employee.startDate}</td>
              </tr>
              <tr>
                <td className="employeeModalLabel">Team</td>
                <td>{employee.team}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
