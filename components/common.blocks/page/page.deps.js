({  
  mustDeps: [
    'i18n'
  ],
  shouldDeps: [
    {
      block: 'page',
      mods: {
        theme: 'islands'
      }
    },
    'header',
    'body',
    'footer',
    {
      block: 'page-index'
    },
    {
      block: 'page-edit'
    },
    {
      block: 'font',
      mods: {
        family: '*'
      }
    }
  ]
})


