const express = require("express");
const router = express.Router();
const productListController = require("../controllers/productListController");

router.get("/productlist", productListController.mostrar);

module.exports = router;
