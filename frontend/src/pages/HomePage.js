import React from "react";
import { AiFillHome } from "react-icons/ai";

function HomePage() {
  return (
    <>
      <h2>
        <i>
          <AiFillHome className="iconSpacing" />
        </i>
        Introduction
      </h2>
      <article>
        <p>
          Hi, my name is Simon. My goal is to be a great software engineer. I
          enjoy combining my creativity with my skills to help others find
          solutions for their problems. The technology field is exciting, as
          engineers and developers are always creating innovative technologies
          to tackle the growing demands of the world.
        </p>
        <p>
          This full-stack web app is created using a <strong>MERN</strong>{" "}
          stack. MERN is an acronym for Mongoose, Express, React, and Native,
          which are the technologies that make up the front-end and back-end of
          this app. The back-end stores data in a database and makes routes to
          create, retrieve, update, and delete the data <strong>(CRUD)</strong>.
          This web app uses
          <strong> Mongoose</strong>, a
          <strong> database management system (DBMS)</strong>, to manage the{" "}
          <strong>NoSQL</strong> database. NoSQL databases are a collection of
          documents. To perform CRUD operations on these documents, routes are
          created using <strong>Express</strong>. Express provides an
          application programming interface <strong>(API)</strong> for the
          front-end to access the database. The front-end uses{" "}
          <strong>Node.js</strong> to serve JavaScript programs for the client
          to see. This app uses <strong>React</strong>, a JavaScript framework,
          to organize our app into pages and components. React offers many
          features such as <strong>useEffect</strong> and{" "}
          <strong>useState</strong>. This app implements useEffect on the
          Collection page to load data from our back-end during the mounting
          lifecycle, which reduces unnecessary calls to our back-end. This app
          also implements useState to keep track of variables as they change, so
          the browser display can also reflect these changes.
        </p>
      </article>
    </>
  );
}

export default HomePage;
