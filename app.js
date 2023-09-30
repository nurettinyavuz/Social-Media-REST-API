const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute= require("./Route/usersRoute");
const authRoute = require ("./Route/authRoute");
const postRoute = require("./Route/postsRoute") 

const app = express()

dotenv.config();

const mongoURL = process.env.MONGO_URL;
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

 
//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);

const port = 3000;

app.listen(port, () => { 
  console.log(`App startted on port ${port}`);
});