import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const EditShoePageForm = ({ shoeToEdit }) => {
  const [name, setName] = useState(shoeToEdit.name);
  const [brand, setBrand] = useState(shoeToEdit.brand);
  const [year, setYear] = useState(shoeToEdit.year);
  const [quantity, setQuantity] = useState(shoeToEdit.quantity);
  const [date, setDate] = useState(shoeToEdit.date);

  const redirect = useNavigate();

  const editShoe = async () => {
    const response = await fetch(`/shoes/${shoeToEdit._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        brand: brand,
        year: year,
        quantity: quantity,
        date: date,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert(`Changes successfully saved.`);
    } else {
      const errMessage = await response.json();
      alert(
        `Sorry. Could not update shoe ${response.status}. ${errMessage.Error}`
      );
    }
    redirect("/shoes");
  };

  return (
    <>
      <article>
        <h2>Edit a shoe</h2>
        <p>Modify a shoe's name, brand, year of release, quantity or date.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Which shoe are you editing?</legend>
            <label for="name">Shoe Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />

            <label for="brand">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              id="brand"
            />

            <label for="year">Year Released</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              id="year"
            />

            <label for="quantity">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              id="quantity"
            />

            <label for="date">Date</label>
            <input
              type="date"
              value={date.slice(0, 10)}
              onChange={(e) => setDate(e.target.value)}
              id="date"
            />
            <p id="buttons">
              <Link to="/shoes"> Back</Link>
              <label for="submit">
                <button onClick={editShoe} id="submit">
                  Save
                </button>{" "}
              </label>
            </p>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default EditShoePageForm;
