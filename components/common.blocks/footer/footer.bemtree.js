block("footer").content()(() => {
  return [
    {
      elem: "content",
      content: [
        {
          block: "nav-menu",
          js: true
        },
        {
          block: "socials",
          mods: {
            horizontal: true
          }
        }
      ]
    },
    {
      elem: "partners",
      content: [
        {
          block: "link",
          targer: "_blank",
          attrs: {
            rel: "noreferrer, noopener, nofollow"
          },
          url: "http://www.energyfm.ru/index_city/kw1/182314/station/84",
          content: {
            block: "lazyImage",
            mix: [{ block: "lazyImage", mods: { hidden: true } }],
            imgSrc: "assets/images/nrj.png"
          }
        },

        {
          block: "link",
          targer: "_blank",
          attrs: {
            rel: "noreferrer, noopener, nofollow"
          },
          url: "https://geometria.ru/spb/",
          content: {
            block: "lazyImage",
            mix: [{ block: "lazyImage", mods: { hidden: true } }],
            imgSrc: "assets/images/geometria.jpg"
          }
        },

        {
          block: "link",
          targer: "_blank",
          attrs: {
            rel: "noreferrer, noopener, nofollow"
          },
          url: "https://kudago.com/spb/",
          content: {
            block: "lazyImage",
            mix: [{ block: "lazyImage", mods: { hidden: true } }],
            imgSrc: "assets/images/kudago.png"
          }
        },

        {
          block: "link",
          targer: "_blank",
          attrs: {
            rel: "noreferrer, noopener, nofollow"
          },
          url: "https://trip2fest.ru/",
          content: {
            block: "lazyImage",
            mix: [{ block: "lazyImage", mods: { hidden: true } }],
            imgSrc: "assets/images/2fest.png"
          }
        }
      ]
    }
  ];
});
