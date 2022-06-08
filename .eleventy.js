// 11ty configuration
module.exports = function(eleventyConfig)  {
  eleventyConfig.addPassthroughCopy("src/assets/");

  eleventyConfig.addWatchTarget("src/css/");
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