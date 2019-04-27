block("socials").content()(function() {
  let socials = [
    {
      title: "fb",
      link: "https://www.facebook.com/abstractionfest/"
    },
    {
      title: "inst",
      link: "https://www.instagram.com/abstractionfest/"
    },
    {
      title: "vk",
      link: "https://vk.com/abstractionfest"
    }
  ];

  let socialContent = socials.map(acc => {
    return {
      block: "link",
      mods: {
        "no-animate": true
      },
      attrs: {
        rel: "noopener nofollow noreferrer",
        id: "social-" + acc.title
      },
      target: "_blank",
      url: acc.link,
      content: {
        block: "icon",
        mods: {
          socials: acc.title
        }
      }
    };
  });

  return socialContent;
});
