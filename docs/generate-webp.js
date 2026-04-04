const sharp = require("sharp")
const path = require("path")
const fs = require("fs")
const glob = require("glob")
const fileExtension = require("file-extension")
const sizeOf = require("image-size")
const makeDir = require("make-dir")

const files = glob.sync("src/.vuepress/public/**/*.+(jpg|png)")

;(async () => {
  let count = 0
  for (const file of files) {
    if (file.match(/\/optimized\//)) continue
    const ext = fileExtension(file)
    const optimizedDir = path.dirname(file.replace("/public/", "/public/optimized/"))
    const baseName = path.basename(file, "." + ext)
    const webpFull = path.join(optimizedDir, baseName + ".webp")
    const webp1x = path.join(optimizedDir, baseName + "-1x.webp")

    if (fs.existsSync(webpFull)) continue

    makeDir.sync(optimizedDir)
    const size = sizeOf(file)
    const halfSize = { width: Math.floor(size.width / 2), height: Math.floor(size.height / 2) }

    await sharp(file).webp().toFile(webpFull)
    await sharp(file).resize(halfSize).webp().toFile(webp1x)
    count++
    console.log("Generated:", baseName)
  }
  console.log("Total:", count, "images")
})()
