block("graphics")
  .mod("view", "bottom")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "assets/images/BotC.png"
    }
  ];
});
