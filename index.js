// module.exports = function (settings) {
//     console.log(settings);
// };


// Read the contents of the file into a string
const fs = require('fs');
const filePath = '/Users/prudhvi/work/nightwatch-TO/nightwatch.conf.js';
const fileContents = fs.readFileSync(filePath, 'utf8');
const x = `src_folders: ['tests']`;
const x1 = `src_folders: ['sampleTest.js']`
// console.log(fileContents.indexOf(x));

//Modify the file contents however you want
const modifiedContents = fileContents.replace(x, x1);

// Write the modified contents back to the file
fs.writeFileSync(filePath, modifiedContents);

  