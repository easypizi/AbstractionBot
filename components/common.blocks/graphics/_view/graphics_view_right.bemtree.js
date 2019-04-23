block("graphics")
  .mod("view", "right")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "assets/images/topR.png"
    }
  ];
});
