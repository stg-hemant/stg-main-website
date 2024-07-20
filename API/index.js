const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
