block("graphics")
  .mod("view", "left")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "assets/images/topL.png"
    }
  ];
});
