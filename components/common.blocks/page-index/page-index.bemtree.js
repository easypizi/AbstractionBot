block("page-index").content()(() => {
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
                      imgSrc: "/assets/images/Date.png"
                    }
                  ]
                },
                {
                  elem: "logo",
                  content: [
                    {
                      block: "lazyImage",
                      mix: [{ block: "lazyImage", mods: { hidden: true } }],
                      imgSrc: "/assets/images/Logo.png"
                    }
                  ]
                },
                {
                  block: "button",
                  mix: { block: "page-index", elem: "buyButton" },
                  mods: {
                    type: "link"
                  },
                  url: "/buy",
                  text: "Купить билет"
                },
                {
                  elem: "video",
                  content: "Here will be video block"
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
                content:
                  "Techno, trance и природа. 2 дня, 3 ночи, частная территория, более 100 артистов и ди джеев, музыка нон-стоп. Здесь будет всё, как ты любишь. Погнали!"
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
                content:
                  "В 2019 году привозим самый прогрессивный саунд мира в лице самых мощных и актуальных артистов"
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
                    elemMods: { active: true },
                    content: ["транс"]
                  },
                  {
                    elem: "pane",
                    elemMods: { active: false },
                    content: ["техно"]
                  }
                ]
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                url: "/lineup",
                text: "Весь лайн-ап"
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
                  elemMods: { middle: true }
                },
                mods: {
                  view: "midStar"
                }
              },
              "Gallery with photo"
            ]
          }
        },
        {
          elem: "fifth",
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
                mods: { size: "s" },
                content:
                  'Фестиваль будет проходить на частной территории. Горнолыжный курорт "Красное Озеро"'
              },
              {
                block: "title",
                mods: {
                  size: "m"
                },
                content: "Как добраться"
              },
              {
                block: "title",
                mods: {
                  size: "s"
                },
                content: "Фестивальным трансфером"
              },
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
                  size: "s"
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
                  size: "s"
                },
                content: {
                  html:
                    '<strong>Маршрут 1: </strong>Трасса "Скандинавия" - едете по Выборгскому направлению, после мотеля "Огоньки" и заправки "ПТК" поворот направо на "Первомайское". Далее через Первомайское по старой Выборгской трассе до Подгорья. Затем поворот направо на "Мичуринское", ехать до Коробицыно. После Коробицыно еще около километра по трассе и поворот налево в курорт "Красное озеро", висят большие баннеры курорта, сложно не заметить. Дорога от Санкт-Петербурга занимает примерно 1,5-2 часа в зависимости от дорожной обстановки. '
                }
              },
              {
                block: "paragraph",
                mods: {
                  size: "s"
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
                  size: "s"
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
          content: "Here will be yandex Maps Widget"
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
                mods: { size: "m" },
                content: "Кемпинг"
              },
              {
                block: "paragraph",
                mods: { size: "s" },
                content:
                  "На территории фестиваля оборудованы места для кемпинга. Создана вся необходимая инфраструктура: туалеты, места сбора мусора, места для разведения огня. За проживание в кемпинге дополнительная плата не взимается. Проживая в кемпинге, гости фестиваля могут посещать столовую, душ. Если у Вас нет своего снаряжения, его можно арендовать."
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                url: "/rent",
                text: "Арендовать снаряжение"
              },
              {
                block: "title",
                mods: { size: "m" },
                content: "Аренда домика"
              },
              {
                block: "paragraph",
                mods: { size: "s" },
                content:
                  "На Фестивале Abstraction X вы можете волшебно отдохнуть в уютном коттедже после похода на мейн: спать в удобной кровати, принять душ, сварить вкусный кофе и наблюдать невероятную красоту Красного озера из своих окон. Ознакомьтесь с информацией о ценах, а также о наличии свободных коттеджей."
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                url: "/rent",
                text: "Арендовать домик"
              },
              {
                block: "title",
                mods: { size: "m" },
                content: "Трансфер"
              },
              {
                block: "paragraph",
                mods: { size: "s" },
                content:
                  "Организован трансфер на автобусах из Санкт-Петербурга и из Москвы. Количество мест в автобусах ограничено. Бронируйте места заранее"
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                url: "/rent",
                text: "Забронировать трансфер"
              }
            ]
          }
        },
        {
          elem: "seventh",
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
                  elem: "absImageBottom",
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
                  elem: "absImageBottom",
                  elemMods: { slime: true }
                },
                mods: {
                  view: "bottom"
                }
              },
              {
                block: "button",
                mods: {
                  type: "link"
                },
                url: "/buy",
                text: "Купить билет"
              }
            ]
          }
        }
      ]
    }
  ];
});
