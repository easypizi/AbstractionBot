block("root").replace()(function() {
  var ctx = this.ctx,
    data = (this.data = ctx.data),
    bundle = data.bundle || "desktop",
    lang = data.lang || "en";

  if (ctx.context) return ctx.context;

  return {
    block: "page",
    title: data.title || "AdminPanel for COIN360 Analytics",
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
        url: "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
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
      }
    ],
    mods: {
      theme: "islands",
      view: data.view
    }
  };
});
