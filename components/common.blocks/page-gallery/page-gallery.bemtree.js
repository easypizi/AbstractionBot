block("page-gallery").content()(function() {
  let lineup = {
    techno: [
      {
        title: "The Panacea (DE)",
        description: "",
        photo: "panacea",
        link: "https://soundcloud.com/thepanaceaofficial"
      },
      {
        title: "Alekseev aka Aliksiv",
        description: "Fantazery, LABYRINTH",
        photo: "ALEKSEEV",
        link: "https://soundcloud.com/ellixalien"
      },
      {
        title: "Alex Panchenco ",
        description: "Escade Music, Aura Music",
        photo: "Alex",
        link: "https://soundcloud.com/alex-panchenco "
      },
      {
        title: "Artarea",
        description: "",
        link: "https://vk.com/artem_miliukov",
        photo: "artarea"
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
        title: "Danny Mills ",
        description: "",
        link: "https://www.beatport.com/artist/danny-mills/394436",
        photo: "mills"
      },
      {
        title: "DERKNOB",
        description: "",
        link: "https://www.mixcloud.com/der-knob",
        photo: "derknob"
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
        title: "Kaya",
        description: "LABYRINTH",
        photo: "kaya",
        link: "https://soundcloud.com/user-695448784"
      },

      {
        title: "Mila Craft",
        description: "Mistral'",
        photo: "mila",
        link: "https://soundcloud.com/mila_craft/"
      },
      {
        title: "Mish Mish",
        description: "",
        photo: "mishmish",
        link: "http://promodj.com/mishmishdj"
      },

      {
        title: "Mixa Wawer",
        description: "(dj set)",
        photo: "Waver",
        link: "https://soundcloud.com/technopunks "
      },
      {
        title: "NICK-OS ",
        description: "LABYRINTH",
        photo: "NICK-OS",
        link: "https://vk.com/djnick_os"
      },
      {
        title: "Oscar Schultz ",
        description: "Deep Ladoga",
        photo: "Oscar",
        link: "https://vk.com/oscarschultz"
      },
      {
        title: "Voodoo Noise aka Otto O'Shea",
        description: "Mistral'",
        photo: "Voodoo",
        link: "https://soundcloud.com/voodoonoise"
      },
      {
        title: "Pete",
        description: "(vinyl dj set)",
        photo: "pete",
        link: "https://soundcloud.com/peter-kuschnereit"
      },
      {
        title: "SPTNK",
        description: "",
        photo: "sptnk",
        link: "https://vk.com/sptnk.music"
      },
      {
        title: "Space Modular",
        description: "Techno Vinyls Records",
        photo: "Space",
        link: "https://soundcloud.com/space-modular "
      },
      {
        title: "Ten-G",
        description: "Fantazery , Mistral’",
        photo: "TEN-G1",
        link: "https://soundcloud.com/tengi  "
      },
      {
        title: "Tochka_sborki DJs",
        description: "",
        photo: "tochka",
        link:
          "https://soundcloud.com/tochka_sborki/tochka-sborki-djs-live-at-masts-club-10112017  "
      },
      {
        title: "qqoma",
        description: "(vinyl dj set)",
        photo: "qoma",
        link: "https://vk.com/qoma_music"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Denis Podgorniy",
        description: "",
        link: "https://soundcloud.com/denis-podgorny-1",
        photo: "podgor"
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
      {
        title: "Doozer",
        description: "",
        link: "https://vk.com/djdoozer ",
        photo: "Doozer"
      },
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
        title: "Trickster",
        description: "Basic Algorithm Records",
        link: "https://promodj.com/trickster",
        photo: "trickster"
      },
      {
        title: "On",
        link: "https://www.mixcloud.com/olegfreerider/ ",
        photo: "on2"
      },
      {
        title: "Fil Zionpsychedelic",
        description: "",
        link: "http://soundcloud.com/surya-project",
        photo: "fil"
      },
      {
        title: "Mauri Naja",
        description: "",
        link: "https://soundcloud.com/maurinaja",
        photo: "mauri"
      },
      {
        title: "Oxidant ",
        description: "",
        link: "https://vk.com/britva92",
        photo: "oxidant"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Blastourist (HU)",
        description: "",
        link: "https://soundcloud.com/blastourist",
        photo: "blastourist"
      },
      {
        title: "Racoon",
        description: "",
        link: "https://soundcloud.com/raccoon-374329708",
        photo: "racoon"
      }
    ],
    chill: [
      {
        title: "Alexander Daf",
        description: "",
        link: "https://soundcloud.com/alexanderdaf",
        photo: "daf"
      },
      {
        title: "Aedem",
        description: "",
        link: "https://soundcloud.com/aedem",
        photo: "AEDEM"
      },
      {
        title: "Arthur Pralaya",
        description: "",
        link: "https://vk.com/arthur_pralaya",
        photo: "pralaya"
      },
      {
        title: "Blue Lotus",
        description: "Microcosmos records",
        link: "https://blue-lotus.ru/ ",
        photo: "bluelotus"
      },
      {
        title: "Doozer",
        description: "",
        link: "https://vk.com/djdoozer ",
        photo: "Doozer"
      },
      {
        title: "EDD-989",
        description: "Microcosmos Records",
        link: "https://vk.com/edd_989",
        photo: "edd989"
      },
      {
        title: "Helimax",
        description: "",
        link: "https://promodj.com/Helimax",
        photo: "helimax"
      },
      {
        title: "Invisible Inks",
        description: "",
        link: "https://vk.com/invisible_inks",
        photo: "invisibleinks"
      },
      {
        title: "Kuzma",
        description: "",
        link: "http://kuzma-kuznetsov.bandcamp.com/",
        photo: "kuzma"
      },
      {
        title: "Олег Bu33a",
        description: "",
        link: "https://www.instagram.com/oleg_bu33a/",
        photo: "bizza"
      },
      {
        title: "Dj Pealot",
        description: "",
        link: "https://www.mixcloud.com/peaLot/",
        photo: "pealot"
      },
      {
        title: "RaFuze",
        description: "",
        link: "https://t.me/soundhunter",
        photo: "rafuze"
      },
      {
        title: "Sofi Sayonara",
        description: "",
        link: "https://www.mixcloud.com/southfruit/",
        photo: "sofi"
      },
      {
        title: "Susie Johnson",
        description: "",
        link: "https://soundcloud.com/dj_susie",
        photo: "susie"
      },
      {
        title: "Translippers",
        description: "",
        link: "https://translippers.ru",
        photo: "translippers"
      },
      {
        title: "UMT -:- Unlimited Mental Traffic",
        description: "",
        link: "unlim.pdj.ru",
        photo: "umt"
      },
      {
        title: "Yaleeni",
        description: "Global Sect Music / GoaHunter records",
        link: "https://promodj.com/Yaleeni",
        photo: "yaleeni"
      },
      {
        title: "Alexander S. Karlov and E-Motive",
        description: "",
        link: "https://vk.com/djkarlov",
        photo: "backtoback"
      },
      {
        title: "ch1ga",
        description: "",
        link: "https://vk.com/ch1ga",
        photo: "chiga"
      },
      {
        title: "Doqta",
        description: "",
        link: "https://vk.com/vdoqte",
        photo: "doqta"
      },
      {
        title: "#EkzaSelecta",
        description: "",
        link: "https://soundcloud.com/ekzaselecta",
        photo: "ekza"
      },
      {
        title: "ISTWA",
        description: "",
        link: "https://vk.com/kosmoaila",
        photo: "istwa"
      },
      {
        title: "Mir Ashov",
        description: "",
        link: "https://vk.com/id79322013",
        photo: "mirashov"
      },
      {
        title: "Vuestra Merced",
        description: "",
        link: "https://soundcloud.com/vuestramerced",
        photo: "vuestra"
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

  let chillArray = lineup.chill.map(item => {
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
            },
            {
              text: "Чиллаут",
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
              content: chillArray
            }
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
