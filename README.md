# pixelate

Pixelate images

# Install

```
npm install pixelate
```

# Usage

```javascript
var fs = require('fs');
var pixelate = require('pixelate');

fs.readFile(__dirname + '/images/street.png', function(err, dataBuffer) {
  pixelate(dataBuffer, {
    // scale down 90 percent (really pixelated). Default: 0.
    scale: 0.9,
    // max width keeping aspect ratio, unless height specified. Default: original width.
    width: 500,
  }, function(err, pixelatedDataBuffer) {
    fs.writeFile(__dirname + '/images/pixelated-street.png', pixelatedDataBuffer, function(err) {
      if (err) throw err;
      console.log('done.');
    });
  });
});
```

# License

MIT
