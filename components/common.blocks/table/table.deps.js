[
  {
    shouldDeps: [
      {
        block: "button",
        mods: {
          theme: "islands",
          size: "m",
          togglable: "check",
          type: "link"
        }
      },
      {
        block: "icon",
        mods: {
          symbol: "*"
        }
      },
      {
        elems: ["row", "pagination"]
      }
    ]
  },
  {
    tech: "js",
    mustDeps: [
      {
        tech: 'bemhtml', elems: ["row", "pagination"]
      },
      {
        block: "button",
        mods: {
          theme: "islands",
          size: "m",
          togglable: "check",
          type: "link",
          active: true
        }
      },
      {
        block: "icon",
        mods: {
          symbol: "*"
        }
      }
    ]
  }
];



