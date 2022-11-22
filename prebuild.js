const fs = require("fs");

const directory = "./public/";

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (let file of files) {
    fs.unlink(directory + file, (err) => {
      if (err) throw err;
    });
  }
});



let current_paths = "./src/";
let new_paths = "./public/";

fs.readdir(current_paths, (err, files) => {
    if (err) throw err;

    for(let file of files){
        fs.rename(current_paths + file, new_paths + file, (err) => {
            if (err) throw err;
        });
    }
});
