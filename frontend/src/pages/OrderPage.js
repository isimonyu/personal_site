import React from "react";
import ProductRow from "../components/ProductRow";
import { MdTableChart } from "react-icons/md";

function OrderPage({ products }) {
  return (
    <div>
      <h2>
        <i>
          <MdTableChart className="iconSpacing" />
        </i>
        Order
      </h2>
      <article>
        <p>Please choose the quantity of each product.</p>
        <fieldset>
          <legend>Available Products</legend>
          <table>
            <caption>Select one product to order</caption>
            <thead>
              <tr>
                <th>Company</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ProductRow product={product} key={index} />
              ))}
            </tbody>
          </table>
        </fieldset>
      </article>
    </div>
  );
}

export default OrderPage;
