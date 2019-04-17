block("graphics")
  .mod("view", "botStar")
  .content()(function() {
  return [
    {
      block: "lazyImage",
      mix: [{ block: "lazyImage", mods: { hidden: true } }],
      imgSrc: "/assets/images/abs3.svg"
    }
  ];
});
