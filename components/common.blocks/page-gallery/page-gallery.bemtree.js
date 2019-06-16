block("page-gallery").content()(function() {
  let lineup = {
    techno: [
      {
        title: "Alekseev ",
        description: "Fantazery, LABYRINTH",
        photo: "ALEKSEEV",
        link: "https://soundcloud.com/ellixalien"
      },
      {
        title: "NICK-OS ",
        description: "LABYRINTH",
        photo: "NICK-OS",
        link: "https://vk.com/djnick_os"
      },
      {
        title: "Kaya / Ten-G",
        description: "LABYRINTH",
        photo: "Kaya",
        link: "https://soundcloud.com/tengi  "
      },
      {
        title: "Alex Panchenco ",
        description: "Escade Music, Aura Music",
        photo: "Alex",
        link: "https://soundcloud.com/alex-panchenco "
      },
      {
        title: "Oscar Schultz ",
        description: "Deep Ladoga",
        photo: "Oscar",
        link: "https://vk.com/oscarschultz"
      },
      {
        title: "Bagus aka Mr.B ",
        description: "(dj set)",
        photo: "Bagus",
        link: "https://soundcloud.com/kirillbagus"
      },
      {
        title: "Daniil Waigelman ",
        description: "Psycometrik Recordings (Spain)",
        photo: "Waigelman",
        link: "https://soundcloud.com/daniilwaigelman"
      },
      {
        title: "Taiwa ",
        description: "(dj set)",
        photo: "TAIWA",
        link: "https://soundcloud.com/aidartaiwa "
      },
      {
        title: "Voodoo Noise aka Otto O'Shea",
        description: "Mistral'",
        photo: "Voodoo",
        link: "https://soundcloud.com/voodoonoise"
      },
      {
        title: "Eye Que ",
        description: "SubSpace",
        photo: "EYE",
        link: "https://soundcloud.com/eye_que "
      },
      {
        title: "German Air  (hybrid live/dj set)",
        description: "Heartbeat Records, Baikonur Recordings ",
        photo: "GermanAir",
        link: "https://soundcloud.com/german_air "
      },
      {
        title: "Mixa Wawer",
        description: "(dj set)",
        photo: "Waver",
        link: "https://soundcloud.com/technopunks "
      },
      {
        title: "Space Modular",
        description: "Techno Vinyls Records",
        photo: "Space",
        link: "https://soundcloud.com/space-modular "
      }
    ],
    trance: [
      {
        title: "Fagin's Reject ",
        description: "(Wildthings Records), UK - LIVE ",
        link: "https://soundcloud.com/fagins_reject ",
        photo: "fagins"
      },
      {
        title: "Headworks ",
        description: "(Wildthings Records), UK - LIVE ",
        link: "https://soundcloud.com/headworks-1 ",
        photo: "Headworks"
      },
      {
        title: "Beardy Weardy ",
        description: "(Wildthings Records) UK - LIVE + Dj set ",
        link: "https://soundcloud.com/beardy-weardy-wildthings ",
        photo: "Beardy"
      },
      {
        title: "Samadhi ",
        description: "(Hilltop Records) - Goa/Ru  ",
        link: "https://soundcloud.com/samadhi  ",
        photo: "samadhi"
      },
      {
        title: "Groove Hunter ",
        description: "( World People Production/NT Group ), Ru - LIVE  ",
        link: "https://soundcloud.com/groove_hunter  ",
        photo: "gh"
      },
      {
        title: "LaaToka ",
        description: "(Sunstation rec), Ru  ",
        link: "https://soundcloud.com/laatoka  ",
        photo: "Laatoka"
      },
      {
        title: "Exciter ",
        description: "(Bounce Recordings), Ru  ",
        link: "https://soundcloud.com/exciteroffical   ",
        photo: "Exciter"
      },
      {
        title: "Anumana ",
        description: "(Timewarp Records) ",
        link: "https://soundcloud.com/anumana ",
        photo: "Anumana"
      },
      {
        title: "Belonica ",
        link: "https://soundcloud.com/belonica",
        photo: "blnc"
      },
      {
        title: "Casper ",
        description: "(NT Group Promotion), Ru ",
        link: "http://promodj.com/hystericalmind/music ",
        photo: "Casper"
      },
      { title: "Doozer  ", link: "https://vk.com/djdoozer ", photo: "Doozer" },
      {
        title: "Funkyjunky ",
        description: "(Basic Algorithm), Ru ",
        link: "https://soundcloud.com/funkyshmunky   ",
        photo: "fj"
      },
      {
        title: "psYphomet ",
        description: "(Multifrequency Records), Ru ",
        link: "https://soundcloud.com/psyphometboobblegooms    ",
        photo: "psy"
      },
      {
        title: "Plazmer ",
        description: "(Basic Algorithm Records) ",
        link: "https://mixcloud.com/plazmer20  ",
        photo: "plazmer"
      },
      {
        title: "Sure ",
        description: "(NT Group Promotion), Ru  ",
        link: "https://www.mixcloud.com/surepb/  ",
        photo: "sure"
      },
      {
        title: "Satori ",
        description: "(Vertigo Records), Ru ",
        link: "https://www.facebook.com/nata.satori ",
        photo: "satori"
      },
      {
        title: "Troll machine   ",
        link: "https://soundcloud.com/troll-machine ",
        photo: "tm"
      },
      {
        title: "Will  ",
        description: "(NT Group Promotion), Ru  ",
        link: "https://soundcloud.com/willspb ",
        photo: "will"
      },
      {
        title: "Yhtiot    ",
        description: "(Feeless Records), Ru ",
        link: "https://soundcloud.com/yhtiot ",
        photo: "yt"
      },
      {
        title: "ToyFog ",
        link: "https://soundcloud.com/toyfog ",
        photo: "toyfog"
      },
      {
        title: "On",
        link: "https://www.mixcloud.com/olegfreerider/ ",
        photo: "on2"
      }
    ],
    chill: []
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

  // let chillArray = lineup.chill.map(item => {
  //   return {
  //     block: "card",
  //     artist: item
  //   };
  // });

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
            // {
            //   text: "Чиллаут",
            //   active: false,
            //   disabled: false,
            //   checked: false
            // }
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
            // {
            //   elem: "pane",
            //   elemMods: { active: false },
            //   mix: {
            //     block: "page-gallery",
            //     mods: {
            //       flexBox: true
            //     }
            //   },
            //   content: chillArray
            // }
          ]
        }
      ]
    },
    {
      elem: "eighth",
      content: {
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
              elemMods: { star: true }
            },
            mods: {
              view: "botStar"
            }
          },
          {
            block: "graphics",
            mix: {
              block: "page-gallery",
              elem: "absImage",
              elemMods: { slime: true }
            },
            mods: {
              view: "bottom"
            }
          },
          {
            block: "button",
            mods: {
              type: "link",
              ym: true
            },
            url: "http://rupor.biz/widgets/event-tickets/361",
            text: "Купить билет"
          }
        ]
      }
    }
  ];
});
