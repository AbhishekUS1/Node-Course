const peacock = [
  {
    id: 1,
    name: "Woodpecker",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    price: 3000,
    description: "This is a product Sam",
  },
  {
    id: 2,
    name: "Peackock12",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    price: 3000,
    description: "This is a product Sam",
  },
  {
    id: 3,
    name: "Raze",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    price: 3000,
    description: "This is a product Sam",
  },
  {
    id: 4,
    name: "Peackock12",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    price: 3000,
    description: "This is a product Sam",
  },
  {
    id: 5,
    name: "Raze",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    price: 3000,
    description: "This is a product Sam",
  },
];

module.exports = peacock;
// const express = require("express");
// const app = express();
// const peacock = require("./data");

// app.get("/", (req, res) => {
//   res.send("<h1>Home page</h1><a href='/peacock'>Peacock</a>");
// });

// app.get("/peacock/:peacockID", (req, res) => {
//   const { peacockID } = req.params;
//   console.log(req.params);

//   // Convert peacockID to a number
//   const peacockIdNumber = parseInt(peacockID);

//   // Find the product by ID
//   const singleProduct = peacock.find((item) => item.id === peacockIdNumber);

//   // Check if product exists
//   if (singleProduct) {
//     res.json(singleProduct);
//   } else {
//     res.status(404).json({ message: "Product not found" });
//   }
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
