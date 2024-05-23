const fs = require("fs");

const userName = "Narayan Poudel";

fs.writeFile("user-data.txt", "Name: " + userName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Wrote to file");
});

// run the code using:  node app.js
