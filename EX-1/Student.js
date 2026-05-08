const filePath = "./hello.txt";
import fs from "fs";

// Write to a file (synchronously)
fs.writeFile(filePath, "Hello, Node.js beginner!", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("File written successfully!");
  }
});

// Read the file (synchronously)
fs.readFile(filePath, "utf8", (err, content) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", content);
  }
});


