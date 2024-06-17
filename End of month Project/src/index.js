const express = require("express");
const eventsRouter = require('./Routes/eventsRouter.js')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const app = express(); // Used to listen to server

app.use(express.json()); // middleware to parse json  
app.use(eventsRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

