block("header").content()(() => {
  return [
    {
      elem: "wrapper",
      mods: {
        visible: false
      },
      content: [
        {
          block: "burger"
        }
      ]
    },
    {
      block: "nav-menu",
      mods: {
        mobile: false
      }
    }
  ];
});
