import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import ModalForm from "./components/ModalForm";

export const apiURL = "https://crudcrud.com/api/13be49e3ded0449dbb04b520220cb4da";
// export const apiURL = "";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <h1>Nutcache Employees</h1>
      <button id="myBtn" onClick={() => handleShowModal()}>
        Add Employee
      </button>
      {showModal && <ModalForm visible={showModal} handleVisible={setShowModal} type="add" />}
      <Table />
    </>
  );
}
