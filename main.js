import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'
import os from 'os';
inquirer
  .prompt([
   {message:"Type in your URL",
    name:"URL"
   }
  ])
  .then((answers) => {
const url = answers.URL
    const timestamp = Date.now();
    const filename = `qr_${timestamp}.png`;
var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream(filename));
fs.appendFile("URL.txt", url + os.EOL, (err)=>{
    if(err)throw err
    console.log("The file has been saved!")
})
  })
  .catch((error) => {
    if (error.isTtyError) {
   console.log( "Prompt couldn't be rendered in the current environment")
    }
     else {  
      console.log("something went wrong")
    }
  });

