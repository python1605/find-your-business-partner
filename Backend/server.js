// PARSE .ENV
require('dotenv').config();

// Configuring the database
require('./app/config/database');

const appRoutes = require('./app/routers/index');
// NODE FRAMEWORK
const express = require('express');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 7500;
app.use(appRoutes);
app.use(express.json());
const { createServer } = require('http');
const httpServer = createServer(app);
// SERVE STATIC IMAGES FROM ASSETS FOLDER
app.use(express.static('./app/Schema'));
app.use('/assets/images', express.static('assets/images'));
app.use('/assets/folders', express.static('assets/folders'));

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
