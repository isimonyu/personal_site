import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ShoeList from "../components/ShoeList";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";

function ShoesPage({ setShoeToEdit }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [shoes, setShoes] = useState([]);

  // RETRIEVE the entire list of shoes
  const loadShoes = async () => {
    const response = await fetch("/shoes");
    const shoes = await response.json();
    setShoes(shoes);
  };

  // UPDATE a single shoe
  const onEditShoe = async (shoe) => {
    setShoeToEdit(shoe);
    redirect("/update");
  };

  // DELETE a single shoe
  const onDeleteShoe = async (_id) => {
    const response = await fetch(`/shoes/${_id}`, { method: "DELETE" });
    if (response.status === 200) {
      const getResponse = await fetch("/shoes");
      const shoes = await getResponse.json();
      setShoes(shoes);
    } else {
      console.error(`Could not find ${_id}, status code = ${response.status}`);
    }
  };

  // LOAD all the movies
  useEffect(() => {
    loadShoes();
  }, []);

  // DISPLAY the movies
  return (
    <>
      <h2>
        <i>
          <GiRunningShoe className="iconSpacing" />
        </i>
        Shoe Collection
      </h2>
      <p>Current collection of shoes.</p>
      <p>
        <Link to="/create">
          Add Shoe
          <i>
            <FaPlus className="iconSpacing" />{" "}
          </i>
        </Link>
      </p>
      <ShoeList shoes={shoes} onEdit={onEditShoe} onDelete={onDeleteShoe} />
    </>
  );
}

export default ShoesPage;
