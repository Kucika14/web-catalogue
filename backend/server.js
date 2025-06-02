const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

// Initialize Express App
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load products from JSON file
let staticProducts = [];
try {
  staticProducts = JSON.parse(fs.readFileSync("products.json", "utf-8"));
} catch (error) {
  console.error("Error reading products.json file:", error.message);
}

// Serve static images
app.use("/images", express.static(path.join(__dirname, "images")));

// Test API Endpoint
app.get("/api/test", (req, res) => {
  res.send({ message: "API is working!" });
});

// API Endpoint: Get all products (list everything, even those without images)
app.get("/api/products", (req, res) => {
  const imageDir = path.join(__dirname, "images");

  // Read all files in the images directory
  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error("Error reading images directory:", err);
      return res.status(500).json({ error: "Failed to load images" });
    }

    // Create a map for images keyed by their names
    const imageMap = files.reduce((map, file) => {
      const name = path.parse(file).name.toLowerCase(); // Normalize name for case sensitivity
      map[name] = `/images/${file}`; // Map the image path to the name
      return map;
    }, {});

    // Map staticProducts and attach image if available
    const products = staticProducts.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      image: imageMap[product.name.toLowerCase()] || product.image || null, // Use image in JSON, map, or null
    }));

    res.status(200).json(products);
  });
});

// API Endpoint: Get product by ID (ensure all products, image or not, are included)
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);

  const product = staticProducts.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const imageDir = path.join(__dirname, "images");

  fs.readdir(imageDir, (err, files) => {
    if (err) {
      console.error("Error reading images directory:", err);
      return res.status(500).json({ error: "Failed to load images" });
    }

    const imageMap = files.reduce((map, file) => {
      const name = path.parse(file).name.toLowerCase();
      map[name] = `/images/${file}`;
      return map;
    }, {});

    const productWithImage = {
      ...product,
      image: imageMap[product.name.toLowerCase()] || product.image || null, // Attach image from map, JSON, or null
    };

    res.status(200).json(productWithImage);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});