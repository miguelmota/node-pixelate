var fs = require('fs');
var pixelate = require('../index');

fs.readFile(__dirname + '/images/street.png', function(err, dataBuffer) {
  pixelate(dataBuffer, {
    scale: 0.9,
    width: 500,
  }, function(err, pixelatedDataBuffer) {
    fs.writeFile(__dirname + '/images/pixelated-street.png', pixelatedDataBuffer, function(err) {
      if (err) throw err;
      console.log('done.');
    });
  });
});
