const express = require('express');
const app = express();
const router = require('./index')
//Router
app.use('/',router)
const port = process.env.PORT||5000;
app.listen(port,console.log(`server on port ${port}`))