const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.send("Form submitted successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
