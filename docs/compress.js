// find -E src/.vuepress/dist -regex '.*\.(jpg)' -exec sh -c 'pnpx squoosh-cli $1 --mozjpeg -d $(dirname $1)' sh {} \;


const path = require("path");
const fs = require("fs");
const glob = require("glob");
const execShPromise = require("exec-sh").promise;
const fileExtension = require("file-extension");
const sizeOf = require("image-size");

console.log('Compressing images');

glob("src/.vuepress/public/**/*.+(jpg|png)", null, async function (er, files) {

  for (const file of files) {
    if (!file.match(/\/optimized\//)) {

      const extension = fileExtension(file);
      const result = file.replace("/public/", "/public/optimized/").replace(new RegExp(`\.${extension}$`), `.webp`);

      if (!fs.existsSync(result)) {
        const result_dir = path.dirname(result);

        const size = sizeOf(file);
        const new_size = {width: Math.floor(size.width / 2), height: Math.floor(size.height / 2)};

        const cmd = `pnpx squoosh-cli ${file} --webp -d ${result_dir}`;
        const output = await execShPromise(cmd);
        console.log(output.stdout);

        const cmd1x = `pnpx squoosh-cli ${file} --webp --resize '${JSON.stringify(new_size)}' --suffix 1x -d ${result_dir}`;
        const output1x = await execShPromise(cmd1x);
        console.log(output1x.stdout);
      }
    }
  }

});
