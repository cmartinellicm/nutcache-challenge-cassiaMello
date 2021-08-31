import axios from "axios";
// import Button from "./Button";

const Row = () => {
  axios
    .get("https://crudcrud.com/api/e3bde658a6b545839fc3998ef86399bf/nutemployee")
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mobile</td>
    </tr>
  );
};

export default Row;
