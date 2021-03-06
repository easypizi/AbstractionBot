module.exports = {
  levels: ["**/*.blocks"],

  excludePaths: ["node_modules/**"],

  plugins: {
    "bemhint-css-naming": {
      techs: {
        styl: true,
        "post.css": true,
        css: true
      }
    },
    "bemhint-fs-naming": false,
    "bemhint-deps-specification": true
  }
};
