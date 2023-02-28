const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const route = require('./Api/route/route');
const helper = require('./Api/helper/helper');

const app = express();


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true 
}));


app.use(express.json());


app.use('/', route);


helper();

app.listen(3005, () => {
  console.log('Server running on port 3005');
});
