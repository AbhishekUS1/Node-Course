const fs = require("fs");
// Sync;
// fs.writeFileSync("./file1.txt", "Hey there sam");

// Async
// fs.writeFile("./file1.txt", "Hey there async", (err) => {});

// fs.readFile("./file1.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });
// fs.appendFileSync("./file1.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./file1.txt", `Hey there\n`);
fs.appendFileSync("./log.txt", `${Date.now()} Hey there\n`);
//fs.cpSync("./file1.txt", "./log.txt");
//fs.unlinkSync("./file1.txt"); // delete
console.log(fs.statSync("./log.txt").isFile());
fs.mkdirSync("my-docs/a/b/c", { recursive: true });
/*
const fs = require('fs');

// File path and content
const filePath = 'example.txt';
const fileContent = 'This is the content of the file.';

// Create the file
fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error occurred while creating the file:', err);
    return;
  }
  console.log('File created successfully.');
});
*/
