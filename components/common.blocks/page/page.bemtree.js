block("page").content()(function() {
  return [
    {
      block: "header"
    },
    {
      block: this.data.view
    },
    {
      block: "footer"
    },
    {
      block: "socials",
      mods: {
        vertical: true
      }
    }
  ];
});
