const { format } = require("date-fns");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(["html", "md"]);
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPlugin(syntaxHighlight);

  // Shortcodes
  eleventyConfig.addShortcode("teaser", function (title, date, intro, url) {
    return `
<li class="max-w-3xl">
  <p class="uppercase tracking-wider text-sm xl:text-base text-gray-500">
    ${format(new Date(date), "MMMM y")}
  </p>
  <h2 class="leading-tight mt-1 font-black text-2xl text-indigo-900 font-hand lg:text-3xl">
    <a href="${url}" class="no-underline hover:underline">
      ${title}
    </a>
  </h2>
  <p class="mt-0 text-gray-900 xl:mt-5 mb-4 lg:text-lg">${intro}</p>
  <a href="${url}" class="text-indigo-600 font-bold font-hand lg:text-lg">
    Read more &rarr;
  </a>
</li>
    `;
  });

  eleventyConfig.addShortcode("test", function (name, age) {
    return `
<div class="bg-red-100 p-4"><h2>Hello, I am ${name} and I am ${age} years old.</div>
    `;
  });

  eleventyConfig.addShortcode("image", function (path, altText, caption) {
    return `
<img class="shadow-xl rounded-md" src="${path}" alt="${altText}" />
<p class="text-sm text-gray-500 italic font-serif">${caption}</p>
    `;
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
