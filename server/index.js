Object.assign || (Object.assign = require("object-assign"));

var fs = require("fs"),
  path = require("path"),
  express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  favicon = require("serve-favicon"),
  morgan = require("morgan"),
  serveStatic = require("serve-static"),
  cookieParser = require("cookie-parser"),
  slashes = require("connect-slashes"),
  passport = require("passport"),
  compression = require("compression"),
  config = require("./config"),
  fileUpload = require("express-fileupload"),
  staticFolder = config.staticFolder,
  Render = require("./render"),
  dropCache = Render.dropCache, // eslint-disable-line no-unused-vars
  port = process.env.PORT || config.defaultPort,
  isSocket = isNaN(port),
  isDev = process.env.NODE_ENV === "development";

// default options
require("debug-http")();

app
  .disable("x-powered-by")
  .enable("trust proxy")
  .use(compression())
  .use(favicon(path.join(staticFolder, "favicon.ico")))
  .use(serveStatic(staticFolder))
  .use(morgan("combined"))
  .use(cookieParser())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(passport.initialize())
  .use(passport.session())
  .use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: __dirname + "/../static/assets/images"
    })
  );

isDev || app.use(slashes());

passport.serializeUser(function(user, done) {
  done(null, JSON.stringify(user));
});

passport.deserializeUser(function(user, done) {
  done(null, JSON.parse(user));
});

app.get("/ping/", function(req, res) {
  res.send("ok");
});

require("./router")(app);

isDev && require("./rebuild")(app);

if (isDev) {
  app.get("/error/", function() {
    throw new Error("Uncaught exception from /error");
  });

  app.use(require("errorhandler")());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function() {
  isSocket && fs.chmod(port, "0777");
  console.log("Server is listening on", this.address().port);
});
