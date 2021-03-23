// find -E src/.vuepress/dist -regex '.*\.(jpg)' -exec sh -c 'pnpx squoosh-cli $1 --mozjpeg -d $(dirname $1)' sh {} \;


const path = require("path");
const fs = require("fs");
const glob = require("glob");
var execShPromise = require("exec-sh").promise;
var fileExtension = require('file-extension');

glob("src/.vuepress/public/**/*.+(jpg|png)", null, async function (er, files) {

  for (const file of files) {
    if (!file.match(/\/optimized\//)) {

      const result = file.replace("/public/", "/public/optimized/");

      if (!fs.existsSync(result)) {
        const result_dir = path.dirname(result);

        const extension = fileExtension(file);
        const codec = extension === "png" ? "--oxipng" : "--mozjpeg";

        const cmd = `pnpx squoosh-cli ${file} ${codec} -d ${result_dir}`;
        const output = await execShPromise(cmd);
        console.log(output.stdout);
      }
    }
  }

});
