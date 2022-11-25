const fs = require("fs");

function deleteFile(dir_path, file){
  fs.unlink(dir_path + file, (err) => {
    if (err) throw err;
  });
}

function moveFile(old_path, new_path, fileName){
  let fileData = fs.readFileSync(old_path + fileName);
  fs.writeFileSync(new_path+fileName, fileData);
}
