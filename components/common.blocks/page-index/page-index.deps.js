({
  mustDeps: "i18n",
  shouldDeps: [
    {
      block: "title",
      mods: {
        size: "*",
        theme: "plus"
      }
    },
    {
      block: "button",
      mods: {
        theme: "plus",
        size: "m",
        togglable: "check",
        type: 'link'
      }
    },
    {
      block: 'tabs',
      mods: {
        type: 'button'
      }
    },
    {
      block: 'graphics',
      mods: {
        view: ['left', 'right', 'topStar', 'midStar', 'botStar', 'bottom']
      }
    },
    {
      block: 'paragraph',
      mods: {
        size: ['l','m', 's'],
        narrow: true
      }
    },
    {
      block: 'icon',
      mods: {
        arrow: '*'
      }
    }
  ]
});
