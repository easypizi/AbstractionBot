block("card").content()((node, ctx) => {
  let artist = ctx.artist;
  return [
    {
      elem: "wrapper",
      js: {
        link: artist.link
      },
      content: [
        {
          elem: "title",
          content: artist.title ? artist.title : "TBA"
        },
        {
          elem: "description",
          content: artist.description ? artist.description : ""
        },
        {
          block: "lazyImage",
          mix: [{ block: "lazyImage", mods: { hidden: true } }, { block: "card", elem: "photo" }],
          imgSrc: artist.photo ? "assets/images/artist/" + artist.photo + ".jpg" : "assets/images/photos/default.png"
        },
        artist.link !== "" && {
          elem: "link",
          content: [
            {
              block: "icon",
              mods: {
                symbol: "link"
              }
            },
            {
              block: "link",
              url: artist.link,
              target: "_blank",
              content: "MixCloud"
            }
          ]
        }
      ]
    }
  ];
});

block("card")
  .mod("image")
  .content()((node, ctx) => {
  return [
    {
      elem: "wrapper",
      content: [
        {
          block: "lazyImage",
          mix: [{ block: "lazyImage", mods: { hidden: true } }, { block: "card", elem: "photo" }],
          imgSrc: "assets/images/photos/" + ctx.photo
        }
      ]
    }
  ];
});
