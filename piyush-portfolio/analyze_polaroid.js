const sharp = require('sharp');
const path = require('path');

async function analyze() {
  const { data, info } = await sharp(path.join(__dirname, 'public/about/polaroid-me.webp'))
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('Channels:', info.channels, 'Width:', info.width, 'Height:', info.height);

  // Let's sample pixels at corners and center
  function getPixel(x, y) {
    const idx = (y * info.width + x) * info.channels;
    return [data[idx], data[idx+1], data[idx+2], data[idx+3]];
  }

  console.log('Top-left (0,0):', getPixel(0, 0));
  console.log('Center of photo (430, 400):', getPixel(430, 400));
  console.log('White frame top (430, 100):', getPixel(430, 100));
  console.log('White frame bottom text area (430, 830):', getPixel(430, 830));
}
analyze();
