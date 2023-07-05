const sharp = require('sharp');

sharp('js.png')
.resize(80)
.greyscale()
.toFile('resized.png');