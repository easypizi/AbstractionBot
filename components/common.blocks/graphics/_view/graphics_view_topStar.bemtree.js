block("graphics")
  .mod("view", "topStar")
  .content()(function() {
  return [
    [
      {
        block: "lazyImage",
        mix: [{ block: "lazyImage", mods: { hidden: true } }],
        imgSrc: "assets/images/abs1.svg"
      }
    ]
  ];
});
