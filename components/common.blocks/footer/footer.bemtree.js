block("footer").content()(() => {
  return [
    {
      elem: "content",
      content: [
        {
          block: "nav-menu",
          js: true
        },
        {
          block: "socials",
          mods: {
            horizontal: true
          }
        }
      ]
    }
  ];
});
