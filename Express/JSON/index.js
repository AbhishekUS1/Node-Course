const express = require("express");
const app = express();
const peacock = require("./data");
app.get("/", (req, res) => {
  //   console.log(req);
  // res.json(peacock);
  res.send("<h1>Home page</h1><a href='/peacock'>peacock</a>");
});
// app.get("/peacock/:peacockID", (req, res) => {
//   // const newItem = peacock.map((peacock) => {
//   //   const { id, name, image, description } = peacock;
//   //   return { id, name, image, description };
//   const { peacockID } = req.params;
//   console.log(req.params);
//   const singleProduct = peacock.find(
//     (peacock) => peacock.id === Number(peacockID)
//   );
//   if (!singleProduct) {
//     res.status(404).send("Product not found");
//   }
//   res.json(singleProduct);
// });

app.get("/peacock/query", (req, res) => {
  let sortedPeacock = [...peacock];
  const { search, limit } = req.query;
  if (search) {
    sortedPeacock = sortedPeacock.filter((item) => {
      return item.name.toLowerCase().startsWith(search);
    });
  }
  if (limit) {
    sortedPeacock = sortedPeacock.slice(0, Number(limit));
  }
  res.send(sortedPeacock);
});
app.listen(3000, () => {
  console.log("Server started");
});
//http://localhost:3000/peacock/query?search=p&limit=2
