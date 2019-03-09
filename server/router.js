const render = require("./render").render;

const low = require("lowdb");
const FileAsync = require("lowdb/adapters/FileAsync");

const adapter = new FileAsync("db/db.json");

/*
 * Routing
 *
 *******************************/

module.exports = function(app) {
  app.get("/", function(req, res) {
    low(adapter).then(db => {
      let result = db.get("articles");
      let pages = result.value();
      let sliceResult = result
        .sortBy("created_at")
        .reverse()
        .take(10)
        .value();

      render(req, res, {
        page: "index",
        bundle: "desktop",
        title: "AdminPanel of COIN360 Analytics",
        lang: "en",
        objects: sliceResult,
        pages: Math.ceil(pages.length / 10)
      });
    });
  });

  app.get("/edit", function(req, res) {
    render(req, res, {
      page: "edit",
      bundle: "desktop",
      title: "Edit page",
      lang: "en"
    });
  });

  app.get("/edit/:numId", function(req, res) {
    try {
      low(adapter).then(db => {
        let isExist = db
          .get("articles")
          .find({ numId: Number(req.params.numId) })
          .value();
        if (isExist !== undefined) {
          render(req, res, {
            page: "edit",
            bundle: "desktop",
            title: "Edit page",
            lang: "en",
            content: req.params.numId,
            article: isExist
          });
        } else {
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
        }
      });
    } catch (e) {
      console.error("Edit page error: " + e);
      res.send("error");
    }
  });

  /*
   * Private API Methods
   *
   *******************************/

  app.post("/api/changeArticle", function(req, res) {
    let data = req.body.objects;

    if (data.titleId === "") return;

    try {
      low(adapter).then(db => {
        let isExist = db
          .get("articles")
          .find({ numId: Number(data.numId) })
          .value();

        if (isExist !== undefined) {
          db.get("articles")
            .find({ numId: Number(data.numId) })
            .assign({
              id: data.titleId,
              author: data.author,
              authorLink: data.authorLink,
              title: data.title,
              type: data.type,
              mainImg: data.mainImg,
              shareImg: data.shareImg,
              seoTitle: data.seoTitle,
              seoText: data.seoText,
              time: data.time,
              html: data.html,
              md: data.pureMd
            })
            .write();
          res.send({ status: true, response: "Post succesfully changed!" });
        } else {
          let allData = db
            .get("articles")
            .sortBy("numId")
            .value();
          let lastIndex = allData[allData.length - 1].numId;

          db.get("articles")
            .push({
              id: data.titleId,
              title: data.title,
              type: data.type,
              mainImg: data.mainImg,
              shareImg: data.shareImg,
              time: data.time,
              html: data.html,
              author: data.author,
              authorLink: data.authorLink,
              md: data.pureMd,
              seoTitle: data.seoTitle,
              seoText: data.seoText,
              numId: lastIndex + 1,
              visible: 1,
              created_at: Date.now()
            })
            .write();
          res.send({ status: true, response: "Post succesfully created!" });
        }
      });
    } catch (e) {
      console.error("Wrong Api request " + e);
      res.status(666);
      res.send({ status: false, response: "Something went wrong, try again" });
    }
  });

  app.post("/api/upload", function(req, res) {
    try {
      if (Object.keys(req.files).length == 0) {
        return res.status(400).send("No files were uploaded.");
      }
      let sampleFile = req.files.file;
      let filename = sampleFile.name;
      sampleFile.mv(
        __dirname + "/../static/assets/images/" + filename,
        function(err) {
          if (err) return res.status(500).send(err);
          res.send("File succesfully uploaded!");
        }
      );
    } catch (e) {
      console.error("Wrong Api request " + e);
      res.status(666);
      res.send({
        status: false,
        response: "Something went wrong with uploading, try again"
      });
    }
  });

  /*
   * Public API Methods
   *
   *******************************/

  app.get("/api", function(req, res) {
    try {
      low(adapter).then(db => {
        let result = db
          .get("articles")
          .filter({ visible: 1 })
          .value();
        res.send({ status: true, response: result });
      });
    } catch (e) {
      console.error("Wrong Api request " + e);
      res.send("error");
    }
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
