({
  mustDeps: "i18n",
  shouldDeps: [
    {
      block: 'form'
    },
    {
      block: "button",
      mods: {
        theme: "islands",
        size: "m",
        togglable: "check",
        type: 'link'
      }
    },
    {
      block: "title",
      mods: {
        size: "*",
        theme: "islands"
      }
    },
  ]
});
