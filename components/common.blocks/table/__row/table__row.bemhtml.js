block("table")
  .elem("row")
  .content()(function() {
  let data = this.ctx.data;

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + " " + month + " " + year;
    return time;
  }

  return [
    {
      elem: "body-date",
      content: timeConverter(data.item.created_at)
    },
    {
      elem: "body-title",
      content: data.item.title
    },
    {
      elem: "body-actions",
      content: [
        {
          block: "button",
          mods: {
            theme: "islands",
            size: "m",
            togglable: "check",
            checked: !data.isVisible
          },
          icon: {
            block: "icon",
            mods: {
              symbol: !data.isVisible ? "hide" : "eye"
            }
          }
        },
        {
          block: "button",
          mods: {
            theme: "islands",
            size: "m",
            type: "link"
          },
          url: "/edit/" + data.linkId,
          icon: {
            block: "icon",
            mods: {
              symbol: "edit"
            }
          }
        }
      ]
    }
  ];
});
