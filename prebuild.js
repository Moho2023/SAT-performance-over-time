const fs = require("fs");

function deleteFile(dir_path, file){
  fs.unlink(dir_path + file, (err) => {
    if (err) throw err;
  });
}
//move a copy of a file
function moveFile(old_path, new_path, fileName){
  let fileData = fs.readFileSync(old_path + fileName);
  fs.writeFileSync(new_path+fileName, fileData);
}

//delete from public
fs.readdir('./public/', (err, files) => {
    if (err) throw err;
    for(let file of files){
        deleteFile('./public/', file);
    }
});

fs.readdir('./src/static/', (err, files) => {
  if (err) throw err;
  for(let file of files){
    moveFile('./src/static/', './public/', file);
  }
})
