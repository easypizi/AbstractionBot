block("table").content()(function() {
  let pagesCounter = this.ctx.pages;
  let dataArray = this.ctx.data;

  let rowsAndPages = dataArray.map((item, index) => {
    let isColoured = index % 2 ? true : false;

    return {
      elem: "row",
      mix: { block: "table", elem: !isColoured ? "even" : "odd" },
      js: {
        linkId: item.numId
      },
      data: {
        item: item,
        number: index + 1,
        linkId: item.numId,
        isVisible: item.visible > 0 ? true : false
      }
    };
  });

  return [
    {
      elem: "header",
      content: [
        {
          elem: "header-date",
          content: "date"
        },
        {
          elem: "header-title",
          content: "title"
        },
        {
          elem: "header-actions",
          content: "actions"
        }
      ]
    },
    {
      elem: "body",
      content: rowsAndPages
    },
    {
      elem: "footer",
      content: {
        elem: "pagination",
        pages: pagesCounter > 1 ? pagesCounter : 1,
        js: {
          pages: pagesCounter > 1 ? pagesCounter : 1
        }
      }
    }
  ];
});
