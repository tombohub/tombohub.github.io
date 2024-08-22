module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/style.css");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }

};