block("page-gallery").content()(function() {
  let lineup = {
    techno: [
      { title: "Alekseev ", description: "", photo: "", link: "https://soundcloud.com/ellixalien" },
      { title: "NICK-OS ", description: "", photo: "", link: "https://vk.com/djnick_os" },
      { title: "Kaya / Ten-G", description: "", photo: "", link: "https://soundcloud.com/tengi  " },
      { title: "Alex Panchenco ", description: "", photo: "", link: "https://soundcloud.com/alex-panchenco " },
      { title: "Oscar Schultz ", description: "", photo: "", link: "https://vk.com/oscarschultz" },
      { title: "Bagus aka Mr.B ", description: "", photo: "", link: "https://soundcloud.com/kirillbagus" },
      { title: "Daniil Waigelman ", description: "", photo: "", link: "https://soundcloud.com/daniilwaigelman" },
      { title: "Taiwa ", description: "", photo: "", link: "https://soundcloud.com/aidartaiwa " },
      { title: "Voodoo Noise aka Otto O'Shea", description: "", photo: "", link: "https://soundcloud.com/voodoonoise" },
      { title: "Eye Que ", description: "", photo: "", link: "https://soundcloud.com/eye_que " },
      { title: "German Air  (hybrid live/dj set)", description: "", photo: "", link: "https://soundcloud.com/german_air " },
      { title: "Mixa Wawer", description: "", photo: "", link: "https://soundcloud.com/technopunks " },
      { title: "Space Modular LIVE", description: "", photo: "", link: "https://soundcloud.com/space-modular " }
    ],
    trance: [
      { title: "Fagin's Reject ", description: "(Wildthings Records), UK - LIVE ", link: "https://soundcloud.com/fagins_reject ", photo: "" },
      { title: "Headworks ", description: "(Wildthings Records), UK - LIVE ", link: "https://soundcloud.com/headworks-1 ", photo: "" },
      { title: "Beardy Weardy ", description: "(Wildthings Records) UK - LIVE + Dj set ", link: "https://soundcloud.com/beardy-weardy-wildthings ", photo: "" },
      { title: "Samadhi ", description: "(Hilltop Records) - Goa/Ru  ", link: "https://soundcloud.com/samadhi  ", photo: "" },
      { title: "Groove Hunter ", description: "( World People Production/NT Group ), Ru - LIVE  ", link: "https://soundcloud.com/groove_hunter  ", photo: "" },
      { title: "LaaToka ", description: "(Sunstation rec), Ru  ", link: "https://soundcloud.com/laatoka  ", photo: "" },
      { title: "Exciter ", description: "(Bounce Recordings), Ru  ", link: "https://soundcloud.com/exciteroffical   ", photo: "" },
      { title: "Anumana ", description: "(Timewarp Records) ", link: "https://soundcloud.com/anumana ", photo: "" },
      { title: "Belonica ", link: "https://soundcloud.com/belonica  " },
      { title: "Casper ", description: "(NT Group Promotion), Ru ", link: "http://promodj.com/hystericalmind/music ", photo: "" },
      { title: "Doozer  ", link: "https://vk.com/djdoozer " },
      { title: "Funkyjunky ", description: "(Basic Algorithm), Ru ", link: "https://soundcloud.com/funkyshmunky   ", photo: "" },
      { title: "psYphomet ", description: "(Multifrequency Records), Ru ", link: "https://soundcloud.com/psyphometboobblegooms    ", photo: "" },
      { title: "Plazmer ", description: "(Basic Algorithm Records) ", link: "https://mixcloud.com/plazmer20  ", photo: "" },
      { title: "Sure ", description: "(NT Group Promotion), Ru  ", link: "https://www.mixcloud.com/surepb/  ", photo: "" },
      { title: "Satori ", description: "(Vertigo Records), Ru ", link: "https://www.facebook.com/nata.satori ", photo: "" },
      { title: "Troll machine   ", link: "https://soundcloud.com/troll-machine " },
      { title: "Will  ", description: "(NT Group Promotion), Ru  ", link: "https://soundcloud.com/willspb ", photo: "" },
      { title: "Yhtiot    ", description: "(Feeless Records), Ru ", link: "https://soundcloud.com/yhtiot ", photo: "" },
      { title: "ToyFog ", link: "https://soundcloud.com/toyfog " },
      { title: "On", link: "https://www.mixcloud.com/olegfreerider/ " }
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
