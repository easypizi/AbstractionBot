[
  {
    shouldDeps: [
      {
        block: "form-field",
        mods: {
          type: ["input", "textarea", "attach"],
          view: 'share'
        }
      },
      {
        block: 'image'
      },
      {
        block: "button",
        mods: {
          type: "submit",
          disabled: true,
          size: "*",
          view: 'action'
        }
      },
      {
        block: "input",
        mods: {
          type: "*",
          theme: "islands",
          size: "l",
          "has-clear": true
        },
      },
      {
          block: 'attach',
          mods: {
              theme: 'islands',
              size: 'l'
          }
      },
      {
        block: "editor",
        mods: {
          theme: "islands",
          size: "l",
          width: "available",
          mode: "source",
          renderer: "marked",
          "has-preview": true,
          "has-actions": true
        },
      }
    ]
  }
]

