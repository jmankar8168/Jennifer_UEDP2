const sharp = require('./piyush-portfolio/node_modules/sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:/Users/Acer/.gemini/antigravity-ide/brain/4680e088-c4f2-4e8a-8b57-87084fa7ee98/.user_uploaded/media_1789721881394.png';

function createBmpIcoEntry(rawPixels, width, height) {
  const xorSize = width * height * 4;
  const andRowBytes = Math.ceil(width / 32) * 4;
  const andSize = andRowBytes * height;
  const totalSize = 40 + xorSize + andSize;

  const buf = Buffer.alloc(totalSize);
  // BITMAPINFOHEADER
  buf.writeUInt32LE(40, 0);
  buf.writeInt32LE(width, 4);
  buf.writeInt32LE(height * 2, 8); // doubled for ICO XOR+AND masks
  buf.writeUInt16LE(1, 12);
  buf.writeUInt16LE(32, 14); // 32-bit RGBA
  buf.writeUInt32LE(0, 16);
  buf.writeUInt32LE(xorSize + andSize, 20);
  buf.writeInt32LE(0, 24);
  buf.writeInt32LE(0, 28);
  buf.writeUInt32LE(0, 32);
  buf.writeUInt32LE(0, 36);

  // XOR mask (BGRA, bottom-to-top)
  let destOffset = 40;
  for (let y = height - 1; y >= 0; y--) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 4;
      buf[destOffset] = rawPixels[srcIdx + 2];     // B
      buf[destOffset + 1] = rawPixels[srcIdx + 1]; // G
      buf[destOffset + 2] = rawPixels[srcIdx];     // R
      buf[destOffset + 3] = rawPixels[srcIdx + 3]; // A
      destOffset += 4;
    }
  }

  // AND mask: all 0s
  buf.fill(0, destOffset, destOffset + andSize);
  return { width, height, data: buf };
}

function assembleIco(entries) {
  const count = entries.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const dirEntries = [];
  for (const entry of entries) {
    const dir = Buffer.alloc(16);
    dir.writeUInt8(entry.width >= 256 ? 0 : entry.width, 0);
    dir.writeUInt8(entry.height >= 256 ? 0 : entry.height, 1);
    dir.writeUInt8(0, 2);
    dir.writeUInt8(0, 3);
    dir.writeUInt16LE(1, 4);
    dir.writeUInt16LE(32, 6);
    dir.writeUInt32LE(entry.data.length, 8);
    dir.writeUInt32LE(offset, 12);
    dirEntries.push(dir);
    offset += entry.data.length;
  }

  return Buffer.concat([header, ...dirEntries, ...entries.map(e => e.data)]);
}

async function main() {
  console.log('Reading source image:', inputPath);
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const g = data[i + 1];
    // Exact anti-aliasing calculation from green channel
    const alpha = Math.max(0, Math.min(255, Math.round(((255 - g) / 155) * 255)));
    out[i] = 255;       // R (hot pink #FF64C4)
    out[i + 1] = 100;   // G
    out[i + 2] = 196;   // B
    out[i + 3] = alpha; // Alpha
  }

  const baseSharp = sharp(out, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  });

  // 1. High-res master PNG (512x512)
  const master512Buf = await baseSharp.clone().resize(512, 512).png().toBuffer();
  fs.writeFileSync('piyush-portfolio/public/icon-512.png', master512Buf);
  fs.writeFileSync('piyush-portfolio/src/app/icon.png', master512Buf);

  // 2. 192x192 PNG
  const pwa192Buf = await baseSharp.clone().resize(192, 192).png().toBuffer();
  fs.writeFileSync('piyush-portfolio/public/icon-192.png', pwa192Buf);

  // 3. Apple touch icon (180x180)
  const appleTouchBuf = await baseSharp.clone().resize(180, 180).png().toBuffer();
  fs.writeFileSync('piyush-portfolio/public/apple-touch-icon.png', appleTouchBuf);
  fs.writeFileSync('piyush-portfolio/src/app/apple-icon.png', appleTouchBuf);

  // 4. WebP favicon (64x64)
  const webpBuf = await baseSharp.clone().resize(64, 64).webp().toBuffer();
  fs.writeFileSync('piyush-portfolio/public/favicon.webp', webpBuf);

  // 5. Standard PNG favicons (32x32, 16x16)
  const png32Buf = await baseSharp.clone().resize(32, 32).png().toBuffer();
  fs.writeFileSync('piyush-portfolio/public/favicon.png', png32Buf);
  fs.writeFileSync('piyush-portfolio/public/favicon-32x32.png', png32Buf);

  const png16Buf = await baseSharp.clone().resize(16, 16).png().toBuffer();
  fs.writeFileSync('piyush-portfolio/public/favicon-16x16.png', png16Buf);

  // 6. Universal Standard Multi-resolution BMP ICO (16x16, 32x32, 48x48)
  const sizes = [16, 32, 48];
  const icoEntries = [];
  for (const size of sizes) {
    const { data: rawResized } = await baseSharp.clone().resize(size, size).raw().toBuffer({ resolveWithObject: true });
    icoEntries.push(createBmpIcoEntry(rawResized, size, size));
  }
  const icoBuf = assembleIco(icoEntries);
  fs.writeFileSync('piyush-portfolio/public/favicon.ico', icoBuf);
  fs.writeFileSync('piyush-portfolio/src/app/favicon.ico', icoBuf);

  // 7. Scalable SVG Favicon
  const base64Png = master512Buf.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image width="512" height="512" href="data:image/png;base64,${base64Png}" />
</svg>`;
  fs.writeFileSync('piyush-portfolio/public/favicon.svg', svgContent, 'utf8');

  // Copy to Storybook public if present
  if (fs.existsSync('design-system-storybook/public')) {
    fs.writeFileSync('design-system-storybook/public/favicon.svg', svgContent, 'utf8');
    fs.writeFileSync('design-system-storybook/public/favicon.ico', icoBuf);
    fs.writeFileSync('design-system-storybook/public/favicon.png', png32Buf);
    fs.writeFileSync('design-system-storybook/public/apple-touch-icon.png', appleTouchBuf);
  }

  // Clean test files
  if (fs.existsSync('piyush-portfolio/public/test_favicon_transparent.png')) {
    fs.unlinkSync('piyush-portfolio/public/test_favicon_transparent.png');
  }
  if (fs.existsSync('piyush-portfolio/public/test_favicon.ico')) {
    fs.unlinkSync('piyush-portfolio/public/test_favicon.ico');
  }

  console.log('✓ All favicons successfully generated and placed!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
