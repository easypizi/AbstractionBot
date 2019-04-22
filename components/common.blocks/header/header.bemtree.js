block("header").content()(() => {
  return [
    {
      block: "nav-menu",
      mods: {
        mobile: false,
        hide: true
      }
    },
    {
      block: "burger",
      mix: {
        block: "header",
        elem: "burger"
      }
    }
  ];
});
