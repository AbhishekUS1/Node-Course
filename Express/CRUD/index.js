const express = require("express");
const app = express();
const bookRoute = require("./routes/bookRoutes");
// Middleware to parse JSON bodies
app.use(express.json());
app.use("/", bookRoute);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
