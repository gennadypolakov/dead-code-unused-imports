const fs = require('fs');

function deleteFiles(files, callback){
  let i = files.length;
  files.forEach(filepath => {
    fs.unlink(filepath, err => {
      i--;
      if (err) {
        callback(err);
        return;
      } else if (i <= 0) {
        callback(null);
      }
    });
  });
}

// place here array of file list
const files = [
  'file1.js', 'file2.jpg', 'file3.css'
];

deleteFiles(files, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('all files removed');
  }
});
