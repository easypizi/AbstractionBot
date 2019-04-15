block('burger').js()(true)

block('burger').content()(function() {
    return[
    {
      elem: 'content',
      content: [
      {
        elem: 'line',
        tag: 'span'
      },
      {
        elem: 'line',
        tag: 'span'
      },
      {
        elem: 'line',
        tag: 'span'
      }
      ]
    }
    ]
});
