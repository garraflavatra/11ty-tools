const fs = require("fs");
const dirname = process.cwd();
const assets = require(dirname + "/out/_proc/assets-manifest.json");

async function inlineAssetShortcode(name) {
  const output = fs.readFileSync(`./out/_proc/${assets[name]}`).toString();
  return output;
}

module.exports = inlineAssetShortcode;
