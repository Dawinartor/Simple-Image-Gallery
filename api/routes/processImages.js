//* To upload my images into the NodeJS server
const express = require('express');
const router = express.Router();
const filesystem = require('fs');
const { read } = require('fs/promises');
const path = require('path');
const backup = path.join(__dirname, '..', 'public', 'imagebase', 'backup.txt');
const database = path.join(__dirname, '..', 'public', 'imagebase', 'imageInformations.json');


//~ Section: Backups
function writeBackup(hexData=null) { // TODO: add logging
    /**
     * saves output of readDatabase in simple .txt to cover information in emergency case
     * @param {String} hexData - hexa string
     */
    filesystem.writeFile(
        backup, hexData, (err) => {
            if (err) throw err;
         });
    console.log("Back-Up successfully"); // instead of console using logging after log-implementation
}

function readBackup() { // TODO: add logging
    /**
     * reads backup from predefined source and returnes as JSON object
     * @returns {JSON} - JSON object
     */
    return readDatabase(database); // reused
}



//~ Section: Proccess data
function readDatabase(inputPath="") {
    /** 
     * read current database and return as JSON object
     * @param {String} inputPath - file path
     * @returns {JSON} - JSON String
     */
    let resJSON = filesystem.readFileSync(
        database, // is already json
         (err, data) => {
             if (err) throw err;
        });
    writeBackup(resJSON);
    return JSON.parse(resJSON);
  }



//~ Section: Tools
function countImages(input=null) {
    let count = 0;
    if (input == null) {
        console.log("Nothing to count");
    } else {
        for (let key in input) {
            if(input.hasOwnProperty(key))
            count++;
        }
    }
    return count;
}

// TODO: Move this to client-side
function imageToJSON(title='default', date='01.01.1001', sourceURL='../public/images/firstUpload') {


    filesystem.writeFile(
        './public/informations/imageInformations.txt',
        path.join(__dirname)
    )
}

function uploadPicture(pictureJSON=null) {
    /**
     * Function save informations about the picture and upload the picture localy
     * @param {JSON} pictureJSON - Picture as JSON-Format
     * @returns {Boolean} - true if upload was successful, else false
     */   

    let success = false;

    filesystem.writeFile(

    )
}



//~ Section: Handle client requests
router.get("/", function(req, res, next) {
    //console.log(req.headers); // TODO: Add specific HEADERS to your API
    let test = readDatabase(database);
    res.send(test.img0);
    console.log(countImages(test));
});


router.post("/upload", function(req, res, next) { // send data to server
    /**
     * 
     */
})

module.exports = router;