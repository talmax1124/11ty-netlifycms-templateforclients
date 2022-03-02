const { DateTime } = require("luxon");
const readingTime = require("eleventy-plugin-reading-time");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./build/style.css");
  eleventyConfig.addPassthroughCopy("./build/tailwind.css");
  eleventyConfig.addPassthroughCopy("./build/style.map.css");
  eleventyConfig.addPassthroughCopy("./site/style.css");
  eleventyConfig.addPassthroughCopy("/site/style.css");

  eleventyConfig.addWatchTarget("./build/tailwind.css");
  eleventyConfig.addWatchTarget("./build/style.css");
  eleventyConfig.addWatchTarget("./build/style.map.css");
  eleventyConfig.addWatchTarget("/site/style.css");
  eleventyConfig.addWatchTarget("./site/style.css");

  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/css/styles.css");
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/_redirects");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/site.json"));

  // Insert current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Adds estimate reading time for each post
  eleventyConfig.addPlugin(readingTime);

  // Add date published with custom formatting
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  return {
    templateFormats: ["md", "njk", "html"],
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data",
    },
  };
};
