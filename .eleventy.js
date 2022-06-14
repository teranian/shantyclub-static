// 11ty configuration
module.exports = function(eleventyConfig)  {
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/css/main.css");
  eleventyConfig.addPassthroughCopy("./src/assets/css/tailwind-3.1.1.css");

  // Tell 11ty to watch the Tailwind output file for changes
  eleventyConfig.addWatchTarget("./src/assets/css/main.css");

  // 11ty defaults
  return {
    
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };

      
    
    
  }