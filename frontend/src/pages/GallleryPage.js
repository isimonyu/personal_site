import React from "react";
import ImageGallery from "react-image-gallery";
import { FaRegImage } from "react-icons/fa";

function GallleryPage() {
  const images = [
    {
      original: "images/mi-la-cay-website.png",
      thumbnail: "images/mi-la-cay-website.png",
      description:
        "Mi La Cay website's favorites section, coded in HTML and CSS.",
      originalHeight: "450px",
    },
    {
      original: "images/masm-procedure-convert-int-ascii.png",
      thumbnail: "images/masm-procedure-convert-int-ascii.png",
      description:
        "Procedure to convert an integer to its ASCII representation using MASM.",
      originalHeight: "450px",
    },
    {
      original: "images/python-chess-variant-game-wrong-move.png",
      thumbnail: "images/python-chess-variant-game-wrong-move.png",
      description:
        "Sample output of an invalid move from a chess variant game coded in Python.",
      originalHeight: "450px",
    },
    {
      original: "images/python-load-players-function.png",
      thumbnail: "images/python-load-players-function.png",
      description:
        "Function to retrieve all NBA players' IDs with the specified team ID.",
      originalHeight: "450px",
    },
    {
      original: "images/flag-football-huddle.jpg",
      thumbnail: "images/flag-football-huddle.jpg",
      description:
        "Three University of Maryland, Baltimore County (UMBC) flag football players communicating in a huddle.",
      originalHeight: "450px",
    },
    {
      original: "images/china-rope-bucket-water-well.jpg",
      thumbnail: "images/china-rope-bucket-water-well.jpg",
      description:
        "Learning how to use a rope bucket to get water from a well in my father's home village in China.",
      originalHeight: "450px",
    },
    {
      original: "images/barber-client-haircut.jpg",
      thumbnail: "images/barber-client-haircut.jpg",
      description:
        "A skill and hobby of mine is being a barber (as shown above).",
      originalHeight: "450px",
    },
    {
      original: "images/broccoli-microgreen-sprouts.jpg",
      thumbnail: "images/broccoli-microgreen-sprouts.jpg",
      description:
        "Growing broccoli sprouts (as shown above) and other microgreens is another hobby of mine.",
      originalHeight: "450px",
    },
  ];
  return (
    <div>
      <h2>
        <i>
          <FaRegImage className="iconSpacing" />
        </i>
        Gallery
      </h2>
      <p>
        Browse through a collection of my previous projects, experiences, and
        hobbies.
      </p>
      <article>
        <ImageGallery items={images} />
      </article>
    </div>
  );
}

export default GallleryPage;
