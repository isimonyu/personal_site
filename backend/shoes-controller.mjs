// Controllers for the Shoe Collection

import "dotenv/config";
import express from "express";
import * as shoes from "./shoes-model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json()); // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post("/shoes", (req, res) => {
  shoes
    .createShoe(
      req.body.name,
      req.body.brand,
      req.body.year,
      req.body.quantity,
      req.body.date
    )
    .then((shoe) => {
      console.log(`"${shoe.name}" was added to the collection.`);
      res.status(201).json(shoe);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({ Error: "Unable to add to the collection. Check parameters." });
    });
});

// RETRIEVE controller ****************************************************
app.get("/shoes", (req, res) => {
  shoes
    .retrieveShoes()
    .then((shoes) => {
      if (shoes !== null) {
        console.log(`All shoes were retrieved from the collection.`);
        res.json(shoes);
      } else {
        res.status(404).json({ Error: "Shoes collection could not be found." });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Bad request. Cannot process." });
    });
});

// RETRIEVE by ID controller
app.get("/shoes/:_id", (req, res) => {
  shoes
    .retrieveShoeByID(req.params._id)
    .then((shoe) => {
      if (shoe !== null) {
        console.log(`"${shoe.name}" was retrieved, based on its ID.`);
        res.json(shoe);
      } else {
        res.status(404).json({ Error: "Shoe could not be found." });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Bad request. Cannot process." });
    });
});

// UPDATE controller ************************************
app.put("/shoes/:_id", (req, res) => {
  shoes
    .updateShoe(
      req.params._id,
      req.body.name,
      req.body.brand,
      req.body.year,
      req.body.quantity,
      req.body.date
    )
    .then((shoe) => {
      console.log(`"${shoe.name}" was updated.`);
      res.json(shoe);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ Error: "Bad request. Cannot process." });
    });
});

// DELETE Controller ******************************
app.delete("/shoes/:_id", (req, res) => {
  shoes
    .deleteShoeById(req.params._id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        console.log(`Based on its ID, ${deletedCount} shoe was deleted.`);
        res.status(200).send({ Success: "Shoe was sucessfully removed." });
      } else {
        res.status(404).json({ Error: "Shoe could not be found." });
      }
    })
    .catch((error) => {
      console.error(error);
      res.send({ Error: "Bad request. Cannot Process." });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
