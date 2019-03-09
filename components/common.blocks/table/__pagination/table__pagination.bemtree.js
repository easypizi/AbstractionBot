block("table")
  .elem("pagination")
  .content()(function() {
  let buttonPages = [];
  let i = 1;
  while (i <= this.ctx.pages) {
    buttonPages.push({
      block: "button",
      js: {
        btnId: i,
        js: true
      },
      mods: {
        theme: "islands",
        size: "m",
        disabled: false,
        currentPage: i,
        active: i === 1 ? true : false
      },
      text: i
    });
    i = i + 1;
  }

  return [
    {
      block: "control-group",
      content: [
        {
          block: "button",
          js: {
            btnId: "prev"
          },
          mods: {
            theme: "islands",
            size: "m",
            disabled: true,
            currentPage: "prev"
          },
          text: "PREVIOUS"
        },
        buttonPages,
        {
          block: "button",
          js: {
            btnId: "next"
          },
          mods: {
            theme: "islands",
            size: "m",
            disabled: this.ctx.pages > 1 ? false : true,
            currentPage: "next"
          },
          text: "NEXT"
        }
      ]
    }
  ];
});
