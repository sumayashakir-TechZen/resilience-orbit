module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));
  eleventyConfig.addPlugin(require("@quasibit/eleventy-plugin-sitemap"));

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site"
    }
  };
};
