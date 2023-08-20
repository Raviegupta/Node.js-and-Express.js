const path = require('path');

console.log(path.sep);

const filePath = path.join('/New Folder 7', 'subfolder', 'notes.txt');
console.log(filePath);

const basename = path.basename(filePath);
console.log(basename);

const absolute = path.resolve(__dirname, 'New Folder 7', 'subfolder', 'notes.txt');
console.log(absolute);