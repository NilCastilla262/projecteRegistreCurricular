const express = require("express");
const cors = require("cors"); // Import CORS middleware
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const competencyRoutes = require("./routes/competencyRoutes");
const CriteriaRoutes = require("./routes/criteriaRoutes");
const SdaRoutes = require("./routes/sdaRoutes");
const elementsRoutes = require("./routes/elementsRoutes");
const authRoutes = require("./routes/authRoutes");
const sabersRoutes = require("./routes/sabersRoutes");
const viewsRoutes = require("./routes/viewsRoutes");
app.use(bodyParser.json());
app.use("/api/Competency", competencyRoutes);
app.use("/api/Sabers", sabersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/Criteria", CriteriaRoutes);
app.use("/api/Sda", SdaRoutes);
app.use("/api/Elements", elementsRoutes);
app.use("/api/Views", viewsRoutes);
