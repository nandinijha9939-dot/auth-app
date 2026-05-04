const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://nandini:Nandini%402007@ac-3pmwrsn-shard-00-00.3ehszsa.mongodb.net:27017,ac-3pmwrsn-shard-00-01.3ehszsa.mongodb.net:27017,ac-3pmwrsn-shard-00-02.3ehszsa.mongodb.net:27017/?ssl=true&replicaSet=atlas-6sfksz-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("✅ Database Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);

// Server start
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});