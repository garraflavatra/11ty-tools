const Image = require("@11ty/eleventy-img");

// usage: {% image './src/images/cat.jpg', 'photo of my cat' %}
async function imageShortcode(src, alt = undefined, sizes = "100vw") {
  if (alt === undefined) {
    console.warn(
      `>>> WARNING: Missing \`alt\` on responsive image from: ${src}`
    );
  }

  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["webp", "jpeg"],
    outputDir: "./out/_proc/img/",
    urlPath: "/_proc/img/",
  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `<picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        return `  <source type="${
          imageFormat[0].sourceType
        }" srcset="${imageFormat
          .map((entry) => entry.srcset)
          .join(", ")}" sizes="${sizes}">`;
      })
      .join("\n")}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
}

module.exports = imageShortcode;
