import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Modal from "./components/Modal";

export const apiURL = "https://crudcrud.com/api/499e0ab24bb140599441c43d5346319b";
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
      {showModal && <Modal visible={showModal} handleVisible={setShowModal} />}
      <Table />
    </>
  );
}
