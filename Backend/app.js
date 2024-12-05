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

app.use("/api/Competency", competencyRoutes);
/* //Routes
const cursRoutes = require("./routes/cursRoutes");
const userRoutes = require("./routes/userRoutes");
const groupTableRoutes = require("./routes/groupTableRoutes");
const plantillaRoutes = require("./routes/plantillaRoutes");
const vectorsRoutes = require("./routes/vectorsRoutes");
 */
const authRoutes = require("./routes/authRoutes");
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/Criteria", CriteriaRoutes);
app.use("/api/Sda", SdaRoutes);

/*/ // Query Routes
app.use("/api/Curs", cursRoutes);
app.use("/api/User", userRoutes);
app.use("/api/GroupTable", groupTableRoutes);
app.use("/api/Plantilla", plantillaRoutes);
app.use("/api/Vectors", vectorsRoutes);
 */
