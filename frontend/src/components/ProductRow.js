import React from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.company}</td>
      <td>{product.product}</td>
      <td className="alignRight">${product.price.toLocaleString()}</td>
      <td>
        <ProductQuantity />
      </td>
    </tr>
  );
}

export default ProductRow;
