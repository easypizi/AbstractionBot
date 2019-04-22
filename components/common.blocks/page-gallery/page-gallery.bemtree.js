block("page-gallery").content()(function() {
  let lineup = {
    techno: [
      {
        title: "First Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "First Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "First Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "First Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "First Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "First Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      }
    ],
    trance: [
      {
        title: "Trance Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "Trance Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "Trance Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "Trance Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "Trance Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      },
      {
        title: "Trance Musician",
        description: "lalalala",
        photo: "default.png",
        link: "/"
      }
    ]
  };

  let technoArray = lineup.techno.map(item => {
    return {
      block: "card",
      artist: item
    };
  });

  let tranceArray = lineup.trance.map(item => {
    return {
      block: "card",
      artist: item
    };
  });

  return [
    {
      block: "link",
      mix: {
        block: "page-gallery",
        elem: "backButton"
      },
      url: "/",
      content: [
        {
          block: "icon",
          mods: {
            arrow: "right"
          }
        },
        { elem: "text", content: "на главную" }
      ]
    },
    {
      elem: "contentWrapper",
      mix: {
        block: "page",
        mods: {
          width: "narrow"
        }
      },
      content: [
        {
          block: "graphics",
          mix: {
            block: "page-gallery",
            elem: "absImage",
            elemMods: { middle: true }
          },
          mods: {
            view: "midStar"
          }
        },
        {
          block: "title",
          mods: {
            size: "l"
          },
          content: "ЛАЙН-АП"
        },
        {
          block: "tabs",
          mods: { type: "button" },
          tabs: [
            {
              text: "Транс",
              disabled: false,
              active: true,
              checked: false
            },
            {
              text: "Техно",
              active: false,
              disabled: false,
              checked: false
            }
          ],
          content: [
            {
              elem: "pane",
              mix: {
                block: "page-gallery",
                mods: {
                  flexBox: true
                }
              },
              elemMods: { active: true },
              content: tranceArray
            },
            {
              elem: "pane",
              elemMods: { active: false },
              mix: {
                block: "page-gallery",
                mods: {
                  flexBox: true
                }
              },
              content: technoArray
            }
          ]
        }
      ]
    }
  ];
});
