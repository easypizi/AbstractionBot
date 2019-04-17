block("footer").content()(() => {
  return [
    {
      elem: "content",
      content: [
        {
          block: "nav-menu",
          mods: {
            mobile: false
          }
        },
        {
          block: "socials"
        }
      ]
    }
  ];
});
