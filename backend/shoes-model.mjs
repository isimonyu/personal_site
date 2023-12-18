// Models for the Shoe Collection

// Import dependencies.
import mongoose from "mongoose";
import "dotenv/config";

// Connect based on the .env file parameters.
mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
  if (err) {
    res.status(500).json({ Error: "Unable to connect with MongoDB." });
  } else {
    console.log("Success: Database connection successful.");
  }
});

// SCHEMA: Define the collection's schema.
const shoeSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
  date: { type: Date, required: true, default: Date.now },
});

const shoes = mongoose.model("Shoes", shoeSchema);

// CREATE model *****************************************
const createShoe = async (name, brand, year, quantity, date) => {
  const shoe = new shoes({
    name: name,
    brand: brand,
    year: year,
    quantity: quantity,
    date: date,
  });
  return shoe.save();
};

// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveShoes = async () => {
  const query = shoes.find();
  return query.exec();
};

// RETRIEVE by ID
const retrieveShoeByID = async (_id) => {
  const query = shoes.findById({ _id: _id });
  return query.exec();
};

// DELETE model based on _id  *****************************************
const deleteShoeById = async (_id) => {
  const result = await shoes.deleteOne({ _id: _id });
  return result.deletedCount;
};

// UPDATE model *****************************************************
const updateShoe = async (_id, name, brand, year, quantity, date) => {
  const result = await shoes.replaceOne(
    { _id: _id },
    {
      name: name,
      brand: brand,
      year: year,
      quantity: quantity,
      date: date,
    }
  );
  return {
    _id: _id,
    name: name,
    brand: brand,
    year: year,
    quantity: quantity,
    date: date,
  };
};

// EXPORT the variables for use in the controller file.
export {
  createShoe,
  retrieveShoes,
  retrieveShoeByID,
  updateShoe,
  deleteShoeById,
};
