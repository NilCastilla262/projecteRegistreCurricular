const express = require("express");
const cors = require("cors"); // Import CORS middleware

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
