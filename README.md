# pixelate

Pixelate images

<img src="https://raw.githubusercontent.com/miguelmota/node-pixelate/master/screenshot.png" width="700">

# Install

```bash
npm install node-pixelate
```

It's using [node-canvas](https://github.com/Automattic/node-canvas) (rather than [ImageMagick](http://www.imagemagick.org/)) and one of the requirements for it is the [Cairo](http://cairographics.org/) canvas implementation, so Cairo needs to be installed. [Instructions](https://github.com/Automattic/node-canvas/wiki/_pages).

# Usage

```javascript
var fs = require('fs');
var pixelate = require('node-pixelate');

fs.readFile(__dirname + '/images/street.png', function(error, dataBuffer) {
  if (error) throw error;
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

# Requirements

Mac OS X

```bash
brew install graphicsmagick
```

# License

MIT
