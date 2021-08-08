const usersController = require("./controllers/users-controller");
const cartsController = require("./controllers/carts-controller");
const ordersController = require("./controllers/orders-controller");
const productsController = require("./controllers/products-controller");
const errorHandler = require("./errors/error-handler");

const express = require("express");
const expressServer = express();

const fs = require("fs");
const fileUpload = require("express-fileupload");

if (!fs.existsSync("./uploads")) { 
    fs.mkdirSync("./uploads");
}

var cors = require('cors');
const port = process.env.PORT || 3001;

expressServer.use(express.json());
expressServer.use(cors({origin: "http://localhost:4200", credentials: true}));

expressServer.use(fileUpload());
expressServer.use(express.static('./uploads'));

expressServer.use("/users", usersController);
expressServer.use("/carts", cartsController);
expressServer.use("/orders", ordersController);
expressServer.use("/products", productsController);

expressServer.use(errorHandler);
expressServer.listen(3001, () => console.log('server started on port' + port));