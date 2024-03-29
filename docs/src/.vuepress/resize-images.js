"use strict"

const fs = require("fs")
const path = require("path")
const sharp = require("sharp")
const sizeOf = require("image-size")
const fileExtension = require("file-extension")
const makeDir = require("make-dir")

module.exports = function lazy_loading_plugin(md, options) {

  const originalHtmlBlockRenderer = md.renderer.rules.html_block

  md.renderer.rules.html_block = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    const content = token.content
    let matches = content.match(/srcset="(.*) 2x"/)
    const enabled_extensions = ["png", "jpg", "jpeg"]
    if (matches) {
      const href = matches [1]
      const extension = fileExtension(href)
      if (enabled_extensions.includes(extension)) {
        const imgPath = path.join(__dirname, "public", href)
        if (fs.existsSync(imgPath)) {
          let destWebp = "/optimized" + href.replace(new RegExp(`\.${extension}$`), `.webp`)
          let destHref = "/optimized" + href.replace(new RegExp(`\.${extension}$`), `-1x.${extension}`)
          const destPath = path.join(__dirname, "dist", destHref)
          const destDir = path.dirname(destPath)
          makeDir.sync(destDir)
          const size = sizeOf(imgPath)
          const new_size = {width: Math.floor(size.width / 2), height: Math.floor(size.height / 2)}
          sharp(imgPath)
          .resize(new_size)
          .toFile(destPath)
          token.content = token.content.replace(
            "<img ",
            `<img src="${destHref}" width="${new_size.width}" height="${new_size.height}" loading="lazy" data-zoom-src="${destWebp}" `
          ).replace(
            "srcset=\"/",
            "srcset=\"/optimized/"
          )
          .replace(new RegExp(`\.${extension}"`), ".webp\"")
          .replace(new RegExp(`\.${extension} 2x"`), ".webp 2x\"")
        }
      }
    }

    return originalHtmlBlockRenderer(tokens, idx, options, env, self)
  }
}
