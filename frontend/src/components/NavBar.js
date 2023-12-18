import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaRegImage } from "react-icons/fa";
import { MdLibraryBooks, MdTableChart } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";

function NavBar() {
  return (
    <nav>
      {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
      <Link to="/">
        <i>
          <AiFillHome className="iconSpacing" />
        </i>
        Home
      </Link>
      <Link to="/topics">
        <i>
          <MdLibraryBooks className="iconSpacing" />
        </i>
        Topics
      </Link>
      <Link to="/shoes">
        <i>
          <GiRunningShoe className="iconSpacing" />
        </i>
        Shoes
      </Link>
      <Link to="/order">
        <i>
          <MdTableChart className="iconSpacing" />
        </i>
        Order
      </Link>
      <Link to="/gallery">
        <i>
          <FaRegImage className="iconSpacing" />
        </i>
        Gallery
      </Link>
    </nav>
  );
}

export default NavBar;
