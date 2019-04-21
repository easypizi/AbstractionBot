block("gallery").content()(() => {
  return [
    {
      elem: "slides",
      content:
        this.ctx &&
        this.ctx.elems &&
        this.ctx.elems.map(item => {
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
              symbol: "arrow"
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
              symbol: "arrow"
            }
          }
        }
      ]
    }
  ];
});
