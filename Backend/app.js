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

//Routes
const CriteriaRoutes = require("./routes/criteriaRoutes");
const competencyRoutes = require("./routes/competencyRoutes");
const cursRoutes = require("./routes/cursRoutes");
const userRoutes = require("./routes/userRoutes");
const groupTableRoutes = require("./routes/groupTableRoutes");
const plantillaRoutes = require("./routes/plantillaRoutes");
const vectorsRoutes = require("./routes/vectorsRoutes");

// Query Routes
app.use("/api/Competency", competencyRoutes);
app.use("/api/Criteria", CriteriaRoutes);
app.use("/api/Curs", cursRoutes);
app.use("/api/User", userRoutes);
app.use("/api/GroupTable", groupTableRoutes);
app.use("/api/Plantilla", plantillaRoutes);
app.use("/api/Vectors", vectorsRoutes);
