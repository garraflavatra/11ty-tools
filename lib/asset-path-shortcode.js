const dirname = process.cwd();
const assets = require(dirname + "/out/_proc/assets-manifest.json");

async function assetPathShortcode(name) {
  return `/_proc/${assets[name]}`;
}

module.exports = assetPathShortcode;
