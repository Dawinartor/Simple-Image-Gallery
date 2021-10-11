/* To upload my images into the NodeJS server */

const express = require('express');
const router = express.Router();
// to upload files into server
const filesystem = require('fs');

function imageToJSON(title='default', date='01.01.1001', imageURL='../public/images/firstUpload') {
    filesystem.writeFile(
        './public/informations/imageInformations.txt',
    )
}

function uploadPicture(picture=null) {
    /**
     * Function Jto save informations about the picture and upload the picture localy
     */   
    filesystem.writeFile(

    )
}


router.get("/", function(req, res, next) {
    console.log("++ Hello ++");
    console.log(req.headers);
});

router.post("/upload", function(req, res, next) {

})

module.exports = router;