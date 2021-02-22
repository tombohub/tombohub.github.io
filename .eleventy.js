module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("keys", o => Object.keys(o));

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
