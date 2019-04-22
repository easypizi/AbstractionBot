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
        url: "https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"
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
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        }
      },
      {
        elem: "meta",
        attrs: {
          "http-equip": "Content-Security-Policy",
          content: "upgrade-insecure-requests"
        }
      },
      // Yandex Metrica
      {
        elem: "js",
        attrs: { async: true },
        content:
          '(function(m, e, t, r, i, k, a) {m[i] =m[i] ||function() {(m[i].a = m[i].a || []).push(arguments);};m[i].l = 1 * new Date();(k = e.createElement(t)),(a = e.getElementsByTagName(t)[0]),(k.async = 1),(k.src = r),a.parentNode.insertBefore(k, a);})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(53056525, "init", {clickmap: true,trackLinks: true,accurateTrackBounce: true,webvisor: true});'
      },
      // Yandex Metrica (noscript)
      {
        tag: "noscript",
        content: {
          html: '<div><img src="https://mc.yandex.ru/watch/53056525" style="position:absolute; left:-9999px;" alt="" /></div>'
        }
      },
      // <!— End Yandex Metrica —>
      // <!— Google Tag Manager —>
      {
        elem: "js",
        attrs: { async: true },
        url: "https://www.googletagmanager.com/gtag/js?id=UA-137391029-1"
      },
      {
        elem: "js",
        attrs: { async: true },
        content: 'window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-137391029-1");'
      },
      //  <!— End Google Tag Manager —>
      // <!— VK Analytics —>
      {
        elem: "js",
        attrs: { async: true },
        content:
          '!(function() {var t = document.createElement("script");(t.type = "text/javascript"),(t.async = !0),(t.src = "https://vk.com/js/api/openapi.js?160"),(t.onload = function() {VK.Retargeting.Init("VK-RTRG-352180-9LGD"), VK.Retargeting.Hit();}),document.head.appendChild(t);})();'
      },
      // Yandex Metrica (noscript)
      {
        tag: "noscript",
        content: {
          html: '<div><img src="https://vk.com/rtrg?p=VK-RTRG-352180-9LGD" style="position:fixed; left:-999px; alt="" /></div>'
        }
      },
      //  <!— End VK Analytics —>
      // <!-- Facebook Pixel Code -->
      {
        elem: "js",
        attrs: { async: true },
        content:
          '!(function(f, b, e, v, n, t, s) {if (f.fbq) return;n = f.fbq = function() {n.callMethod? n.callMethod.apply(n, arguments): n.queue.push(arguments);};if (!f._fbq) f._fbq = n;n.push = n;n.loaded = !0;n.version = "2.0";n.queue = [];t = b.createElement(e);t.async = !0;t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);})(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init", "2009238136050520");fbq("track", "PageView");'
      },
      // Yandex Metrica (noscript)
      {
        tag: "noscript",
        content: {
          html: '<div><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2009238136050520&ev=PageView&noscript=1" /></div>'
        }
      },
      //  <!— End Facebook Pixel Code —>
      {
        html: '<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />'
      },
      {
        html: '<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>'
      },
      { html: '<link href="//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.7.4/tiny-slider.css" rel="stylesheet">' },
      { elem: "meta", attrs: { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" } },
      { elem: "meta", attrs: { "http-equip": "Content-Security-Policy", content: "upgrade-insecure-requests" } },
      { elem: "meta", attrs: { name: "description", content: "Abstraction festival | Красное озеро | Транс | Техно" } },
      { elem: "meta", attrs: { name: "image", content: "/share_image.png" } },

      // Search Engine
      { elem: "meta", attrs: { id: "SearchEngine-Title", itemprop: "name", content: "Abstraction festival" } },
      { elem: "meta", attrs: { id: "SearchEngine-Description", itemprop: "description", content: "Abstraction festival | Красное озеро | Транс | Техно" } },
      { elem: "meta", attrs: { id: "SearchEngine-Title", itemprop: "image", content: "/share_image.png" } },

      // Facebook & VK shares
      { elem: "meta", attrs: { property: "og:title", content: "Abstraction festival" } },
      { elem: "meta", attrs: { property: "og:url", content: "http://abstractionfest.ru" } },
      { elem: "meta", attrs: { property: "og:site_name", content: "AbstractioN" } },
      { elem: "meta", attrs: { property: "og:locale", content: "ru_RU" } },
      { elem: "meta", attrs: { property: "og:type", content: "website" } },
      { elem: "meta", attrs: { property: "og:description", content: "Abstraction festival | Красное озеро | Транс | Техно" } },
      { elem: "meta", attrs: { property: "og:image", content: "/share_image.png" } },

      // Twitter share methods
      { elem: "meta", attrs: { name: "twitter:title", content: "Abstraction festival" } },
      { elem: "meta", attrs: { property: "twitter:image", content: "http://abstractionfest.ru/share_image.png" } },
      { elem: "meta", attrs: { name: "twitter:description", content: "Abstraction festival | Красное озеро | Транс | Техно" } },
      { elem: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },

      // G+ share methods
      { elem: "meta", attrs: { itemprop: "name", content: "Abstraction festival" } },
      { elem: "meta", attrs: { itemprop: "image", content: "https://artscp.com/artscp-tw.png" } },
      { elem: "meta", attrs: { itemprop: "description", content: "Abstraction festival | Красное озеро | Транс | Техно" } },

      { elem: "meta", attrs: { name: "apple-mobile-web-app-capable", content: "yes" } },
      { html: '<link rel="canonical" href=http://abstractionfest.ru>' },
      { html: '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">' },
      { html: '<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">' },
      { html: '<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png">' },
      { html: '<meta name="msapplication-TileColor" content="#ff0000">' },
      { html: '<meta name="theme-color" content="#ffffff">' }
    ],
    mods: {
      theme: "plus",
      view: data.view
    }
  };
});
