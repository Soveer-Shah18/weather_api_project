const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const weatherRoutes = require("./routes/weather");

app.use(cors({
    origin: ["http://localhost:3000",
    "https://weatherapi360.netlify.app/"]
}));
app.use(express.json());

app.use("/api/weather",weatherRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port "+ process.env.PORT);
});