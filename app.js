// -----  SET UP --------------------------
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(3000);

// MONGO DB
const mongoose = require('mongoose');

// CONNECT DATABASE
mongoose.connect((process.env.MONGO_URL), { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => { console.log("db connected"); })
  .catch((err) => {
    console.log("error connecting db");
    console.log(err);
  });

// routers
const userRouter = require('./routers/userRouter');


// ROUTER EXECUTE
app.use("/starbucks/user", userRouter);



