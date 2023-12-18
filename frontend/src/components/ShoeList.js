import React from "react";
import Shoe from "./Shoe.js";

function ShoeList({ shoes, onDelete, onEdit }) {
  return (
    <fieldset>
      <table id="shoes">
        <caption>Add and Edit Shoes</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Year</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe, i) => (
            <Shoe shoe={shoe} key={i} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </fieldset>
  );
}

export default ShoeList;
