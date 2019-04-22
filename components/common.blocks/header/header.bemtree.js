block("header").content()(() => {
  return [
    {
      block: "nav-menu"
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
