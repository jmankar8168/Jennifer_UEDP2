const sharp = require('sharp');

async function getInnerPhotoBounds() {
  const { data, info } = await sharp('unrotated_polaroid.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const midY = Math.floor(info.height / 2);
  const midX = Math.floor(info.width / 2);

  let left, right, top, bottom;

  for (let x = 0; x < info.width; x++) {
    const idx = (midY * info.width + x) * info.channels;
    if (data[idx+3] > 200 && (data[idx] < 240 || data[idx+1] < 240 || data[idx+2] < 240)) {
      left = x;
      break;
    }
  }

  for (let x = info.width - 1; x >= 0; x--) {
    const idx = (midY * info.width + x) * info.channels;
    if (data[idx+3] > 200 && (data[idx] < 240 || data[idx+1] < 240 || data[idx+2] < 240)) {
      right = x;
      break;
    }
  }

  for (let y = 0; y < info.height; y++) {
    const idx = (y * info.width + midX) * info.channels;
    if (data[idx+3] > 200 && (data[idx] < 240 || data[idx+1] < 240 || data[idx+2] < 240)) {
      top = y;
      break;
    }
  }

  for (let y = midY; y < info.height; y++) {
    const idx = (y * info.width + midX) * info.channels;
    if (data[idx+3] > 200 && (data[idx] > 240 && data[idx+1] > 240 && data[idx+2] > 240)) {
      bottom = y;
      break;
    }
  }

  console.log({
    left, right, top, bottom,
    width: right - left,
    height: bottom - top,
    totalW: info.width,
    totalH: info.height
  });
}
getInnerPhotoBounds();
