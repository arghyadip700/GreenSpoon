const fs = require('fs');
const csv = require('csv-parser');


function createJSONObjectsFromCSV(filePath) {
  return new Promise((resolve, reject) => {
    const jsonArray = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        jsonArray.push(row);
      })
      .on('end', () => {
        resolve(jsonArray);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = createJSONObjectsFromCSV;
