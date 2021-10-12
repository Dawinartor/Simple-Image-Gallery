//* To upload my images into the NodeJS server
const express = require('express');
const router = express.Router();
const filesystem = require('fs');

function fallbackBackup(hexData=null) { // TODO: add logging
    /**
     * saves readJSON as HEX values in simple .txt to cover information in emergency case
     */
    filesystem.writeFile(
        './public/imagebase/backup.txt',
         hexData, (err) => {
            if (err) throw err;
         });
         //console.log(hexData);
         console.log("Back-Up successfully"); // instead of console using logging after log-implementation
    }

var imagebase;
// read current JSON database as JSON & return as object
function readJSON() {
    /**
     * read and return imagebase as JSON
     */
   filesystem.readFile('./public/imagebase/imageInformations.json', (err, data) => {
       if (err) throw err;
       if (data == null) { // in case of "null" or "undefined"
            console.log("result is undefined");        
       } else {
            fallbackBackup(data.toString('hex'));
            imagebase = data.toString();
       }
   });
   // delete imagebase;
}

function imageToJSON(title='default', date='01.01.1001', sourceURL='../public/images/firstUpload') {

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
    //console.log("++ Hello ++");
    //console.log(req.headers); // TODO: Add specific HEADERS to your API
    readJSON();
});

router.post("/upload", function(req, res, next) {

})

module.exports = router;