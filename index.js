var Canvas = require('canvas');
var Image = Canvas.Image;
var gm = require('gm');

function pixelate(dataBuffer, options, callback) {
  options = options || {};
  var scale = options.scale || 1;

  var image = new Image();
  image.src = dataBuffer;

  // Get the dimensions of loaded image.
  var width = image.width;
  var height = image.height;

  if (options.width && !options.height) {
    width = options.width;
    height = options.width * (image.height / image.width);
  }

  if (!options.width && options.height) {
    width = options.height * (image.width / image.height);
    height = options.height;
  }

  if (options.width && options.height) {
    width = options.width;
    height = options.height;
  }

  // Calculate the scaled dimensions.
  var scaledWidth = width * (1.001 - scale);
  var scaledHeight = height * (1.001 - scale);

  // Create our canvas and context.
  var canvas = new Canvas(width, height);
  var context = canvas.getContext('2d');

  // Disable pixel smoothing to give those crisp edges.
  //context.imageSmoothingEnabled = false;
  //context.patternQuality = 'fast';

  // Resize to smaller image.
  gm(dataBuffer).resize(scaledWidth).toBuffer('PNG', function(err, buffer) {
    stretch(err, buffer);
  });

  function stretch(err, buffer) {
    if (err) {
      callback(err);
      return false;
    }

    // Load scaled buffer data to image.
    var scaledImage = new Image();
    scaledImage.src = buffer;

    // Stretch the smaller image onto larger context.
    context.drawImage(scaledImage, 0, 0, width, height);

    // Return the pixelated data buffer
    canvas.toBuffer(function(err, buf) {
      callback(err, buf);
    });
  }
}

module.exports = pixelate;
