import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

export const apiURL = "https://crudcrud.com/api/809b84cc1a18424a9d16915249ed94c3";
// export const apiURL = "";

export default function App() {
  return (
    <>
      <Table />
      <hr />
      <Form />
    </>
  );
}
