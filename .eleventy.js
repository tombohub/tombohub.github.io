module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/ko.css");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }

};