// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import NavBar from "./components/NavBar";
import "./App.css";

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages
import products from "./data/products.js";
import HomePage from "./pages/HomePage.js";
import TopicsPage from "./pages/TopicsPage.js";
import ShoesPage from "./pages/ShoesPage.js";
import GallleryPage from "./pages/GallleryPage.js";
import OrderPage from "./pages/OrderPage.js";

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddShoePageForm from "./pages/AddShoePageForm.js";
import EditShoePageForm from "./pages/EditShoePageForm.js";

// Define the function that renders the content in Routes, using State.
function App() {
  const [shoe, setShoeToEdit] = useState([]);

  return (
    <>
      <BrowserRouter>
        <header>
          <img
            src="/android-chrome-192x192.png"
            alt="favicon with SYU in brown with a skin tan background"
          />
          <h1>Simon Yu</h1>
        </header>

        <NavBar />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/topics" element={<TopicsPage />} />

              <Route path="/gallery" element={<GallleryPage />} />

              <Route
                path="/order"
                element={<OrderPage products={products} />}
              />

              <Route
                path="/shoes"
                element={<ShoesPage setShoeToEdit={setShoeToEdit} />}
              />

              <Route path="/create" element={<AddShoePageForm />} />
              <Route
                path="/update"
                element={<EditShoePageForm shoeToEdit={shoe} />}
              />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 Simon Yu</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
