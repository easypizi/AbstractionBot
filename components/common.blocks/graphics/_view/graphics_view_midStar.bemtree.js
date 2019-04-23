block("graphics")
  .mod("view", "midStar")
  .content()(function() {
  return [
    [
      {
        block: "lazyImage",
        mix: [{ block: "lazyImage", mods: { hidden: true } }],
        imgSrc: "assets/images/abs2.svg"
      }
    ]
  ];
});
