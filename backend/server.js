const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

// Initialize Express App
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load products from JSON file
let products = [];

try {
  products = JSON.parse(fs.readFileSync("products.json", "utf-8"));
} catch (error) {
  console.error("Error reading products.json file:", error.message);
}

// API Endpoint: Get all products
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// API Endpoint: Get product by ID
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Serve static images
const path = require("path");
app.use("/images", express.static(path.join(__dirname, "images")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

