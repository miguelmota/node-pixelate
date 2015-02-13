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

fs.readFile(__dirname + '/images/street.png', function(error, dataBuffer) {
  pixelate(dataBuffer, {
    // scale down 90 percent (really pixelated). Default: 0.
    scale: 0.9,
    // max width keeping aspect ratio, unless height specified. Default: original width.
    width: 500,
  }, function(error, pixelatedDataBuffer) {
    fs.writeFile(__dirname + '/images/pixelated-street.png', pixelatedDataBuffer, function(error) {
      if (error) throw error;
      console.log('Done.');
    });
  });
});
```

# License

MIT
