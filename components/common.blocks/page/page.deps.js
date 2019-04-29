({  
  mustDeps: [
    'i18n',
  ],
  shouldDeps: [
    {
      block: 'page-index'
    },
        {
      block: 'page-gallery'
    },
    {
      block: 'socials',
      mods: {
        vertical: true
      }
    },
    {
      block: 'page',
      mods: {
        theme: 'plus'
      }
    },
    'header',
    'body',
    'footer',
    {
      block: 'font',
      mods: {
        family: '*'
      }
    },
    {
      block: 'title',
      mods: {
        size: ['l', 'm', 's'],
        blue: true
      }
    },
    {
      block: 'paragraph',
      mods: {
        size: ['l','m','s'],
        blue: true
      }
    },
    {
      block: 'button',
      mods: {
        ym: true
      }
    }
  ]
})


