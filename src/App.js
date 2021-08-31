import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <Form apiURL={window.apiURL}></Form>
    </>
  );
};

export default App;
