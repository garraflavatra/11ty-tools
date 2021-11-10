const imageShortcode = require("./image-shortcode");
const assetPathShortcode = require("./asset-path-shortcode");
const inlineAssetShortcode = require("./inline-asset-shortcode");
const htmlmin = require("./htmlmin");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ static: "/" });
  eleventyConfig.addWatchTarget("./assets");

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addHandlebarsShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  eleventyConfig.addNunjucksAsyncShortcode("asset", assetPathShortcode);
  eleventyConfig.addLiquidShortcode("asset", assetPathShortcode);
  eleventyConfig.addHandlebarsShortcode("asset", assetPathShortcode);
  eleventyConfig.addJavaScriptFunction("asset", assetPathShortcode);

  eleventyConfig.addNunjucksAsyncShortcode("inlineasset", inlineAssetShortcode);
  eleventyConfig.addLiquidShortcode("inlineasset", inlineAssetShortcode);
  eleventyConfig.addHandlebarsShortcode("inlineasset", inlineAssetShortcode);
  eleventyConfig.addJavaScriptFunction("inlineasset", inlineAssetShortcode);

  eleventyConfig.addTransform("htmlmin", htmlmin);
};
