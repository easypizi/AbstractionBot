block("nav-menu").content()(() => {
  return [
    {
      elem: "content",
      content: [
        {
          block: "link",
          mix: {
            block: "font",
            mods: {
              family: "bold"
            }
          },
          url: "/lineup",
          content: "лайн-ап"
        },
        {
          block: "link",
          mods: {
            click: true
          },
          mix: {
            block: "font",
            mods: {
              family: "bold"
            }
          },
          url: "",
          content: "место"
        },
        {
          block: "link",
          mix: {
            block: "font",
            mods: {
              family: "bold"
            }
          },
          url: "https://docs.google.com/forms/d/173ZqPW_pSS8ImydVO6ZhlWa2RBYB5SuCCRLL2SKMYoE/viewform?edit_requested=true",
          content: "арт"
        },
        {
          block: "link",
          mix: {
            block: "font",
            mods: {
              family: "bold"
            }
          },
          url: "mailto:abstractionfest@gmail.com",
          content: "партнерам"
        },
        {
          block: "link",
          mix: {
            block: "font",
            mods: {
              family: "bold"
            }
          },
          url: "https://docs.google.com/forms/d/1Rj1rRmOI9t11Dymg_Zbkbbm5Fu61QhgrXa9pGBVJogs/viewform?edit_requested=true",
          content: "волонтерам"
        },
        {
          block: "link",
          mix: {
            block: "font",
            mods: {
              family: "bold"
            }
          },
          url: "https://docs.google.com/forms/d/1HcdGDQabhPeqIaTUC5niaydRr-FmytwoPzHLTAtdQFM/viewform?edit_requested=true",
          content: "ярмарка"
        }
      ]
    }
  ];
});
