//call request library
const request = require('request');

//Writing files with Node.js use the fs.writeFile() API.
const fs = require('fs')

//take args from input in terminal
const args = process.argv.slice(2);
const DOMAINNAME = args[0];
const LOCALFILE = args[1];

//take logic from request library code
// instead hardcoding domain name use CONST
request(DOMAINNAME, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); 


  //take logic from https://nodejs.dev/learn/writing-files-with-nodejs

  // use CONST instead first arg "path to the file"
  // use body from request library instead second arg "content"
  fs.writeFile(LOCALFILE, body, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })

  console.log("Downloaded and saved " + LOCALFILE.length + " bytes to " + LOCALFILE);
});


