module.exports = function (
  videoId,
  title = "",
  width = 560,
  height = 315,
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
) {
  return `
    <iframe
      width="${width}"
      height="${height}"
      src="https://www.youtube.com/embed/${videoId}"
      title="${title}"
      alt="${title}"
      frameborder="0"
      allow="${allow}"
      allowfullscreen
    ></iframe>
  `;
};
