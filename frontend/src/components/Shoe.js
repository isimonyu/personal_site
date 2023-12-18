import React from "react";

// Change the icons, function names, and parameters
// to fit your portfolio topic and schema.

import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

function Shoe({ shoe, onEdit, onDelete }) {
  return (
    <tr>
      <td>{shoe.name}</td>
      <td>{shoe.brand}</td>
      <td>{shoe.year}</td>
      <td>{shoe.quantity}</td>
      <td>{shoe.date.slice(0, 10)}</td>

      {/* Update these icons to something that matches your style. */}
      <td>
        <i>
          <AiFillDelete onClick={() => onDelete(shoe._id)} />
        </i>
      </td>
      <td>
        <i>
          <AiOutlineEdit onClick={() => onEdit(shoe)} />
        </i>
      </td>
    </tr>
  );
}

export default Shoe;
