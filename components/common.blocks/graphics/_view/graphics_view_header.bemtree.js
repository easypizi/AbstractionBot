block("graphics")
  .mod("view", "header")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "assets/img/bg-img-header.png"
    }
  ];
});
