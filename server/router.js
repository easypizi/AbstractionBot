const render = require("./render").render;

module.exports = function(app) {
  app.get("/", function(req, res) {
    render(req, res, {
      page: "index",
      bundle: "desktop",
      title: "",
      lang: "en"
    });
  });

  app.get("/lineup", function(req, res) {
    render(req, res, {
      page: "edit",
      bundle: "desktop",
      title: "Edit page",
      lang: "en"
    });
  });

  /*
   * 404
   *
   *******************************/
  app.get("*", function(req, res) {
    res.status(404);
    render(req, res, {
      page: "notfound",
      bundle: "desktop",
      title: "404 – Page not found",
      lang: "en",
      og: {
        title: "404 – Page not found"
      }
    });
  });
};
