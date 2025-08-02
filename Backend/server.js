const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http"); // Import serverless-http for Lambda

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());

connectDB();

// Route imports
const InternetPlanRoutes = require("./routes/InternetPlanRoutes");
app.use("/api/plans", InternetPlanRoutes);

const AdminRoutes = require("./routes/AdminRoutes");
app.use("/api/", AdminRoutes);

const adminSettingsRoutes = require("./routes/SettingsRoutes");
app.use("/api/settings", adminSettingsRoutes);

const contactRoutes = require("./routes/ContactRoutes");
app.use("/api/contact", contactRoutes);

// Remove or comment out the app.listen() block for Lambda
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

// Export the Lambda handler
module.exports.handler = serverless(app);
