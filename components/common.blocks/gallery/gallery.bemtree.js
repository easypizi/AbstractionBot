block("gallery").content()((node, ctx) => {
  return [
    {
      elem: "slides",
      content:
        ctx &&
        ctx.elems &&
        ctx.elems.map(item => {
          return {
            elem: "card",
            content: item
          };
        })
    },
    {
      elem: "controls",
      content: [
        {
          block: "button",
          mods: {
            slide: "left"
          },
          icon: {
            block: "icon",
            mods: {
              symbol: "round"
            }
          }
        },
        {
          block: "button",
          mods: {
            slide: "right"
          },
          icon: {
            block: "icon",
            mods: {
              symbol: "round"
            }
          }
        }
      ]
    }
  ];
});
