const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["njk", "html", "md", "css"]);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Shortcodes
  eleventyConfig.addShortcode("teaser", function (title, date, intro, url) {
    return `
<li class="mb-8">
  <ul class="list-none p-0 p-0 mb-2">
    <li class="mr-3 uppercase tracking-wider text-sm xl:text-base text-gray-500">
      ${date}
    </li>
  </ul>
  <h2 class="leading-tight mb-3 mt-0 font-black text-2xl lg:text-3xl">
    <a href="${url}" class="no-underline hover:underline">
      ${title}
    </a>
  </h2>
  <p class="mt-0 xl:mt-5 mb-4 lg:text-lg">${intro}</p>
  <a href="${url}" class="lg:text-lg">
    Read more
  </a>
</li>
    `;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
