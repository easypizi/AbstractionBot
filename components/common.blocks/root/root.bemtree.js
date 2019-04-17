block("root").replace()(function() {
  var ctx = this.ctx,
    data = (this.data = ctx.data),
    bundle = data.bundle || "desktop",
    lang = data.lang || "en";

  if (ctx.context) return ctx.context;

  return {
    block: "page",
    title: data.title || "Abstraction Fest 2019",
    favicon: "/favicon.ico",
    lang: lang,
    styles: [
      {
        elem: "css",
        url: "/assets/css/" + bundle + "/" + bundle + ".min.css"
      }
    ],
    scripts: [
      {
        elem: "js",
        url: "/assets/js/" + bundle + "/" + bundle + "." + lang + ".min.js",
        attrs: { async: true }
      },
      {
        elem: "js",
        url: "//code.jquery.com/jquery-1.11.0.min.js"
      },
      {
        elem: "js",
        url: "//code.jquery.com/jquery-migrate-1.2.1.min.js"
      },
      {
        elem: "js",
        url: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
      },
      {
        elem: "js",
        url: "/vendor/tinyslider_helper.js"
      },
      {
        elem: "js",
        url: "/vendor/tinyslider.js"
      }
    ],
    head: [
      {
        elem: "meta",
        attrs: {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        }
      },
      {
        elem: "meta",
        attrs: {
          "http-equip": "Content-Security-Policy",
          content: "upgrade-insecure-requests"
        }
      },
      {
        html:
          '<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />'
      },
      {
        html:
          '<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>'
      }
    ],
    mods: {
      theme: "plus",
      view: data.view
    }
  };
});
