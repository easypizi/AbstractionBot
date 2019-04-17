({  
  mustDeps: [
    'i18n'
  ],
  shouldDeps: [
    {
      block: 'page-index'
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
        size: ['l', 'm', 's']
      }
    },
    {
      block: 'paragraph',
      mods: {
        size: ['l','m','s']
      }
    }
  ]
})


