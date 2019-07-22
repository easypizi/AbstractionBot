block("lazyImage").content()(function() {
  return [
    {
      block: "image",
      alt: "Abstraction fest",
      width: "1px",
      height: "1px",
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
