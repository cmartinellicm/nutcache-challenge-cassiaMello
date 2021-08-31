import Row from "./Row";

const Table = () => {
  return (
    <>
      <h1>Nutcache Employees</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Start Date</th>
          <th>Team</th>
          <th>Action</th>
        </tr>
        <Row></Row>
      </table>
    </>
  );
};

export default Table;
