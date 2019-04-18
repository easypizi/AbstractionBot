block("lazyImage").content()(function() {
  return [
    {
      block: "image",
      alt: "Abstraction fest",
      attrs: {
        "data-src": this.ctx.imgSrc
      }
    },
    {
      elem: "loader",
      elemMods: {
        show: true
      },
      mix: { block: "lds-dual-ring" }
    }
  ];
});
