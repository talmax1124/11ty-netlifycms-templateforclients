module.exports = {
  content: [
    "src/**/*{.html, .js, .njk,  .md}",
    "public/**/*{.html, .js, .njk,  .md}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
