block("card").content()((node, ctx) => {
  let artist = ctx.artist;
  return [
    {
      elem: "wrapper",
      content: [
        {
          elem: "title",
          content: artist.title ? artist.title : "artist title"
        },
        {
          elem: "description",
          content: artist.description ? artist.description : "artist description"
        },
        {
          block: "lazyImage",
          mix: [{ block: "lazyImage", mods: { hidden: true } }, { block: "card", elem: "photo" }],
          imgSrc: artist.photo ? "/assets/images/photos/" + artist.photo : "/assets/images/photos/default.png"
        },
        {
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
              url: artist.link ? artist.link : "/",
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
          imgSrc: ctx.photo ? "/assets/images/photos/" + ctx.photo : "/assets/images/photos/default.png"
        }
      ]
    }
  ];
});
