import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters
// to fit your portfolio topic and schema.

export const AddShoePageForm = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState(Date());

  const redirect = useNavigate();

  const addShoe = async () => {
    const newShoe = { name, brand, year, quantity, date };
    const response = await fetch("/shoes", {
      method: "post",
      body: JSON.stringify(newShoe),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert(`Shoe has been successfully added!`);
      redirect("/shoes");
    } else {
      alert(`Sorry there was an error = ${response.status}`);
      redirect("/shoes");
    }
  };

  return (
    <>
      <article>
        <h2>Add a shoe</h2>
        <p>
          Fill out the shoe's name, brand, year of release, quantity and date.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Which shoe are you adding?</legend>
            <label for="name">Shoe name</label>
            <input
              type="text"
              placeholder="eg. Jordan 1 Royals"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />

            <label for="brand">Brand</label>
            <input
              type="text"
              value={brand}
              placeholder="eg. Nike"
              onChange={(e) => setBrand(e.target.value)}
              id="brand"
            />

            <label for="year">Year of Release</label>
            <input
              type="number"
              value={year}
              placeholder="Release Year"
              onChange={(e) => setYear(e.target.value)}
              id="year"
            />

            <label for="quantity">Quantity</label>
            <input
              type="number"
              value={quantity}
              placeholder="1"
              onChange={(e) => setQuantity(e.target.value)}
              id="quantity"
            />

            <label for="date">Date</label>
            <input
              type="date"
              value={date}
              placeholder="mm/dd/yy"
              onChange={(e) => setDate(e.target.value)}
              id="date"
            />

            <label for="submit">
              <button type="submit" onClick={addShoe} id="submit">
                Add
              </button>{" "}
              to the collection
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddShoePageForm;
