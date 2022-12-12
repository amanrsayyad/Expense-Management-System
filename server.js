const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');

// Config dot env file
dotenv.config();

// database connection
connectDb();

// Rest Object
const app = express();

// middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/users', require('./routes/userRoute'))

// PORT
const PORT = 8080 || process.env.PORT;

// listen
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});
