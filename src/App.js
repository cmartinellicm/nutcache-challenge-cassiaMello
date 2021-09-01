import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

export const apiURL = "https://crudcrud.com/api/499e0ab24bb140599441c43d5346319b";
// export const apiURL = "";

export default function App() {
  return (
    <>
      <Table />
      <Form />
    </>
  );
}
