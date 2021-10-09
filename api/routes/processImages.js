/* To upload my images into the NodeJS server */

var express = require('express');
var router = express.Router();

// to upload files into server
var filesystem = require('fs');



router.get("/", function(req, res, next) {
    console.log("++ Hello ++");
    console.log(req.headers);
});

router.post("/upload", )

module.exports = router;