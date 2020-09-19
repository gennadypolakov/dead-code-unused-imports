const fs = require('fs');
const path = require('path');

function deleteFiles(files, callback){
  let i = files.length;
  files.forEach(filepath => {
    fs.unlink(path.join(__dirname, filepath), err => {
      i--;
      if (err) {
        callback(err);
      } else if (i <= 0) {
        callback(null);
      }
    });
  });
}

// place here array of file list as string array
const files = [
  'src/some-file.js',
  'src/some-other-file.js',
  '...'
];

deleteFiles(files, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('all files removed');
  }
});
