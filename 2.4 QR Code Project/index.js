/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// // Function to prompt user for input
// const promptUser = async () => {
//   const questions = [
//     {
//       type: 'input',
//       name: 'url',
//       message: 'Please enter a URL:',
//       validate: function (input) {
//         if (input.trim() === '') {
//           return 'URL cannot be empty';
//         }
//         return true;
//       },
//     },
//   ];

//   const answers = await inquirer.prompt(questions);
//   return answers.url;
// }
// // Function to generate QR code
// const generateQRCode = (url) => {
//   const qr_svg = qr.image(url, { type: 'png' });
//   const output = fs.createWriteStream('qr_img.png');
//   qr_svg.pipe(output);
//   output.on('finish', () => {
//     console.log('QR code generated and saved as qr_img.png');
//   });
// }
// // Function to save URL to a text file
// const saveURLToFile = (url) => {
//   fs.writeFile('URL.txt', url, (err) => {
//     if (err) throw err;
//     console.log('URL saved to URL.txt');
//   });
// }
// // Main function to run the program
// const main = async () => {
//   try {
//     const url = await promptUser();
//     generateQRCode(url);
//     saveURLToFile(url);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }
// // Execute the main function
// main();
// // /*
// // 1. Use the inquirer npm package to get user input.
// // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
// // 3. Create a txt file to save the user input using the native fs node module.
// // */


inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });