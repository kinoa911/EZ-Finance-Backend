
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const apyController = require("./app/controllers/prices");
var corsOptions = {
  origin: "*"
};

const app = express();
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/prices', apyController.getPrices);

setInterval(() => {
  apyController.calculateAndSave();
}, 10000);


const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`listening on port ${PORT}`));
