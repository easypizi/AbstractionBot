block("page-index").content()(() => {
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
        description: "",
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
        title: "German Air",
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
        title: "Mixa Wawer",
        description: "",
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
        title: "Voodoo Noise aka Otto O'Shea",
        description: "Mistral'",
        photo: "Voodoo",
        link: "https://soundcloud.com/voodoonoise"
      },
      {
        title: "Pete",
        description: "",
        photo: "pete",
        link: "https://soundcloud.com/peter-kuschnereit"
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
        link: "https://soundcloud.com/tochka_sborki/tochka-sborki-djs-live-at-masts-club-10112017  "
      },
      {
        title: "qqoma",
        description: "",
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
      },
      {
        title: "Norton Commander ↓",
        description: "",
        link: "",
        photo: "norton"
      },
      {
        title: "Saprano",
        description: "",
        link: "",
        photo: "saprano"
      },
      {
        title: "Andrey Stels",
        description: "",
        link: "",
        photo: "stels"
      }
    ],
    trance: [
      {
        title: "Fagin's Reject ",
        description: "(Wildthings Records), UK  ",
        link: "https://soundcloud.com/fagins_reject ",
        photo: "fagins"
      },
      {
        title: "Headworks ",
        description: "(Wildthings Records), UK  ",
        link: "https://soundcloud.com/headworks-1 ",
        photo: "Headworks"
      },
      {
        title: "Beardy Weardy ",
        description: "(Wildthings Records) UK  + Dj set ",
        link: "https://soundcloud.com/beardy-weardy-wildthings ",
        photo: "Beardy"
      },
      {
        title: "Blastourist (HU)",
        description: "",
        link: "https://soundcloud.com/blastourist",
        photo: "blastourist"
      },
      {
        title: "Samadhi ",
        description: "(Hilltop Records) - Goa/Ru  ",
        link: "https://soundcloud.com/samadhi  ",
        photo: "samadhi"
      },
      {
        title: "Groove Hunter ",
        description: "( World People Production/NT Group ), Ru   ",
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
        title: "psYphomet ",
        description: "(Multifrequency Records), Ru ",
        link: "https://soundcloud.com/psyphometboobblegooms    ",
        photo: "psy"
      },
      {
        title: "Sure ",
        description: "(NT Group Promotion), Ru  ",
        link: "https://www.mixcloud.com/surepb/  ",
        photo: "sure"
      },
      {
        title: "Satori",
        description: "(Vertigo Records), Ru ",
        link: "https://www.facebook.com/nata.satori ",
        photo: "satori"
      },
      {
        title: "Troll machine",
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
        title: "Racoon",
        description: "",
        link: "https://soundcloud.com/raccoon-374329708",
        photo: "racoon"
      },
      {
        title: "Egova",
        description: "",
        link: "https://soundcloud.com/egova",
        photo: "egova"
      },
      {
        title: "Lacerta",
        description: "",
        link: "https://soundcloud.com/lacerta-artist",
        photo: "lacerta"
      },
      {
        title: "Psy-h",
        description: "",
        link: "https://vk.com/psyh_project",
        photo: "psyh"
      },
      {
        title: "Apocalypse TV",
        description: "Dream project records",
        link: "https://www.facebook.com/ApocalypseTV",
        photo: "apocalypse"
      },
      {
        title: "Karbofosssss",
        description: "",
        link: "https://www.mixcloud.com/Karbofosssss/",
        photo: "karbofos"
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
      },
      {
        title: "Dj biosintez",
        description: "",
        link: "https://vk.com/bsntz",
        photo: "biosintez"
      },
      {
        title: "Djony Yoga",
        description: "",
        link: "https://soundcloud.com/djonyoga2/djony-yoga-wonderlan",
        photo: "yoga"
      },
      {
        title: "Marushin",
        description: "",
        link: "",
        photo: "marushin"
      },
      {
        title: "Шаманика",
        description: "",
        link: "https://vk.com/shamanikamusic",
        photo: "shaman"
      },
      {
        title: "EGOIST",
        description: "",
        link: "https://soundcloud.com/projectegoist",
        photo: "egoist"
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

  let photoArchive = [];

  for (let i = 1; i < 47; i++) {
    photoArchive.push(i);
  }

  let photoArray = photoArchive.map(item => {
    return {
      block: "card",
      mods: {
        image: true
      },
      photo: item + ".jpg"
    };
  });

  let shopsArray = [
    {
      name: "Мария",
      address: "",
      city: "Мск",
      site: "",
      phone: "+79030131482"
    },
    {
      name: "Ирина",
      address: "",
      city: "Спб",
      site: "",
      phone: "+79819895041"
    },
    {
      name: "Дмитрий",
      address: "",
      city: "Пермь",
      site: "",
      phone: "+79630147655"
    },
    {
      name: "СпбБонг",
      address: "ул. Гончарная, д.13",
      city: "Спб",
      site: "https://spbbong.com/",
      phone: "+79219396299"
    },
    {
      name: "ACID WEAR",
      address: "ул. Холодильный пер., д.3",
      city: "Мcк",
      site: "https://www.acidwear.ru",
      phone: "+74954819966"
    },
    {
      name: "Boogie shop",
      address: "ул. Б.Конюшенная, д.17",
      city: "Спб",
      site: "https://www.boogie-shop.ru/shop/boogie-shop-na-bolshoy-konyushennoy-17",
      phone: "+79650463665"
    },
    {
      name: "Boogie shop",
      address: "ЛОФТ-ПРОЕКТ ЭТАЖИ",
      city: "Спб",
      site: "https://www.boogie-shop.ru/shop/boogie-shop-v-loft-etazhi",
      phone: "+79319707320"
    },
    {
      name: "СпбГриб",
      address: "Лиговский пр., д.56",
      city: "Спб",
      site: "http://spbgrib.ru/",
      phone: "+79817254565"
    }
  ];

  return [
    {
      elem: "content",
      content: [
        {
          elem: "first",
          content: [
            {
              block: "graphics",
              mix: {
                block: "page-index",
                elem: "absImage",
                elemMods: { top: true }
              },
              mods: {
                view: "topStar"
              }
            },
            {
              block: "graphics",
              mix: {
                block: "page-index",
                elem: "absImage",
                elemMods: { left: true }
              },
              mods: {
                view: "left"
              }
            },
            {
              block: "graphics",
              mix: {
                block: "page-index",
                elem: "absImage",
                elemMods: { right: true }
              },
              mods: {
                view: "right"
              }
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
                  elem: "date",
                  content: [
                    {
                      block: "lazyImage",
                      mix: [{ block: "lazyImage", mods: { hidden: true } }],
                      imgSrc: "assets/images/Date.png"
                    }
                  ]
                },
                {
                  elem: "logo",
                  content: [
                    {
                      block: "lazyImage",
                      mix: [{ block: "lazyImage", mods: { hidden: true } }],
                      imgSrc: "assets/images/Logo.png"
                    }
                  ]
                },
                {
                  block: "button",
                  mix: { block: "page-index", elem: "buyButton" },
                  mods: {
                    type: "link",
                    ym: true
                  },
                  url: "http://rupor.biz/widgets/event-tickets/361",
                  text: "Купить билет"
                },
                {
                  block: "button",
                  mix: { block: "page-index", elem: "sideButton" },
                  mods: {
                    type: "link"
                  },
                  target: "_blank",
                  url: "http://rupor.biz/widgets/event-tickets/393",
                  text: "Арендовать домик"
                },
                {
                  block: "button",
                  mix: { block: "page-index", elem: "sideButton" },
                  mods: {
                    type: "link"
                  },
                  target: "_blank",
                  url: "http://rupor.biz/widgets/event-tickets/411",
                  text: "Забронировать трансфер"
                },
                {
                  elem: "video",
                  content: {
                    html:
                      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/V5qSnIgMr80" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                  }
                }
              ]
            }
          ]
        },
        {
          elem: "second",
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
                  block: "page-index",
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
                content: "ABSTRACTION X"
              },
              {
                block: "paragraph",
                mods: {
                  size: "l"
                },
                content: "Techno, trance и природа. 3 дня, 2 ночи, частная территория, более 100 артистов и ди джеев, музыка нон-стоп. Здесь будет всё, как ты любишь. Погнали!"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
                },
                content:
                  "Десять лет назад мы превратили наши неясные фантазии о путешествии в альтернативную реальность в один из лучших лесных фестивалей электронной музыки, из года в год помогая не только отвлечься от всего несущественного, повседневного, но и открывать для себя новые грани музыки, природы, творчества, дружбы и лесных приключений."
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
                },
                content:
                  "Десятый раз мы готовимся отправить вас через бесчисленность измерений и бесконечное пространство возможностей на лесную планету, где стихии сплетаются с восприятием, где воздух, огонь, вода и земля объединяются в один неразрывный абстрактный узор с пятью чувствами, рождая уникальную встречу Вселенной и Человека."
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
                },
                content:
                  "Этим летом мы снова запустим лучший лайн-ап на взлётных полосах танцполов. На Abstraction X время остановится, чтобы подарить каждому миг откровения, встреч с самим собой и момент истины. Приглашаем тебя стать соавтором этого фрактального калейдоскопа. Стань частью абстракции."
              }
            ]
          }
        },
        {
          elem: "third",
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
                block: "title",
                mods: {
                  size: "l"
                },
                content: "Музыка"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
                },
                content: "В 2019 году привозим самый прогрессивный саунд мира в лице самых мощных и актуальных артистов"
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
                    elemMods: { active: true },
                    content: [
                      {
                        block: "gallery",
                        js: {
                          slides: 4
                        },
                        elems: tranceArray
                      }
                    ]
                  },
                  {
                    elem: "pane",
                    elemMods: { active: false },
                    content: [
                      {
                        block: "gallery",
                        js: {
                          slides: 4
                        },
                        elems: technoArray
                      }
                    ]
                  },
                  {
                    elem: "pane",
                    elemMods: { active: false },
                    content: [
                      {
                        block: "gallery",
                        js: {
                          slides: 4
                        },
                        elems: chillArray
                      }
                    ]
                  }
                ]
              },
              {
                block: "button",
                mix: { block: "page-index", elem: "lineup" },
                mods: {
                  type: "link"
                },
                url: "/lineup",
                text: "Весь лайн-ап",
                icon: {
                  block: "icon",
                  mods: {
                    arrow: "right"
                  }
                }
              }
            ]
          }
        },
        {
          elem: "forth",
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
                  block: "page-index",
                  elem: "absImage",
                  elemMods: { top: true }
                },
                mods: {
                  view: "topStar"
                }
              },
              {
                block: "gallery",
                mods: {
                  photo: true
                },
                js: {
                  slides: 4
                },
                elems: photoArray
              }
            ]
          }
        },
        {
          elem: "fifth",
          attrs: {
            id: "place"
          },
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
                block: "title",
                mods: { size: "l" },
                content: "Место"
              },
              {
                block: "paragraph",
                mods: { size: "s", narrow: true },
                content: 'Фестиваль будет проходить на частной территории. Горнолыжный курорт "Красное Озеро"'
              },
              {
                block: "title",
                mods: {
                  size: "m",
                  blue: true
                },
                content: "Как добраться"
              },
              // {
              //   block: "title",
              //   mods: {
              //     size: "s"
              //   },
              //   content: "Фестивальным трансфером"
              // },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "Общественным транспортом"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s",
                  blue: true
                },
                content:
                  "Автобус № К898 от станции метро «Парнас». Билеты покупать заранее в кассе. Справки по телефону: +7(812)748-27-39 Время отправления автобусов: 9:30, 13:00, 15:00, 18:30, 20:30 Автобус № 897 от станции метро «Девяткино». Время отправления автобусов: 08:40, 10:10, 11:15, 14:50, 16:50, 19:10 Справки по телефонам: +7(981)696-30-37"
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "На машине"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s",
                  blue: true
                },
                content: {
                  html:
                    '<strong>Маршрут 1: </strong>Трасса "Скандинавия" - едете по Выборгскому направлению, после мотеля "Огоньки" и заправки "ПТК" поворот направо на "Первомайское". Далее через Первомайское по старой Выборгской трассе до Подгорья. Затем поворот направо на "Мичуринское", ехать до Коробицыно. После Коробицыно еще около километра по трассе и поворот налево в курорт "Красное озеро", висят большие баннеры курорта, сложно не заметить. Дорога от Санкт-Петербурга занимает примерно 1,5-2 часа в зависимости от дорожной обстановки. '
                }
              },
              {
                block: "paragraph",
                mods: {
                  size: "s",
                  blue: true
                },
                content: {
                  html:
                    '<strong>Маршрут 2: </strong>По Новоприозерскому шоссе до поворота налево в Раздолье/Мичуринское, далее прямо около 30 км. Не доезжая 1 км до поселка Коробицыно, поворот направо к горнолыжному курорту "Красное Озеро". Висят большие баннеры курорта, сложно не заметить. Дорога от Санкт-Петербурга занимает примерно 1,5-2 часа в зависимости от дорожной обстановки.'
                }
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "На такси"
              },
              {
                block: "paragraph",
                mods: {
                  size: "s",
                  blue: true
                },
                content: [
                  'Из Санкт-Петербурга много вариантов такси, машина стоит около 2000-2500 руб. Рассчитайте поездку из вашего района, указав диспетчеру Горнолыжный курорт "Красное Озеро", вблизи пос. Коробицыно. Также в районе поселков: Первомайское, Рощино и Курорта "Красное Озеро" будут курировать машины такси. Цены: от Рощино до Фестиваля - 1300₽; от Первомайского до Фестиваля - 900₽'
                ]
              }
            ]
          }
        },
        {
          elem: "sixth",
          content: {
            html:
              '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A85a6825746cf088954a942bed768433f64ad7a55de4898b553ab4d69823aac27&width=100%25&height=100%&lang=ru_RU&scroll=true"></script>'
          }
        },
        {
          elem: "seventh",
          content: {
            elem: "contentWrapper",
            mix: {
              block: "page",
              mods: {
                width: "small"
              }
            },
            content: [
              {
                block: "title",
                mods: { size: "m", blue: true },
                content: "Кемпинг"
              },
              {
                block: "paragraph",
                mods: { size: "s", blue: true },
                content:
                  "На территории фестиваля оборудованы места для кемпинга. Создана вся необходимая инфраструктура: туалеты, места сбора мусора, места для разведения огня. За проживание в кемпинге дополнительная плата не взимается."
              },
              {
                block: "title",
                mods: { size: "m", blue: true },
                content: "Аренда домика"
              },
              {
                block: "paragraph",
                mods: { size: "s", blue: true },
                content:
                  "На Фестивале Abstraction X вы можете волшебно отдохнуть в уютном коттедже после похода на мейн: спать в удобной кровати, принять душ, сварить вкусный кофе и наблюдать невероятную красоту Красного озера из своих окон. Ознакомьтесь с информацией о ценах, а также о наличии свободных коттеджей."
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                target: "_blank",
                url: "http://rupor.biz/widgets/event-tickets/393",
                text: "Арендовать домик"
              },
              {
                block: "title",
                mods: { size: "m", blue: true },
                content: "Трансфер"
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "ТРАНСФЕР ДО ABSTRACTION X FESTIVAL ИЗ МОСКВЫ"
              },
              {
                block: "paragraph",
                mods: { size: "s", blue: true },
                content:
                  "ВНИМАНИЕ, МОСКВА, Появилась возможность телепортироваться из Москвы до Фестиваля Abstraction X. За рулем надежные водители, которые уже несколько раз привозили к нам веселых москвичей! Отправление из Москвы - метро Речной вокзал (в сторону области). Выезды будут осуществляться по следующему графику: Из Москвы:  15 августа (четверг) - 22:00 В Москву: 18 августа (понедельник) 12:00. Стоимость билета 4000 руб.  Подробная информация и бронирование: +7925-218-58-84, +7977-343-58-08 , Евгений"
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: {
                  html: "ТРАНСФЕР ДО ABSTRACTION X FESTIVAL ИЗ <br> САНКТ-ПЕТЕРБУРГА"
                }
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                target: "_blank",
                url: "http://rupor.biz/widgets/event-tickets/411",
                text: "Забронировать трансфер"
              }
            ]
          }
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
                  block: "page-index",
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
                  block: "page-index",
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
        },
        {
          elem: "phoneBlock",
          mix: {
            block: "page",
            mods: { width: "small" }
          },
          content: [
            {
              block: "paragraph",
              mods: {
                size: "l"
              },
              content: "Вы можете приобрести бумажные билеты в магазинах и у распространителей: "
            },
            {
              block: "table",
              content: [
                {
                  elem: "header",
                  content: [
                    {
                      elem: "cell",
                      mix: {
                        block: "table",
                        mods: { "h-cell": true }
                      },
                      content: "Представитель"
                    },
                    {
                      elem: "cell",
                      mix: {
                        block: "table",
                        mods: { "h-cell": true }
                      },
                      content: "Город"
                    },
                    {
                      elem: "cell",
                      mix: {
                        block: "table",
                        mods: { "h-cell": true }
                      },
                      content: "Адрес"
                    },
                    {
                      elem: "cell",
                      mix: {
                        block: "table",
                        mods: { "h-cell": true }
                      },
                      content: "Сайт"
                    },
                    {
                      elem: "cell",
                      mix: {
                        block: "table",
                        mods: { "h-cell": true }
                      },
                      content: "Телефон"
                    }
                  ]
                },
                {
                  elem: "body",
                  content: shopsArray.map(item => {
                    return {
                      elem: "row",
                      content: [
                        {
                          elem: "cell",
                          mix: {
                            block: "table",
                            mods: { "b-cell": true }
                          },
                          content: item.name
                        },
                        {
                          elem: "cell",
                          mix: {
                            block: "table",
                            mods: { "b-cell": true }
                          },
                          content: item.city
                        },
                        {
                          elem: "cell",
                          mix: {
                            block: "table",
                            mods: { "b-cell": true }
                          },
                          content: item.address
                        },
                        {
                          elem: "cell",
                          mix: {
                            block: "table",
                            mods: { "b-cell": true }
                          },
                          content: [
                            item.site &&
                              item.site !== "" && {
                                block: "button",
                                mods: {
                                  type: "link"
                                },
                                url: item.site,
                                content: {
                                  block: "icon",
                                  mods: {
                                    symbol: "web"
                                  }
                                }
                              }
                          ]
                        },
                        {
                          elem: "cell",
                          mix: {
                            block: "table",
                            mods: { "b-cell": true }
                          },
                          content: [
                            {
                              block: "button",
                              mods: {
                                type: "link"
                              },
                              url: "tel:" + item.phone,
                              content: {
                                block: "icon",
                                mods: {
                                  symbol: "call"
                                }
                              }
                            }
                          ]
                        }
                      ]
                    };
                  })
                }
              ]
            }
          ]
        }
      ]
    }
  ];
});
