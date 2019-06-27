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
        link: "https://soundcloud.com/tochka_sborki/tochka-sborki-djs-live-at-masts-club-10112017  "
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
                  elem: "video",
                  content: {
                    html:
                      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/agp0yNzh64Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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
              // {
              //   block: "button",
              //   mods: {
              //     type: "link"
              //   },
              //   url: "/rent",
              //   text: "Арендовать снаряжение"
              // },
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
                block: "paragraph",
                mods: { size: "s", blue: true },
                content: "Трансфер организован на автобусах из Санкт-Петербурга и из Москвы. Количество мест в автобусах ограничено. Бронируйте места заранее. "
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
        }
      ]
    }
  ];
});
