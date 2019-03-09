block("page-edit").content()(function(node) {
  let article = node.data.article;
  let currentID = node.data.content;

  return [
    {
      elem: "content",
      content: [
        {
          block: "button",
          mods: {
            theme: "islands",
            size: "xl",
            type: "link",
            view: "action"
          },
          url: "/",
          text: "Back"
        },
        {
          block: "title",
          mods: {
            size: "s"
          },
          content: "Edit article"
        },
        {
          block: "form",
          enctype: "multipart/form-data",
          method: "POST",
          article: article,
          js: {
            currentID: currentID,
            article: article
          }
        }
      ]
    }
  ];
});
